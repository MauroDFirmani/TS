import { Request } from "express";
import { Task } from "../entity/tasks.entity";
import { TaskService } from "../services/tasks.service"

export class TasksController {
    private tasksService: TaskService
    public constructor() {
        this.tasksService = new TaskService()
    }
    public async findN(req: Request) {
        try {
            const { quantity } = req.query as { quantity: string }
            const tasksList = await this.tasksService.listTasks(quantity)
            return {
                version: '1.0',
                data: tasksList,
            }
        } catch (error) {
            console.error(error)
            throw new Error(`${error}`)
        }
    }

    public async patchTask(req: Request) {
        try {
            const task:Task = req.body 
            await this.tasksService.putTask(task)
            return {
                version: '1.0',
                data: 'Task done',
            }
        } catch (error) {
            console.error(error)
            throw new Error(`${error}`)
        }
    }

    public async getAll(req: Request) {
        try {
            const allTasks = await this.tasksService.getAllTasks()
            return {
                version: '1.0',
                data: allTasks,
            }
        } catch (error) {
            console.error(error)
            throw new Error(`${error}`)
        }
    }

}
