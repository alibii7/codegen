/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SendCodeRequest } from '../models/SendCodeRequest';
import type { SendCodeResponse } from '../models/SendCodeResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VerifyService {
    /**
     * Sending Verification code
     * @param requestBody
     * @returns SendCodeResponse OK
     * @throws ApiError
     */
    public static verificationsSendCreateMutation(
        requestBody: SendCodeRequest,
    ): CancelablePromise<SendCodeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/verifications/send',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
}
