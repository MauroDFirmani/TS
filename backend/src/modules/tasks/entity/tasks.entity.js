"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const base_entity_1 = require("../../base/entity/base.entity");
class Task extends base_entity_1.BaseEntity {
    constructor(data) {
        super();
        this.title = data.title;
    }
}
exports.Task = Task;
