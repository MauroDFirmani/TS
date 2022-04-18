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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const axios_1 = __importDefault(require("axios"));
const tasks_entity_1 = require("../entity/tasks.entity");
class TaskService {
    listTasks(quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `${process.env.TITLES_URL}${quantity}`;
                const { data: titles } = yield axios_1.default.get(url);
                const response = titles.map((t) => new tasks_entity_1.Task({ title: t }));
                return response;
            }
            catch (error) {
                console.error(error);
                throw new Error(`${error}`);
            }
        });
    }
    putTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.info(`Task with id ${task.id} and title ${task.title} done`);
            }
            catch (error) {
                console.error(error);
                throw new Error(`${error}`);
            }
        });
    }
}
exports.TaskService = TaskService;
