// This script generates 100 random users and saves them to users1.json
import { users1 } from './MockUsersCreator';
import * as fs from 'fs';

fs.writeFileSync('users1.json', JSON.stringify(users1, null, 2));
console.log('100 users saved to users1.json');
