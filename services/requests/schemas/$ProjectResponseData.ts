/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ProjectResponseData = {
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
    },
} as const;
