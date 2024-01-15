/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RoleService {
    /**
     * Get User Info
     * @returns User OK
     * @throws ApiError
     */
    public static rolesListQuery(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/roles/list',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
}
