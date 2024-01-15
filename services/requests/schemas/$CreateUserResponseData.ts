/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateUserResponseData = {
    properties: {
        avatar_url: {
            type: 'string',
            format: 'string',
        },
        gender: {
            type: 'string',
            format: 'string',
        },
        id: {
            type: 'number',
            format: 'int32',
        },
        last_name: {
            type: 'string',
            format: 'string',
        },
        name: {
            type: 'string',
            format: 'string',
        },
        phone: {
            type: 'string',
            format: 'string',
        },
        roles: {
            type: 'array',
            contains: {
                type: 'Role',
            },
        },
    },
} as const;
