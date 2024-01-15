/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Project = {
    properties: {
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
        project_tag: {
            properties: {
            },
        },
        project_tag_id: {
            type: 'number',
            format: 'int32',
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
