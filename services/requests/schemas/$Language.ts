/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Language = {
    properties: {
        code: {
            type: 'string',
            format: 'string',
        },
        country: {
            type: 'string',
            format: 'string',
        },
        id: {
            type: 'number',
            format: 'int32',
        },
        media: {
            type: 'array',
            contains: {
                type: 'Medium',
            },
        },
        name: {
            type: 'string',
            format: 'string',
        },
        user: {
            properties: {
            },
        },
        user_id: {
            type: 'number',
            format: 'int32',
        },
    },
} as const;
