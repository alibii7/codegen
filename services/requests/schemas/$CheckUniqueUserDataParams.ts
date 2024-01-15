/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckUniqueUserDataParams = {
    properties: {
        field: {
            type: 'string',
            isRequired: true,
            format: 'string',
            pattern: '^[0-9]+$',
        },
        value: {
            type: 'string',
            isRequired: true,
            format: 'string',
            pattern: '^[0-9]+$',
        },
    },
} as const;
