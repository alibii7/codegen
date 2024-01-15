// generated with @7nohe/openapi-react-query-codegen@0.5.2 
import { useQuery, useMutation, UseQueryResult, UseQueryOptions, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { Verification } from "../requests/models/Verification";
import { UserQueryParams } from "../requests/models/UserQueryParams";
import { UserInfoResponse } from "../requests/models/UserInfoResponse";
import { UserData } from "../requests/models/UserData";
import { User } from "../requests/models/User";
import { UpdateUserAvatarRequest } from "../requests/models/UpdateUserAvatarRequest";
import { UpdateUserAccountRequest } from "../requests/models/UpdateUserAccountRequest";
import { UpdateProjectResponse } from "../requests/models/UpdateProjectResponse";
import { UpdateProjectRequest } from "../requests/models/UpdateProjectRequest";
import { UpdateLanguageResponse } from "../requests/models/UpdateLanguageResponse";
import { UpdateLanguageRequest } from "../requests/models/UpdateLanguageRequest";
import { SuspendUserParam } from "../requests/models/SuspendUserParam";
import { SrcMediumRequestData } from "../requests/models/SrcMediumRequestData";
import { SendCodeResponse } from "../requests/models/SendCodeResponse";
import { SendCodeRequest } from "../requests/models/SendCodeRequest";
import { Role } from "../requests/models/Role";
import { ResetPasswordRequest } from "../requests/models/ResetPasswordRequest";
import { RegisterRequest } from "../requests/models/RegisterRequest";
import { QueryResponse } from "../requests/models/QueryResponse";
import { ProjectTag } from "../requests/models/ProjectTag";
import { ProjectStatusesEnum } from "../requests/models/ProjectStatusesEnum";
import { ProjectResponseData } from "../requests/models/ProjectResponseData";
import { ProjectRequestParams } from "../requests/models/ProjectRequestParams";
import { ProjectQueryResponse } from "../requests/models/ProjectQueryResponse";
import { ProjectQueryRequestParams } from "../requests/models/ProjectQueryRequestParams";
import { ProjectQueryFilterType } from "../requests/models/ProjectQueryFilterType";
import { Project } from "../requests/models/Project";
import { MediumUpdateRequestData } from "../requests/models/MediumUpdateRequestData";
import { Medium } from "../requests/models/Medium";
import { LoginResponseData } from "../requests/models/LoginResponseData";
import { LoginResponse } from "../requests/models/LoginResponse";
import { LoginRequest } from "../requests/models/LoginRequest";
import { LanguageResponseData } from "../requests/models/LanguageResponseData";
import { LanguageRequestParams } from "../requests/models/LanguageRequestParams";
import { LanguageQueryResponse } from "../requests/models/LanguageQueryResponse";
import { LanguageQueryRequestParams } from "../requests/models/LanguageQueryRequestParams";
import { LanguageQueryFilterType } from "../requests/models/LanguageQueryFilterType";
import { Language } from "../requests/models/Language";
import { GoogleLoginRequest } from "../requests/models/GoogleLoginRequest";
import { GenderEnum } from "../requests/models/GenderEnum";
import { FilterValueString } from "../requests/models/FilterValueString";
import { FilterValueInt } from "../requests/models/FilterValueInt";
import { FilterOperatorsEnum } from "../requests/models/FilterOperatorsEnum";
import { ErrorResponse } from "../requests/models/ErrorResponse";
import { ErrDataType } from "../requests/models/ErrDataType";
import { DeleteProjectResponse } from "../requests/models/DeleteProjectResponse";
import { DeleteLanguageResponse } from "../requests/models/DeleteLanguageResponse";
import { CreateUserResponseData } from "../requests/models/CreateUserResponseData";
import { CreateUserResponse } from "../requests/models/CreateUserResponse";
import { CreateUserRequest } from "../requests/models/CreateUserRequest";
import { CreateProjectResponse } from "../requests/models/CreateProjectResponse";
import { CreateProjectRequest } from "../requests/models/CreateProjectRequest";
import { CreateLanguageResponse } from "../requests/models/CreateLanguageResponse";
import { CreateLanguageRequest } from "../requests/models/CreateLanguageRequest";
import { CheckUniqueUserResponseData } from "../requests/models/CheckUniqueUserResponseData";
import { CheckUniqueUserResponse } from "../requests/models/CheckUniqueUserResponse";
import { CheckUniqueUserDataParams } from "../requests/models/CheckUniqueUserDataParams";
import { VerifyService } from "../requests/services/VerifyService";
import { UserService } from "../requests/services/UserService";
import { RoleService } from "../requests/services/RoleService";
import { ProjectService } from "../requests/services/ProjectService";
import { PermissionService } from "../requests/services/PermissionService";
import { LanguageService } from "../requests/services/LanguageService";
import { AccountService } from "../requests/services/AccountService";
export type VerifyServiceverificationsSendCreateMutationMutationResult = Awaited<ReturnType<typeof VerifyService.verificationsSendCreateMutation>>;
/**
 * Sending Verification code
 */
export const useVerifyServiceVerificationsSendCreateMutation = <TData = VerifyServiceverificationsSendCreateMutationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody: SendCodeRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody: SendCodeRequest;
}, TContext>({ mutationFn: ({ requestBody }) => VerifyService.verificationsSendCreateMutation(requestBody) as unknown as Promise<TData>, ...options });
export type UserServiceAccountsFieldValueCheckUniqueQueryDefaultResponse = Awaited<ReturnType<typeof UserService.accountsFieldValueCheckUniqueQuery>>;
export type UserServiceAccountsFieldValueCheckUniqueQueryQueryResult<TData = UserServiceAccountsFieldValueCheckUniqueQueryDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserServiceAccountsFieldValueCheckUniqueQueryKey = "UserServiceAccountsFieldValueCheckUniqueQuery";
/**
 * Check field is Unique
 */
export const useUserServiceAccountsFieldValueCheckUniqueQuery = <TData = UserServiceAccountsFieldValueCheckUniqueQueryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ field, value }: {
    field: string;
    value: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useUserServiceAccountsFieldValueCheckUniqueQueryKey, ...(queryKey ?? [{ field, value }])], queryFn: () => UserService.accountsFieldValueCheckUniqueQuery(field, value) as TData, ...options });
export type UserServiceUserinfoQueryDefaultResponse = Awaited<ReturnType<typeof UserService.userinfoQuery>>;
export type UserServiceUserinfoQueryQueryResult<TData = UserServiceUserinfoQueryDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserServiceUserinfoQueryKey = "UserServiceUserinfoQuery";
/**
 * Get User Info
 */
export const useUserServiceUserinfoQuery = <TData = UserServiceUserinfoQueryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useUserServiceUserinfoQueryKey, ...(queryKey ?? [])], queryFn: () => UserService.userinfoQuery() as TData, ...options });
export type UserServiceusersCreateMutationMutationResult = Awaited<ReturnType<typeof UserService.usersCreateMutation>>;
/**
 * Create user
 * Create user
 */
export const useUserServiceUsersCreateMutation = <TData = UserServiceusersCreateMutationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody: CreateUserRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody: CreateUserRequest;
}, TContext>({ mutationFn: ({ requestBody }) => UserService.usersCreateMutation(requestBody) as unknown as Promise<TData>, ...options });
export type UserServiceUsersQueryDefaultResponse = Awaited<ReturnType<typeof UserService.usersQuery>>;
export type UserServiceUsersQueryQueryResult<TData = UserServiceUsersQueryDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserServiceUsersQueryKey = "UserServiceUsersQuery";
/**
 * Get Users List
 */
export const useUserServiceUsersQuery = <TData = UserServiceUsersQueryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ order, orderBy, suspendedAt, page, perPage, query }: {
    order?: string;
    orderBy?: string;
    suspendedAt?: string;
    page?: number;
    perPage?: number;
    query?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useUserServiceUsersQueryKey, ...(queryKey ?? [{ order, orderBy, suspendedAt, page, perPage, query }])], queryFn: () => UserService.usersQuery(order, orderBy, suspendedAt, page, perPage, query) as TData, ...options });
export type UserServiceusersIdSuspendToggleMutationResult = Awaited<ReturnType<typeof UserService.usersIdSuspendToggle>>;
/**
 * Suspend User
 */
export const useUserServiceUsersIdSuspendToggle = <TData = UserServiceusersIdSuspendToggleMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: string;
}, TContext>({ mutationFn: ({ id }) => UserService.usersIdSuspendToggle(id) as unknown as Promise<TData>, ...options });
export type RoleServiceRolesListQueryDefaultResponse = Awaited<ReturnType<typeof RoleService.rolesListQuery>>;
export type RoleServiceRolesListQueryQueryResult<TData = RoleServiceRolesListQueryDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useRoleServiceRolesListQueryKey = "RoleServiceRolesListQuery";
/**
 * Get User Info
 */
export const useRoleServiceRolesListQuery = <TData = RoleServiceRolesListQueryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useRoleServiceRolesListQueryKey, ...(queryKey ?? [])], queryFn: () => RoleService.rolesListQuery() as TData, ...options });
export type ProjectServiceprojectsCreateMutationMutationResult = Awaited<ReturnType<typeof ProjectService.projectsCreateMutation>>;
/**
 * Create project
 * Create project
 */
export const useProjectServiceProjectsCreateMutation = <TData = ProjectServiceprojectsCreateMutationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody: CreateProjectRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody: CreateProjectRequest;
}, TContext>({ mutationFn: ({ requestBody }) => ProjectService.projectsCreateMutation(requestBody) as unknown as Promise<TData>, ...options });
export type ProjectServiceProjectsQueryDefaultResponse = Awaited<ReturnType<typeof ProjectService.projectsQuery>>;
export type ProjectServiceProjectsQueryQueryResult<TData = ProjectServiceProjectsQueryDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useProjectServiceProjectsQueryKey = "ProjectServiceProjectsQuery";
/**
 * Get projects list
 */
export const useProjectServiceProjectsQuery = <TData = ProjectServiceProjectsQueryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ filters, page, perPage, order, orderBy }: {
    filters?: ProjectQueryFilterType;
    page?: number;
    perPage?: number;
    order?: string;
    orderBy?: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useProjectServiceProjectsQueryKey, ...(queryKey ?? [{ filters, page, perPage, order, orderBy }])], queryFn: () => ProjectService.projectsQuery(filters, page, perPage, order, orderBy) as TData, ...options });
export type ProjectServiceprojectsIdUpdateMutationMutationResult = Awaited<ReturnType<typeof ProjectService.projectsIdUpdateMutation>>;
/**
 * Update project
 * Update project
 */
export const useProjectServiceProjectsIdUpdateMutation = <TData = ProjectServiceprojectsIdUpdateMutationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
    requestBody: UpdateProjectRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
    requestBody: UpdateProjectRequest;
}, TContext>({ mutationFn: ({ id, requestBody }) => ProjectService.projectsIdUpdateMutation(id, requestBody) as unknown as Promise<TData>, ...options });
export type ProjectServiceprojectsIdDeleteMutationMutationResult = Awaited<ReturnType<typeof ProjectService.projectsIdDeleteMutation>>;
/**
 * Delete project
 * Delete project
 */
export const useProjectServiceProjectsIdDeleteMutation = <TData = ProjectServiceprojectsIdDeleteMutationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
}, TContext>({ mutationFn: ({ id }) => ProjectService.projectsIdDeleteMutation(id) as unknown as Promise<TData>, ...options });
export type PermissionServicePermissionsAccessListQueryDefaultResponse = Awaited<ReturnType<typeof PermissionService.permissionsAccessListQuery>>;
export type PermissionServicePermissionsAccessListQueryQueryResult<TData = PermissionServicePermissionsAccessListQueryDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePermissionServicePermissionsAccessListQueryKey = "PermissionServicePermissionsAccessListQuery";
/**
 * Get Access List for all business domains
 */
export const usePermissionServicePermissionsAccessListQuery = <TData = PermissionServicePermissionsAccessListQueryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [usePermissionServicePermissionsAccessListQueryKey, ...(queryKey ?? [])], queryFn: () => PermissionService.permissionsAccessListQuery() as TData, ...options });
export type LanguageServicelanguagesCreateMutationMutationResult = Awaited<ReturnType<typeof LanguageService.languagesCreateMutation>>;
/**
 * Create Language
 * Create Language
 */
export const useLanguageServiceLanguagesCreateMutation = <TData = LanguageServicelanguagesCreateMutationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody: CreateLanguageRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody: CreateLanguageRequest;
}, TContext>({ mutationFn: ({ requestBody }) => LanguageService.languagesCreateMutation(requestBody) as unknown as Promise<TData>, ...options });
export type LanguageServiceLanguagesQueryDefaultResponse = Awaited<ReturnType<typeof LanguageService.languagesQuery>>;
export type LanguageServiceLanguagesQueryQueryResult<TData = LanguageServiceLanguagesQueryDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useLanguageServiceLanguagesQueryKey = "LanguageServiceLanguagesQuery";
/**
 * Get projects list
 */
export const useLanguageServiceLanguagesQuery = <TData = LanguageServiceLanguagesQueryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, perPage, order, orderBy, filters }: {
    page?: number;
    perPage?: number;
    order?: string;
    orderBy?: string;
    filters?: LanguageQueryFilterType;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useLanguageServiceLanguagesQueryKey, ...(queryKey ?? [{ page, perPage, order, orderBy, filters }])], queryFn: () => LanguageService.languagesQuery(page, perPage, order, orderBy, filters) as TData, ...options });
export type LanguageServicelanguagesIdUpdateMutationMutationResult = Awaited<ReturnType<typeof LanguageService.languagesIdUpdateMutation>>;
/**
 * Update project
 * Update project
 */
export const useLanguageServiceLanguagesIdUpdateMutation = <TData = LanguageServicelanguagesIdUpdateMutationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
    requestBody: UpdateLanguageRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
    requestBody: UpdateLanguageRequest;
}, TContext>({ mutationFn: ({ id, requestBody }) => LanguageService.languagesIdUpdateMutation(id, requestBody) as unknown as Promise<TData>, ...options });
export type LanguageServicelanguagesIdDeleteMutationMutationResult = Awaited<ReturnType<typeof LanguageService.languagesIdDeleteMutation>>;
/**
 * Delete Language
 * Delete Language
 */
export const useLanguageServiceLanguagesIdDeleteMutation = <TData = LanguageServicelanguagesIdDeleteMutationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
}, TContext>({ mutationFn: ({ id }) => LanguageService.languagesIdDeleteMutation(id) as unknown as Promise<TData>, ...options });
export type AccountServiceaccountsAvatarUpdateMutationResult = Awaited<ReturnType<typeof AccountService.accountsAvatarUpdate>>;
/**
 * Change avatar image
 */
export const useAccountServiceAccountsAvatarUpdate = <TData = AccountServiceaccountsAvatarUpdateMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody: UpdateUserAvatarRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody: UpdateUserAvatarRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AccountService.accountsAvatarUpdate(requestBody) as unknown as Promise<TData>, ...options });
export type AccountServiceaccountsUpdateCreateMutationMutationResult = Awaited<ReturnType<typeof AccountService.accountsUpdateCreateMutation>>;
/**
 * Update account info
 */
export const useAccountServiceAccountsUpdateCreateMutation = <TData = AccountServiceaccountsUpdateCreateMutationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody: UpdateUserAvatarRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody: UpdateUserAvatarRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AccountService.accountsUpdateCreateMutation(requestBody) as unknown as Promise<TData>, ...options });
export type AccountServicegoogleLoginCreateMutationMutationResult = Awaited<ReturnType<typeof AccountService.googleLoginCreateMutation>>;
/**
 * Login User
 */
export const useAccountServiceGoogleLoginCreateMutation = <TData = AccountServicegoogleLoginCreateMutationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody: GoogleLoginRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody: GoogleLoginRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AccountService.googleLoginCreateMutation(requestBody) as unknown as Promise<TData>, ...options });
export type AccountServiceloginCreateMutationMutationResult = Awaited<ReturnType<typeof AccountService.loginCreateMutation>>;
/**
 * Login User
 */
export const useAccountServiceLoginCreateMutation = <TData = AccountServiceloginCreateMutationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody: LoginRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody: LoginRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AccountService.loginCreateMutation(requestBody) as unknown as Promise<TData>, ...options });
export type AccountServiceregisterCreateMutationMutationResult = Awaited<ReturnType<typeof AccountService.registerCreateMutation>>;
/**
 * Register User
 */
export const useAccountServiceRegisterCreateMutation = <TData = AccountServiceregisterCreateMutationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody: RegisterRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody: RegisterRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AccountService.registerCreateMutation(requestBody) as unknown as Promise<TData>, ...options });
export type AccountServiceresetPasswordCreateMutationMutationResult = Awaited<ReturnType<typeof AccountService.resetPasswordCreateMutation>>;
/**
 * Reset Password
 */
export const useAccountServiceResetPasswordCreateMutation = <TData = AccountServiceresetPasswordCreateMutationMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody: ResetPasswordRequest;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody: ResetPasswordRequest;
}, TContext>({ mutationFn: ({ requestBody }) => AccountService.resetPasswordCreateMutation(requestBody) as unknown as Promise<TData>, ...options });
