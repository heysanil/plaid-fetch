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
 * User authentication parameters, for clients making a request without an `access_token`. This is only allowed for select clients and will not be supported in the future. Most clients should call /item/import to obtain an access token before making a request.
 * @export
 * @interface ItemApplicationListUserAuth
 */
export interface ItemApplicationListUserAuth {
    /**
     * Account username.
     * @type {string}
     * @memberof ItemApplicationListUserAuth
     */
    user_id?: string;
    /**
     * Account username hashed by FI.
     * @type {string}
     * @memberof ItemApplicationListUserAuth
     */
    fi_username_hash?: string;
}

/**
 * Check if a given object implements the ItemApplicationListUserAuth interface.
 */
export function instanceOfItemApplicationListUserAuth(value: object): boolean {
    return true;
}

export function ItemApplicationListUserAuthFromJSON(json: any): ItemApplicationListUserAuth {
    return ItemApplicationListUserAuthFromJSONTyped(json, false);
}

export function ItemApplicationListUserAuthFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemApplicationListUserAuth {
    if (json == null) {
        return json;
    }
    return {
        
        'user_id': json['user_id'] == null ? undefined : json['user_id'],
        'fi_username_hash': json['fi_username_hash'] == null ? undefined : json['fi_username_hash'],
    };
}

export function ItemApplicationListUserAuthToJSON(value?: ItemApplicationListUserAuth | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'user_id': value['user_id'],
        'fi_username_hash': value['fi_username_hash'],
    };
}

