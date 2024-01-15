/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ProjectQueryResponse = {
    properties: {
        items: {
            type: 'array',
            contains: {
                type: 'Project',
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
