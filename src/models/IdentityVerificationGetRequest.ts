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

import { mapValues } from '../runtime';
/**
 * Request input for fetching an Identity Verification
 * @export
 * @interface IdentityVerificationGetRequest
 */
export interface IdentityVerificationGetRequest {
    /**
     * ID of the associated Identity Verification attempt.
     * @type {string}
     * @memberof IdentityVerificationGetRequest
     */
    identity_verification_id: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof IdentityVerificationGetRequest
     */
    secret?: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof IdentityVerificationGetRequest
     */
    client_id?: string;
}

/**
 * Check if a given object implements the IdentityVerificationGetRequest interface.
 */
export function instanceOfIdentityVerificationGetRequest(value: object): boolean {
    if (!('identity_verification_id' in value)) return false;
    return true;
}

export function IdentityVerificationGetRequestFromJSON(json: any): IdentityVerificationGetRequest {
    return IdentityVerificationGetRequestFromJSONTyped(json, false);
}

export function IdentityVerificationGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityVerificationGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'identity_verification_id': json['identity_verification_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
    };
}

export function IdentityVerificationGetRequestToJSON(value?: IdentityVerificationGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'identity_verification_id': value['identity_verification_id'],
        'secret': value['secret'],
        'client_id': value['client_id'],
    };
}

