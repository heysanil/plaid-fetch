/* tslint:disable */
/* eslint-disable */
/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.503.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The status of this Identity Verification attempt.
 * 
 * 
 * `active` - The Identity Verification attempt is incomplete. The user may have completed part of the session, but has neither failed or passed.
 * 
 * `success` - The Identity Verification attempt has completed, passing all steps defined to the associated Identity Verification template
 * 
 * `failed` - The user failed one or more steps in the session and was told to contact support.
 * 
 * `expired` - The Identity Verification attempt was active for a long period of time without being completed and was automatically marked as expired. Note that sessions currently do not expire. Automatic expiration is expected to be enabled in the future.
 * 
 * `canceled` - The Identity Verification attempt was canceled, either via the dashboard by a user, or via API. The user may have completed part of the session, but has neither failed or passed.
 * 
 * `pending_review` - The Identity Verification attempt template was configured to perform a screening that had one or more hits needing review.
 * @export
 */
export const IdentityVerificationStatus = {
    Active: 'active',
    Success: 'success',
    Failed: 'failed',
    Expired: 'expired',
    Canceled: 'canceled',
    PendingReview: 'pending_review'
} as const;
export type IdentityVerificationStatus = typeof IdentityVerificationStatus[keyof typeof IdentityVerificationStatus];


export function IdentityVerificationStatusFromJSON(json: any): IdentityVerificationStatus {
    return IdentityVerificationStatusFromJSONTyped(json, false);
}

export function IdentityVerificationStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityVerificationStatus {
    return json as IdentityVerificationStatus;
}

export function IdentityVerificationStatusToJSON(value?: IdentityVerificationStatus | null): any {
    return value as any;
}
