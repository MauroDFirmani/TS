import axios from "axios";
import { config } from "../../../config";
import { Task } from "../entity/tasks.entity";
import { ITasks } from "../interfaces/tasks.interface";

export class TaskService {
    async listTasks(
        quantity: string,
    ): Promise<ITasks> {
        try {
            const url: string = `${process.env.TITLES_URL}${quantity}`;
            const { data: titles } = await axios.get(url)
            const response = titles.map((t:string) => new Task({title:t}))
            return response
        } catch (error) {
            console.error(error)
            throw new Error(`${error}`)
        }
    }

    async putTask(task:Task): Promise<void> {
        try {
            console.info(`Task with id ${task.id} and title ${task.title} done`)
        } catch (error) {
            console.error(error)
            throw new Error(`${error}`)
        }
    }
}
