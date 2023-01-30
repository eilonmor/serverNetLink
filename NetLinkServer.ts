import {Request, Response } from 'express'
import express from 'express'
import { listofUsers } from './UsersMockList';
import cors from 'cors'
const app = express()
const port = 3002

app.use(cors())

app.get('/NetLink', (req: Request, res: Response)=> {
    res.send(JSON.stringify(listofUsers))
});


app.listen(port, () => {
    console.log(`server is raunning at http://localhost${port}`)
});