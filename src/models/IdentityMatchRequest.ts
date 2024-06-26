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
import type { IdentityMatchRequestOptions } from './IdentityMatchRequestOptions';
import {
    IdentityMatchRequestOptionsFromJSON,
    IdentityMatchRequestOptionsFromJSONTyped,
    IdentityMatchRequestOptionsToJSON,
} from './IdentityMatchRequestOptions';
import type { IdentityMatchUser } from './IdentityMatchUser';
import {
    IdentityMatchUserFromJSON,
    IdentityMatchUserFromJSONTyped,
    IdentityMatchUserToJSON,
} from './IdentityMatchUser';

/**
 * IdentityMatchRequest defines the request schema for `/identity/match`
 * @export
 * @interface IdentityMatchRequest
 */
export interface IdentityMatchRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof IdentityMatchRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof IdentityMatchRequest
     */
    secret?: string;
    /**
     * The access token associated with the Item data is being requested for.
     * @type {string}
     * @memberof IdentityMatchRequest
     */
    access_token: string;
    /**
     * 
     * @type {IdentityMatchUser}
     * @memberof IdentityMatchRequest
     */
    user?: IdentityMatchUser;
    /**
     * 
     * @type {IdentityMatchRequestOptions}
     * @memberof IdentityMatchRequest
     */
    options?: IdentityMatchRequestOptions;
}

/**
 * Check if a given object implements the IdentityMatchRequest interface.
 */
export function instanceOfIdentityMatchRequest(value: object): boolean {
    if (!('access_token' in value)) return false;
    return true;
}

export function IdentityMatchRequestFromJSON(json: any): IdentityMatchRequest {
    return IdentityMatchRequestFromJSONTyped(json, false);
}

export function IdentityMatchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityMatchRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'access_token': json['access_token'],
        'user': json['user'] == null ? undefined : IdentityMatchUserFromJSON(json['user']),
        'options': json['options'] == null ? undefined : IdentityMatchRequestOptionsFromJSON(json['options']),
    };
}

export function IdentityMatchRequestToJSON(value?: IdentityMatchRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'access_token': value['access_token'],
        'user': IdentityMatchUserToJSON(value['user']),
        'options': IdentityMatchRequestOptionsToJSON(value['options']),
    };
}

