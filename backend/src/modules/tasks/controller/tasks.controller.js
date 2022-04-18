"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const tasks_service_1 = require("../services/tasks.service");
class TasksController {
    constructor() {
        this.tasksService = new tasks_service_1.TaskService();
    }
    findN(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { quantity } = req.query;
                const tasksList = yield this.tasksService.listTasks(quantity);
                return {
                    version: '1.0',
                    data: tasksList,
                };
            }
            catch (error) {
                console.error(error);
                throw new Error(`${error}`);
            }
        });
    }
    patchTask(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const task = req.body;
                yield this.tasksService.putTask(task);
                return {
                    version: '1.0',
                    data: 'Task done',
                };
            }
            catch (error) {
                console.error(error);
                throw new Error(`${error}`);
            }
        });
    }
}
exports.TasksController = TasksController;
