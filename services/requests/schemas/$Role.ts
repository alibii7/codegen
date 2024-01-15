/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Role = {
    properties: {
        ID: {
            type: 'number',
            format: 'int32',
        },
        title: {
            type: 'string',
            format: 'string',
        },
        users: {
            type: 'array',
            contains: {
                type: 'User',
            },
        },
    },
} as const;
