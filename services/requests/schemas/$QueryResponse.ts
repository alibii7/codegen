/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $QueryResponse = {
    properties: {
        items: {
            type: 'array',
            contains: {
                type: 'User',
            },
        },
        limit: {
            type: 'number',
            format: 'int32',
        },
        offset: {
            type: 'number',
            format: 'int32',
        },
        page: {
            type: 'number',
            format: 'int32',
        },
        totalPages: {
            type: 'number',
            format: 'int32',
        },
        totalRows: {
            type: 'number',
            format: 'int64',
        },
    },
} as const;
