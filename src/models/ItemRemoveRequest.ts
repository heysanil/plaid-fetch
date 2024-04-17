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
 * ItemRemoveRequest defines the request schema for `/item/remove`
 * @export
 * @interface ItemRemoveRequest
 */
export interface ItemRemoveRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof ItemRemoveRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof ItemRemoveRequest
     */
    secret?: string;
    /**
     * The access token associated with the Item data is being requested for.
     * @type {string}
     * @memberof ItemRemoveRequest
     */
    access_token: string;
}

/**
 * Check if a given object implements the ItemRemoveRequest interface.
 */
export function instanceOfItemRemoveRequest(value: object): boolean {
    if (!('access_token' in value)) return false;
    return true;
}

export function ItemRemoveRequestFromJSON(json: any): ItemRemoveRequest {
    return ItemRemoveRequestFromJSONTyped(json, false);
}

export function ItemRemoveRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemRemoveRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'access_token': json['access_token'],
    };
}

export function ItemRemoveRequestToJSON(value?: ItemRemoveRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'access_token': value['access_token'],
    };
}
