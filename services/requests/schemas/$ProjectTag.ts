/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ProjectTag = {
    properties: {
        id: {
            type: 'number',
            format: 'int32',
        },
        name: {
            type: 'string',
            format: 'string',
        },
        projects: {
            type: 'array',
            contains: {
                type: 'Project',
            },
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
