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
 * Request input for listing Identity Verifications
 * @export
 * @interface IdentityVerificationListRequest
 */
export interface IdentityVerificationListRequest {
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof IdentityVerificationListRequest
     */
    secret?: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof IdentityVerificationListRequest
     */
    client_id?: string;
    /**
     * ID of the associated Identity Verification template.
     * @type {string}
     * @memberof IdentityVerificationListRequest
     */
    template_id: string;
    /**
     * A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the `/link/token/create` `client_user_id` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`.
     * @type {string}
     * @memberof IdentityVerificationListRequest
     */
    client_user_id: string;
    /**
     * An identifier that determines which page of results you receive.
     * @type {string}
     * @memberof IdentityVerificationListRequest
     */
    cursor?: string;
}

/**
 * Check if a given object implements the IdentityVerificationListRequest interface.
 */
export function instanceOfIdentityVerificationListRequest(value: object): boolean {
    if (!('template_id' in value)) return false;
    if (!('client_user_id' in value)) return false;
    return true;
}

export function IdentityVerificationListRequestFromJSON(json: any): IdentityVerificationListRequest {
    return IdentityVerificationListRequestFromJSONTyped(json, false);
}

export function IdentityVerificationListRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityVerificationListRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'secret': json['secret'] == null ? undefined : json['secret'],
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'template_id': json['template_id'],
        'client_user_id': json['client_user_id'],
        'cursor': json['cursor'] == null ? undefined : json['cursor'],
    };
}

export function IdentityVerificationListRequestToJSON(value?: IdentityVerificationListRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'secret': value['secret'],
        'client_id': value['client_id'],
        'template_id': value['template_id'],
        'client_user_id': value['client_user_id'],
        'cursor': value['cursor'],
    };
}
