import express from "express";
import {Request, Response} from "express";
import cors from "cors";
const app: express.Application = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => { res.send('Hello World!')})

export default app;