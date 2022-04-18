import DotEnv from 'dotenv'

DotEnv.config()

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
}

export const config = {
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
}
