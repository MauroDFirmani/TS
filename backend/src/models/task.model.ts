import mongoose from 'mongoose'

interface ITask {
    title: string;
    id: string;
}

interface taskModelInterface extends mongoose.Model<TaskDoc> {
    build(attr: ITask): TaskDoc
}

interface TaskDoc extends mongoose.Document {
    title: string;
    id: string;
}

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})

taskSchema.statics.build = (attr: ITask) => {
    return new TaskModel(attr)
}

const TaskModel = mongoose.model<TaskDoc, taskModelInterface>('Task', taskSchema)

TaskModel.build({
    title: 'some title',
    id: 'some id'
})

export { TaskModel }