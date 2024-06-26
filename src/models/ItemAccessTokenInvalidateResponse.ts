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
 * ItemAccessTokenInvalidateResponse defines the response schema for `/item/access_token/invalidate`
 * @export
 * @interface ItemAccessTokenInvalidateResponse
 */
export interface ItemAccessTokenInvalidateResponse {
    [key: string]: any | any;
    /**
     * The access token associated with the Item data is being requested for.
     * @type {string}
     * @memberof ItemAccessTokenInvalidateResponse
     */
    new_access_token: string;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof ItemAccessTokenInvalidateResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the ItemAccessTokenInvalidateResponse interface.
 */
export function instanceOfItemAccessTokenInvalidateResponse(value: object): boolean {
    if (!('new_access_token' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function ItemAccessTokenInvalidateResponseFromJSON(json: any): ItemAccessTokenInvalidateResponse {
    return ItemAccessTokenInvalidateResponseFromJSONTyped(json, false);
}

export function ItemAccessTokenInvalidateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemAccessTokenInvalidateResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'new_access_token': json['new_access_token'],
        'request_id': json['request_id'],
    };
}

export function ItemAccessTokenInvalidateResponseToJSON(value?: ItemAccessTokenInvalidateResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'new_access_token': value['new_access_token'],
        'request_id': value['request_id'],
    };
}

