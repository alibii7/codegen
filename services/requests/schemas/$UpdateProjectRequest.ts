/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UpdateProjectRequest = {
    properties: {
        media: {
            type: 'array',
            contains: {
                type: 'MediumUpdateRequestData',
            },
        },
        name: {
            type: 'string',
            format: 'string',
        },
        project_tag_id: {
            type: 'number',
            format: 'int32',
        },
    },
} as const;
