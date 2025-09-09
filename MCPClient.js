#!/usr/bin/env node

/**
 * PRODUCTION-READY MCP CLIENT
 * Copy this file to your backend project and use it directly
 */

import { spawn } from 'child_process';
import { EventEmitter } from 'events';

export class MCPClient extends EventEmitter {
  constructor(options = {}) {
    super();
    this.serverProcess = null;
    this.requestId = 0;
    this.pendingRequests = new Map();
    this.isReady = false;
    this.options = {
      timeout: 30000,
      mcpServerPath: options.mcpServerPath || 'C:\\fronted\\nrtLinkAppVite\\mcp-server\\dist\\index.js',
      ...options
    };
  }

  async start() {
    if (this.isReady) return;

    return new Promise((resolve, reject) => {
      console.log('🚀 Starting MCP server...');
      
      this.serverProcess = spawn('node', [this.options.mcpServerPath], {
        stdio: ['pipe', 'pipe', 'pipe'],
        cwd: process.cwd()
      });

      let output = '';

      // Handle both stdout and stderr for server ready signal
      const handleOutput = (data) => {
        const chunk = data.toString();
        output += chunk;
        
        if (chunk.includes('running on stdio') && !this.isReady) {
          this.isReady = true;
          console.log('✅ MCP server ready!');
          resolve();
        }
        
        this.handleServerResponse(output);
      };

      this.serverProcess.stdout.on('data', handleOutput);
      this.serverProcess.stderr.on('data', handleOutput);

      this.serverProcess.on('error', (error) => {
        reject(new Error(`Server failed to start: ${error.message}`));
      });

      // Startup timeout
      setTimeout(() => {
        if (!this.isReady) {
          reject(new Error('Server startup timeout'));
        }
      }, 10000);
    });
  }

  handleServerResponse(output) {
    const lines = output.split('\n');
    
    lines.forEach(line => {
      if (line.trim() && line.includes('"jsonrpc"')) {
        try {
          const response = JSON.parse(line);
          if (response.id && this.pendingRequests.has(response.id)) {
            const { resolve, reject } = this.pendingRequests.get(response.id);
            this.pendingRequests.delete(response.id);
            
            if (response.error) {
              reject(new Error(response.error.message));
            } else {
              resolve(response.result);
            }
          }
        } catch (error) {
          // Ignore malformed JSON
        }
      }
    });
  }

  async sendRequest(method, params = {}) {
    if (!this.isReady) {
      throw new Error('MCP server not ready');
    }

    return new Promise((resolve, reject) => {
      const id = ++this.requestId;
      const request = { jsonrpc: "2.0", id, method, params };

      this.pendingRequests.set(id, { resolve, reject });
      this.serverProcess.stdin.write(JSON.stringify(request) + '\n');

      setTimeout(() => {
        if (this.pendingRequests.has(id)) {
          this.pendingRequests.delete(id);
          reject(new Error('Request timeout'));
        }
      }, this.options.timeout);
    });
  }

  // MAIN METHODS FOR YOUR INFLUENCER PLATFORM

  async analyzeProject(projectPath) {
    return this.sendRequest('tools/call', {
      name: 'analyze_project_structure',
      arguments: { projectPath }
    });
  }

  async getChatInsights(projectPath) {
    return this.sendRequest('tools/call', {
      name: 'generate_backend_insights',
      arguments: { projectPath, focusArea: 'chat-system' }
    });
  }

  async getDealInsights(projectPath) {
    return this.sendRequest('tools/call', {
      name: 'generate_backend_insights',
      arguments: { projectPath, focusArea: 'deal-management' }
    });
  }

  async getBusinessInsights(projectPath) {
    return this.sendRequest('tools/call', {
      name: 'analyze_business_model',
      arguments: { projectPath, focusArea: 'monetization' }
    });
  }

  async generateComponent(name, type = 'deal-card') {
    return this.sendRequest('tools/call', {
      name: 'generate_component',
      arguments: {
        componentName: name,
        componentType: type,
        integrationTarget: 'platform'
      }
    });
  }

  stop() {
    if (this.serverProcess) {
      this.serverProcess.kill();
      this.serverProcess = null;
      this.isReady = false;
    }
  }
}
