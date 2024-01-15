/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ProjectQueryRequestParams = {
    properties: {
        filters: {
            type: 'ProjectQueryFilterType',
        },
        order: {
            type: 'string',
            format: 'string',
            pattern: '^[0-9]+$',
        },
        order_by: {
            type: 'string',
            format: 'string',
            pattern: '^[0-9]+$',
        },
        page: {
            type: 'number',
            isRequired: true,
            format: 'int32',
            pattern: '^[0-9]+$',
        },
        per_page: {
            type: 'number',
            isRequired: true,
            format: 'int32',
            pattern: '^[0-9]+$',
        },
    },
} as const;
