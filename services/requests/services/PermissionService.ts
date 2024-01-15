/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PermissionService {
    /**
     * Get Access List for all business domains
     * @returns User OK
     * @throws ApiError
     */
    public static permissionsAccessListQuery(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/permissions/access-list',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
}
