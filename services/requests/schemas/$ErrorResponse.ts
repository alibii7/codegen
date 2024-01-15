/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ErrorResponse = {
    properties: {
        errors: {
            type: 'array',
            contains: {
                type: 'ErrDataType',
            },
        },
        message: {
            type: 'string',
            format: 'string',
        },
    },
} as const;
