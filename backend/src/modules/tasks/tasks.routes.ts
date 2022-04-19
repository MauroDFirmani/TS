import express, { Request, Response } from "express";
import { TasksController } from "./controller/tasks.controller";
export const tasksRouter = express.Router();

tasksRouter.get("/", async (req: Request, res: Response) => {
    try {
        const tasksController = new TasksController()
        const response= await tasksController.findN(req);
        res.status(200).send(response);
    } catch (error:any) {
        res.status(500).send(error.message);
    }
});

tasksRouter.patch("/", async (req: Request, res: Response) => {
    try {
        const tasksController = new TasksController()
        const response: any = await tasksController.patchTask(req);
        res.status(200).send(response);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
});

tasksRouter.get("/all", async (req: Request, res: Response) => {
    try {
        const tasksController = new TasksController()
        const response: any = await tasksController.getAll(req);
        res.status(200).send(response);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
});
