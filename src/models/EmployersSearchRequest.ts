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
 * EmployersSearchRequest defines the request schema for `/employers/search`.
 * @export
 * @interface EmployersSearchRequest
 */
export interface EmployersSearchRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof EmployersSearchRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof EmployersSearchRequest
     */
    secret?: string;
    /**
     * The employer name to be searched for.
     * @type {string}
     * @memberof EmployersSearchRequest
     */
    query: string;
    /**
     * The Plaid products the returned employers should support. Currently, this field must be set to `"deposit_switch"`.
     * @type {Array<string>}
     * @memberof EmployersSearchRequest
     */
    products: Array<string>;
}

/**
 * Check if a given object implements the EmployersSearchRequest interface.
 */
export function instanceOfEmployersSearchRequest(value: object): boolean {
    if (!('query' in value)) return false;
    if (!('products' in value)) return false;
    return true;
}

export function EmployersSearchRequestFromJSON(json: any): EmployersSearchRequest {
    return EmployersSearchRequestFromJSONTyped(json, false);
}

export function EmployersSearchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmployersSearchRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'query': json['query'],
        'products': json['products'],
    };
}

export function EmployersSearchRequestToJSON(value?: EmployersSearchRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'query': value['query'],
        'products': value['products'],
    };
}

