import axios from "axios";
import { config } from "../../../config";
import { Task } from "../entity/tasks.entity";
import { ITasks } from "../interfaces/tasks.interface";
import { TaskModel } from '../../../models/task.model'

export class TaskService {
    async listTasks(
        quantity: string,
    ): Promise<ITasks> {
        try {
            const url: string = `${process.env.TITLES_URL}${quantity}`;
            const { data: titles } : { data:string[] } = await axios.get(url)
            const response:Task[] = []
            for(let i=0; i<titles.length; i++){
                const task = new Task({ title: titles[i] })
                const isPreviouslyExist = await TaskModel.findOne({ title: titles[i]})
                if(!isPreviouslyExist) {
                    const newTask = await TaskModel.create(task)
                    response.push(newTask)
                }else{
                    response.push(isPreviouslyExist as Task)
                }
            }
            return response
        } catch (error) {
            console.error(error)
            throw new Error(`${error}`)
        }
    }

    async putTask(task:Task): Promise<void> {
        try {
            const oldTask = await TaskModel.findOne({title: task.title})
            if (!oldTask) {
                throw new Error (`Task with title ${task.title} doesn't exist`)
            }
            console.info(`Task with id ${oldTask.id} and title ${oldTask.title} done`)
        } catch (error) {
            console.error(error)
            throw new Error(`${error}`)
        }
    }

    async getAllTasks(): Promise<ITasks> {
        try {
            const tasks = await TaskModel.find()
            return tasks
        } catch (error) {
            console.error(error)
            throw new Error(`${error}`)
        }
    }
}
