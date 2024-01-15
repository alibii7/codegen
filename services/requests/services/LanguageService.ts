/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateLanguageRequest } from '../models/CreateLanguageRequest';
import type { CreateLanguageResponse } from '../models/CreateLanguageResponse';
import type { DeleteLanguageResponse } from '../models/DeleteLanguageResponse';
import type { LanguageQueryFilterType } from '../models/LanguageQueryFilterType';
import type { LanguageQueryResponse } from '../models/LanguageQueryResponse';
import type { UpdateLanguageRequest } from '../models/UpdateLanguageRequest';
import type { UpdateLanguageResponse } from '../models/UpdateLanguageResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LanguageService {
    /**
     * Create Language
     * Create Language
     * @param requestBody
     * @returns CreateLanguageResponse Created
     * @throws ApiError
     */
    public static languagesCreateMutation(
        requestBody: CreateLanguageRequest,
    ): CancelablePromise<CreateLanguageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/languages',
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
     * Get projects list
     * @param page
     * @param perPage
     * @param order
     * @param orderBy
     * @param filters
     * @returns LanguageQueryResponse OK
     * @throws ApiError
     */
    public static languagesQuery(
        page?: number,
        perPage?: number,
        order?: string,
        orderBy?: string,
        filters?: LanguageQueryFilterType,
    ): CancelablePromise<LanguageQueryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/languages',
            query: {
                'page': page,
                'per_page': perPage,
                'order': order,
                'order_by': orderBy,
                'filters': filters,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Update project
     * Update project
     * @param id
     * @param requestBody
     * @returns UpdateLanguageResponse OK
     * @throws ApiError
     */
    public static languagesIdUpdateMutation(
        id: number,
        requestBody: UpdateLanguageRequest,
    ): CancelablePromise<UpdateLanguageResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/languages/{id}',
            path: {
                'id': id,
            },
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
     * Delete Language
     * Delete Language
     * @param id
     * @returns DeleteLanguageResponse OK
     * @throws ApiError
     */
    public static languagesIdDeleteMutation(
        id: number,
    ): CancelablePromise<DeleteLanguageResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/languages/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
}
