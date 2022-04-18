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
exports.tasksRouter = void 0;
const express_1 = __importDefault(require("express"));
const tasks_controller_1 = require("./controller/tasks.controller");
exports.tasksRouter = express_1.default.Router();
exports.tasksRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasksController = new tasks_controller_1.TasksController();
        const response = yield tasksController.findN(req);
        res.status(200).send(response);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.tasksRouter.patch("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasksController = new tasks_controller_1.TasksController();
        const response = yield tasksController.patchTask(req);
        res.status(200).send(response);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
