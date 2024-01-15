/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Medium = {
    properties: {
        audio_file_key: {
            type: 'string',
            format: 'string',
        },
        duration: {
            type: 'number',
            format: 'int32',
        },
        id: {
            type: 'number',
            format: 'int32',
        },
        is_source: {
            type: 'boolean',
            format: 'boolean',
        },
        language: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
        },
        language_id: {
            type: 'number',
            format: 'int32',
        },
        mime_type: {
            type: 'string',
            format: 'string',
        },
        project: {
            properties: {
            },
        },
        project_id: {
            type: 'number',
            format: 'int32',
        },
        size: {
            type: 'number',
            format: 'int64',
        },
        status: {
            type: 'string',
            format: 'string',
        },
        subtitle_file_key: {
            type: 'string',
            format: 'string',
        },
        thumbnail_file_key: {
            type: 'string',
            format: 'string',
        },
        user: {
            properties: {
            },
        },
        user_id: {
            type: 'number',
            format: 'int32',
        },
        video_file_key: {
            type: 'string',
            format: 'string',
        },
    },
} as const;
