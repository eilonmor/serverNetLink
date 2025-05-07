import {Request, Response } from 'express'
import express from 'express'
import { listofUsers } from './UsersMockList';
import cors from 'cors'
// import './db/mongoConnect'
// import { User } from './db/mongoConnect';
// import { UserNetLink } from './db/netLinkDbConnect';
 
const app = express()
const port = 3002

app.use(cors())

app.get('/', (req: Request, res: Response)=> {
    res.send(JSON.stringify('Welcome to Eilon Server'))
});

app.get('/NetLink', (req: Request, res: Response)=> {
    res.send(JSON.stringify(listofUsers))
});

// app.get('/sportUsers', async(req: Request, res: Response)=> {
//     let data = await User.find({name: 'eilon'})
//     res.send(data)
// });

// app.get('/NetLinkUser', async(req: Request, res: Response)=> {
//     try{
//         let data = await UserNetLink
//         res.send(data)
//     }
//     catch (err){
//         console.error(err);
//         res.status(500).send('Internal server error');
//     }
// });


app.listen(port, () => {
    console.log(`server is raunning at http://localhost${port}`)
});

