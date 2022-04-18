"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
const uuid_1 = require("uuid");
class BaseEntity {
    constructor(id) {
        if (!id) {
            id = (0, uuid_1.v4)();
        }
        this.id = id;
    }
}
exports.BaseEntity = BaseEntity;
