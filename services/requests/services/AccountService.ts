/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GoogleLoginRequest } from '../models/GoogleLoginRequest';
import type { LoginRequest } from '../models/LoginRequest';
import type { LoginResponse } from '../models/LoginResponse';
import type { RegisterRequest } from '../models/RegisterRequest';
import type { ResetPasswordRequest } from '../models/ResetPasswordRequest';
import type { UpdateUserAvatarRequest } from '../models/UpdateUserAvatarRequest';
import type { UserInfoResponse } from '../models/UserInfoResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountService {
    /**
     * Change avatar image
     * @param requestBody
     * @returns UserInfoResponse OK
     * @throws ApiError
     */
    public static accountsAvatarUpdate(
        requestBody: UpdateUserAvatarRequest,
    ): CancelablePromise<UserInfoResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/avatar/update',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Update account info
     * @param requestBody
     * @returns UserInfoResponse OK
     * @throws ApiError
     */
    public static accountsUpdateCreateMutation(
        requestBody: UpdateUserAvatarRequest,
    ): CancelablePromise<UserInfoResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/update',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Login User
     * @param requestBody
     * @returns LoginResponse OK
     * @throws ApiError
     */
    public static googleLoginCreateMutation(
        requestBody: GoogleLoginRequest,
    ): CancelablePromise<LoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/googleLogin',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Login User
     * @param requestBody
     * @returns LoginResponse OK
     * @throws ApiError
     */
    public static loginCreateMutation(
        requestBody: LoginRequest,
    ): CancelablePromise<LoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Register User
     * @param requestBody
     * @returns LoginResponse OK
     * @throws ApiError
     */
    public static registerCreateMutation(
        requestBody: RegisterRequest,
    ): CancelablePromise<LoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Reset Password
     * @param requestBody
     * @returns LoginResponse OK
     * @throws ApiError
     */
    public static resetPasswordCreateMutation(
        requestBody: ResetPasswordRequest,
    ): CancelablePromise<LoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/resetPassword',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
}
