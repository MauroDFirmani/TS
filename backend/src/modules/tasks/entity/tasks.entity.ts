import { BaseEntity } from "../../base/entity/base.entity"
import { ITask } from "../interfaces/task.interface"

export class Task extends BaseEntity{
    public title: string

    public constructor(data: ITask) {
        super()
        this.title = data.title
    }
}

