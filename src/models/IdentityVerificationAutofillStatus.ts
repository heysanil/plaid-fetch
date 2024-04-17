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
 * A status enum indicating whether autofill succeeded or failed.
 * @export
 */
export const IdentityVerificationAutofillStatus = {
    Success: 'success',
    Failed: 'failed'
} as const;
export type IdentityVerificationAutofillStatus = typeof IdentityVerificationAutofillStatus[keyof typeof IdentityVerificationAutofillStatus];


export function IdentityVerificationAutofillStatusFromJSON(json: any): IdentityVerificationAutofillStatus {
    return IdentityVerificationAutofillStatusFromJSONTyped(json, false);
}

export function IdentityVerificationAutofillStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityVerificationAutofillStatus {
    return json as IdentityVerificationAutofillStatus;
}

export function IdentityVerificationAutofillStatusToJSON(value?: IdentityVerificationAutofillStatus | null): any {
    return value as any;
}
