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
import type { Products } from './Products';
import {
    ProductsFromJSON,
    ProductsFromJSONTyped,
    ProductsToJSON,
} from './Products';
import type { SandboxPublicTokenCreateRequestOptions } from './SandboxPublicTokenCreateRequestOptions';
import {
    SandboxPublicTokenCreateRequestOptionsFromJSON,
    SandboxPublicTokenCreateRequestOptionsFromJSONTyped,
    SandboxPublicTokenCreateRequestOptionsToJSON,
} from './SandboxPublicTokenCreateRequestOptions';

/**
 * SandboxPublicTokenCreateRequest defines the request schema for `/sandbox/public_token/create`
 * @export
 * @interface SandboxPublicTokenCreateRequest
 */
export interface SandboxPublicTokenCreateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof SandboxPublicTokenCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof SandboxPublicTokenCreateRequest
     */
    secret?: string;
    /**
     * The ID of the institution the Item will be associated with
     * @type {string}
     * @memberof SandboxPublicTokenCreateRequest
     */
    institution_id: string;
    /**
     * The products to initially pull for the Item. May be any products that the specified `institution_id`  supports. This array may not be empty.
     * @type {Array<Products>}
     * @memberof SandboxPublicTokenCreateRequest
     */
    initial_products: Array<Products>;
    /**
     * 
     * @type {SandboxPublicTokenCreateRequestOptions}
     * @memberof SandboxPublicTokenCreateRequest
     */
    options?: SandboxPublicTokenCreateRequestOptions;
    /**
     * The user token associated with the User data is being requested for.
     * @type {string}
     * @memberof SandboxPublicTokenCreateRequest
     */
    user_token?: string;
}

/**
 * Check if a given object implements the SandboxPublicTokenCreateRequest interface.
 */
export function instanceOfSandboxPublicTokenCreateRequest(value: object): boolean {
    if (!('institution_id' in value)) return false;
    if (!('initial_products' in value)) return false;
    return true;
}

export function SandboxPublicTokenCreateRequestFromJSON(json: any): SandboxPublicTokenCreateRequest {
    return SandboxPublicTokenCreateRequestFromJSONTyped(json, false);
}

export function SandboxPublicTokenCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxPublicTokenCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'institution_id': json['institution_id'],
        'initial_products': ((json['initial_products'] as Array<any>).map(ProductsFromJSON)),
        'options': json['options'] == null ? undefined : SandboxPublicTokenCreateRequestOptionsFromJSON(json['options']),
        'user_token': json['user_token'] == null ? undefined : json['user_token'],
    };
}

export function SandboxPublicTokenCreateRequestToJSON(value?: SandboxPublicTokenCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'institution_id': value['institution_id'],
        'initial_products': ((value['initial_products'] as Array<any>).map(ProductsToJSON)),
        'options': SandboxPublicTokenCreateRequestOptionsToJSON(value['options']),
        'user_token': value['user_token'],
    };
}

