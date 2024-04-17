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
 * Information about the matched direct deposit transaction used to verify a user's payroll information.
 * @export
 * @interface TransactionData
 */
export interface TransactionData {
    [key: string]: any | any;
    /**
     * The description of the transaction.
     * @type {string}
     * @memberof TransactionData
     */
    description: string;
    /**
     * The amount of the transaction.
     * @type {number}
     * @memberof TransactionData
     */
    amount: number;
    /**
     * The date of the transaction, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format ("yyyy-mm-dd").
     * @type {Date}
     * @memberof TransactionData
     */
    date: Date;
    /**
     * A unique identifier for the end user's account.
     * @type {string}
     * @memberof TransactionData
     */
    account_id: string;
    /**
     * A unique identifier for the transaction.
     * @type {string}
     * @memberof TransactionData
     */
    transaction_id: string;
}

/**
 * Check if a given object implements the TransactionData interface.
 */
export function instanceOfTransactionData(value: object): boolean {
    if (!('description' in value)) return false;
    if (!('amount' in value)) return false;
    if (!('date' in value)) return false;
    if (!('account_id' in value)) return false;
    if (!('transaction_id' in value)) return false;
    return true;
}

export function TransactionDataFromJSON(json: any): TransactionData {
    return TransactionDataFromJSONTyped(json, false);
}

export function TransactionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionData {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'description': json['description'],
        'amount': json['amount'],
        'date': (new Date(json['date'])),
        'account_id': json['account_id'],
        'transaction_id': json['transaction_id'],
    };
}

export function TransactionDataToJSON(value?: TransactionData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'description': value['description'],
        'amount': value['amount'],
        'date': ((value['date']).toISOString().substring(0,10)),
        'account_id': value['account_id'],
        'transaction_id': value['transaction_id'],
    };
}
