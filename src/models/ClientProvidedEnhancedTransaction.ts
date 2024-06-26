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
import type { Enhancements } from './Enhancements';
import {
    EnhancementsFromJSON,
    EnhancementsFromJSONTyped,
    EnhancementsToJSON,
} from './Enhancements';

/**
 * A client-provided transaction that Plaid has enhanced.
 * @export
 * @interface ClientProvidedEnhancedTransaction
 */
export interface ClientProvidedEnhancedTransaction {
    [key: string]: any | any;
    /**
     * Unique transaction identifier to tie transactions back to clients' systems.
     * @type {string}
     * @memberof ClientProvidedEnhancedTransaction
     */
    id: string;
    /**
     * The raw description of the transaction.
     * @type {string}
     * @memberof ClientProvidedEnhancedTransaction
     */
    description: string;
    /**
     * The value of the transaction, denominated in the account's currency, as stated in `iso_currency_code`. Positive values when money moves out of the account; negative values when money moves in. For example, debit card purchases are positive; credit card payments, direct deposits, and refunds are negative.
     * @type {number}
     * @memberof ClientProvidedEnhancedTransaction
     */
    amount: number;
    /**
     * The ISO-4217 currency code of the transaction.
     * @type {string}
     * @memberof ClientProvidedEnhancedTransaction
     */
    iso_currency_code: string;
    /**
     * 
     * @type {Enhancements}
     * @memberof ClientProvidedEnhancedTransaction
     */
    enhancements: Enhancements;
}

/**
 * Check if a given object implements the ClientProvidedEnhancedTransaction interface.
 */
export function instanceOfClientProvidedEnhancedTransaction(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('description' in value)) return false;
    if (!('amount' in value)) return false;
    if (!('iso_currency_code' in value)) return false;
    if (!('enhancements' in value)) return false;
    return true;
}

export function ClientProvidedEnhancedTransactionFromJSON(json: any): ClientProvidedEnhancedTransaction {
    return ClientProvidedEnhancedTransactionFromJSONTyped(json, false);
}

export function ClientProvidedEnhancedTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientProvidedEnhancedTransaction {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'id': json['id'],
        'description': json['description'],
        'amount': json['amount'],
        'iso_currency_code': json['iso_currency_code'],
        'enhancements': EnhancementsFromJSON(json['enhancements']),
    };
}

export function ClientProvidedEnhancedTransactionToJSON(value?: ClientProvidedEnhancedTransaction | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'id': value['id'],
        'description': value['description'],
        'amount': value['amount'],
        'iso_currency_code': value['iso_currency_code'],
        'enhancements': EnhancementsToJSON(value['enhancements']),
    };
}

