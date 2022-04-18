"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const schema = {
    type: 'object',
    required: ['Server'],
    properties: {
        Server: {
            type: 'object',
            required: ['Port', 'Host', 'Secure'],
            properties: {
                Port: {
                    type: 'string',
                    default: 4000,
                },
                Host: {
                    type: 'string',
                    default: 'localhost',
                },
                BaseURI: {
                    type: 'string',
                    default: 'http://localhost:8080',
                },
            },
        },
        Titles: {
            type: 'object',
            required: ['Url'],
            properties: {
                Url: {
                    type: 'string',
                    default: 'https://lorem-faker.vercel.app/api?quantity=',
                },
            },
        },
    },
};
exports.config = {
    schema: schema,
    data: {
        Server: {
            Port: process.env.PORT,
            Host: process.env.HOST,
            BaseURI: process.env.SERVER_BASE_URI,
        },
        Titles: {
            Url: process.env.CLIENT_URL,
        },
    },
};
