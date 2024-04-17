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
 * Request input for fetching a Beacon User
 * @export
 * @interface BeaconUserGetRequest
 */
export interface BeaconUserGetRequest {
    /**
     * ID of the associated Beacon User.
     * @type {string}
     * @memberof BeaconUserGetRequest
     */
    beacon_user_id: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof BeaconUserGetRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof BeaconUserGetRequest
     */
    secret?: string;
}

/**
 * Check if a given object implements the BeaconUserGetRequest interface.
 */
export function instanceOfBeaconUserGetRequest(value: object): boolean {
    if (!('beacon_user_id' in value)) return false;
    return true;
}

export function BeaconUserGetRequestFromJSON(json: any): BeaconUserGetRequest {
    return BeaconUserGetRequestFromJSONTyped(json, false);
}

export function BeaconUserGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconUserGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'beacon_user_id': json['beacon_user_id'],
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
    };
}

export function BeaconUserGetRequestToJSON(value?: BeaconUserGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'beacon_user_id': value['beacon_user_id'],
        'client_id': value['client_id'],
        'secret': value['secret'],
    };
}
