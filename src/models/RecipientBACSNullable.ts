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
 * An object containing a BACS account number and sort code. If an IBAN is not provided or if this recipient needs to accept domestic GBP-denominated payments, BACS data is required.
 * @export
 * @interface RecipientBACSNullable
 */
export interface RecipientBACSNullable {
    /**
     * The account number of the account. Maximum of 10 characters.
     * @type {string}
     * @memberof RecipientBACSNullable
     */
    account?: string;
    /**
     * The 6-character sort code of the account.
     * @type {string}
     * @memberof RecipientBACSNullable
     */
    sort_code?: string;
}

/**
 * Check if a given object implements the RecipientBACSNullable interface.
 */
export function instanceOfRecipientBACSNullable(value: object): boolean {
    return true;
}

export function RecipientBACSNullableFromJSON(json: any): RecipientBACSNullable {
    return RecipientBACSNullableFromJSONTyped(json, false);
}

export function RecipientBACSNullableFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipientBACSNullable {
    if (json == null) {
        return json;
    }
    return {
        
        'account': json['account'] == null ? undefined : json['account'],
        'sort_code': json['sort_code'] == null ? undefined : json['sort_code'],
    };
}

export function RecipientBACSNullableToJSON(value?: RecipientBACSNullable | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account': value['account'],
        'sort_code': value['sort_code'],
    };
}
