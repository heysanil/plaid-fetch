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
 * An object representing a balance held by an account in the past
 * @export
 * @interface HistoricalBalance
 */
export interface HistoricalBalance {
    [key: string]: any | any;
    /**
     * The date of the calculated historical balance, in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD)
     * @type {Date}
     * @memberof HistoricalBalance
     */
    date: Date;
    /**
     * The total amount of funds in the account, calculated from the `current` balance in the `balance` object by subtracting inflows and adding back outflows according to the posted date of each transaction.
     * 
     * If the account has any pending transactions, historical balance amounts on or after the date of the earliest pending transaction may differ if retrieved in subsequent Asset Reports as a result of those pending transactions posting.
     * @type {number}
     * @memberof HistoricalBalance
     */
    current: number;
    /**
     * The ISO-4217 currency code of the balance. Always `null` if `unofficial_currency_code` is non-`null`.
     * @type {string}
     * @memberof HistoricalBalance
     */
    iso_currency_code: string | null;
    /**
     * The unofficial currency code associated with the balance. Always `null` if `iso_currency_code` is non-`null`.
     * 
     * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a full listing of supported `unofficial_currency_code`s.
     * @type {string}
     * @memberof HistoricalBalance
     */
    unofficial_currency_code: string | null;
}

/**
 * Check if a given object implements the HistoricalBalance interface.
 */
export function instanceOfHistoricalBalance(value: object): boolean {
    if (!('date' in value)) return false;
    if (!('current' in value)) return false;
    if (!('iso_currency_code' in value)) return false;
    if (!('unofficial_currency_code' in value)) return false;
    return true;
}

export function HistoricalBalanceFromJSON(json: any): HistoricalBalance {
    return HistoricalBalanceFromJSONTyped(json, false);
}

export function HistoricalBalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoricalBalance {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'date': (new Date(json['date'])),
        'current': json['current'],
        'iso_currency_code': json['iso_currency_code'],
        'unofficial_currency_code': json['unofficial_currency_code'],
    };
}

export function HistoricalBalanceToJSON(value?: HistoricalBalance | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'date': ((value['date']).toISOString().substring(0,10)),
        'current': value['current'],
        'iso_currency_code': value['iso_currency_code'],
        'unofficial_currency_code': value['unofficial_currency_code'],
    };
}
