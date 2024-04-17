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
 * Specifies options for initializing Link for use with the Transfer product.
 * @export
 * @interface LinkTokenCreateRequestTransfer
 */
export interface LinkTokenCreateRequestTransfer {
    /**
     * The `id` returned by the `/transfer/intent/create` endpoint.
     * @type {string}
     * @memberof LinkTokenCreateRequestTransfer
     */
    intent_id?: string;
    /**
     * The `payment_profile_token` returned by the `/payment_profile/create` endpoint.
     * @type {string}
     * @memberof LinkTokenCreateRequestTransfer
     */
    payment_profile_token?: string;
}

/**
 * Check if a given object implements the LinkTokenCreateRequestTransfer interface.
 */
export function instanceOfLinkTokenCreateRequestTransfer(value: object): boolean {
    return true;
}

export function LinkTokenCreateRequestTransferFromJSON(json: any): LinkTokenCreateRequestTransfer {
    return LinkTokenCreateRequestTransferFromJSONTyped(json, false);
}

export function LinkTokenCreateRequestTransferFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkTokenCreateRequestTransfer {
    if (json == null) {
        return json;
    }
    return {
        
        'intent_id': json['intent_id'] == null ? undefined : json['intent_id'],
        'payment_profile_token': json['payment_profile_token'] == null ? undefined : json['payment_profile_token'],
    };
}

export function LinkTokenCreateRequestTransferToJSON(value?: LinkTokenCreateRequestTransfer | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'intent_id': value['intent_id'],
        'payment_profile_token': value['payment_profile_token'],
    };
}
