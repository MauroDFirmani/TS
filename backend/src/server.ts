import * as dotenv from "dotenv"; 
import cors from "cors";
import * as core from 'express-serve-static-core';
import express from "express";
import { tasksRouter } from "./modules/tasks/tasks.routes";



dotenv.config();
export default class Server {

    private app: core.Express

    public constructor() {
        this.app = express();
    }

    public async init(): Promise<void> {
        if (!process.env.PORT) {
            process.exit(1);
        }
        const PORT: number = parseInt(process.env.PORT as string, 10);

        this.app.use(cors());
        this.app.use(express.json());

        this.app.use('/tasks', tasksRouter)

        this.app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
       
    }
}
