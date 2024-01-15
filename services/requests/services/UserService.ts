/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckUniqueUserResponse } from '../models/CheckUniqueUserResponse';
import type { CreateUserRequest } from '../models/CreateUserRequest';
import type { CreateUserResponse } from '../models/CreateUserResponse';
import type { QueryResponse } from '../models/QueryResponse';
import type { UserInfoResponse } from '../models/UserInfoResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * Check field is Unique
     * @param field
     * @param value
     * @returns CheckUniqueUserResponse OK
     * @throws ApiError
     */
    public static accountsFieldValueCheckUniqueQuery(
        field: string,
        value: string,
    ): CancelablePromise<CheckUniqueUserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/{field}/{value}/check-unique',
            path: {
                'field': field,
                'value': value,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Get User Info
     * @returns UserInfoResponse OK
     * @throws ApiError
     */
    public static userinfoQuery(): CancelablePromise<UserInfoResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/userinfo',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Create user
     * Create user
     * @param requestBody
     * @returns CreateUserResponse Created
     * @throws ApiError
     */
    public static usersCreateMutation(
        requestBody: CreateUserRequest,
    ): CancelablePromise<CreateUserResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Get Users List
     * @param order
     * @param orderBy
     * @param suspendedAt
     * @param page
     * @param perPage
     * @param query
     * @returns QueryResponse OK
     * @throws ApiError
     */
    public static usersQuery(
        order?: string,
        orderBy?: string,
        suspendedAt?: string,
        page?: number,
        perPage?: number,
        query?: string,
    ): CancelablePromise<QueryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'order': order,
                'order_by': orderBy,
                'suspended_at': suspendedAt,
                'page': page,
                'per_page': perPage,
                'query': query,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Suspend User
     * @param id
     * @returns UserInfoResponse OK
     * @throws ApiError
     */
    public static usersIdSuspendToggle(
        id: string,
    ): CancelablePromise<UserInfoResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{id}/suspend/toggle',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
}
