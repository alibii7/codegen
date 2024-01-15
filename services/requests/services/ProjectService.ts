/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProjectRequest } from '../models/CreateProjectRequest';
import type { CreateProjectResponse } from '../models/CreateProjectResponse';
import type { DeleteProjectResponse } from '../models/DeleteProjectResponse';
import type { ProjectQueryFilterType } from '../models/ProjectQueryFilterType';
import type { ProjectQueryResponse } from '../models/ProjectQueryResponse';
import type { UpdateProjectRequest } from '../models/UpdateProjectRequest';
import type { UpdateProjectResponse } from '../models/UpdateProjectResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectService {
    /**
     * Create project
     * Create project
     * @param requestBody
     * @returns CreateProjectResponse Created
     * @throws ApiError
     */
    public static projectsCreateMutation(
        requestBody: CreateProjectRequest,
    ): CancelablePromise<CreateProjectResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/projects',
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
     * @param filters
     * @param page
     * @param perPage
     * @param order
     * @param orderBy
     * @returns ProjectQueryResponse OK
     * @throws ApiError
     */
    public static projectsQuery(
        filters?: ProjectQueryFilterType,
        page?: number,
        perPage?: number,
        order?: string,
        orderBy?: string,
    ): CancelablePromise<ProjectQueryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects',
            query: {
                'filters': filters,
                'page': page,
                'per_page': perPage,
                'order': order,
                'order_by': orderBy,
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
     * @returns UpdateProjectResponse OK
     * @throws ApiError
     */
    public static projectsIdUpdateMutation(
        id: number,
        requestBody: UpdateProjectRequest,
    ): CancelablePromise<UpdateProjectResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/projects/{id}',
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
     * Delete project
     * Delete project
     * @param id
     * @returns DeleteProjectResponse OK
     * @throws ApiError
     */
    public static projectsIdDeleteMutation(
        id: number,
    ): CancelablePromise<DeleteProjectResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/projects/{id}',
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
