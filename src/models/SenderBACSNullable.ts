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
 * @interface SenderBACSNullable
 */
export interface SenderBACSNullable {
    /**
     * The account number of the account. Maximum of 10 characters.
     * @type {string}
     * @memberof SenderBACSNullable
     */
    account?: string;
    /**
     * The 6-character sort code of the account.
     * @type {string}
     * @memberof SenderBACSNullable
     */
    sort_code?: string;
}

/**
 * Check if a given object implements the SenderBACSNullable interface.
 */
export function instanceOfSenderBACSNullable(value: object): boolean {
    return true;
}

export function SenderBACSNullableFromJSON(json: any): SenderBACSNullable {
    return SenderBACSNullableFromJSONTyped(json, false);
}

export function SenderBACSNullableFromJSONTyped(json: any, ignoreDiscriminator: boolean): SenderBACSNullable {
    if (json == null) {
        return json;
    }
    return {
        
        'account': json['account'] == null ? undefined : json['account'],
        'sort_code': json['sort_code'] == null ? undefined : json['sort_code'],
    };
}

export function SenderBACSNullableToJSON(value?: SenderBACSNullable | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account': value['account'],
        'sort_code': value['sort_code'],
    };
}

