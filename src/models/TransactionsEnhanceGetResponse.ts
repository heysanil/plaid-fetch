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
import type { ClientProvidedEnhancedTransaction } from './ClientProvidedEnhancedTransaction';
import {
    ClientProvidedEnhancedTransactionFromJSON,
    ClientProvidedEnhancedTransactionFromJSONTyped,
    ClientProvidedEnhancedTransactionToJSON,
} from './ClientProvidedEnhancedTransaction';

/**
 * TransactionsEnhanceGetResponse defines the response schema for `/beta/transactions/v1/enhance`.
 * @export
 * @interface TransactionsEnhanceGetResponse
 */
export interface TransactionsEnhanceGetResponse {
    [key: string]: any | any;
    /**
     * An array of enhanced transactions.
     * @type {Array<ClientProvidedEnhancedTransaction>}
     * @memberof TransactionsEnhanceGetResponse
     */
    enhanced_transactions: Array<ClientProvidedEnhancedTransaction>;
}

/**
 * Check if a given object implements the TransactionsEnhanceGetResponse interface.
 */
export function instanceOfTransactionsEnhanceGetResponse(value: object): boolean {
    if (!('enhanced_transactions' in value)) return false;
    return true;
}

export function TransactionsEnhanceGetResponseFromJSON(json: any): TransactionsEnhanceGetResponse {
    return TransactionsEnhanceGetResponseFromJSONTyped(json, false);
}

export function TransactionsEnhanceGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsEnhanceGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'enhanced_transactions': ((json['enhanced_transactions'] as Array<any>).map(ClientProvidedEnhancedTransactionFromJSON)),
    };
}

export function TransactionsEnhanceGetResponseToJSON(value?: TransactionsEnhanceGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'enhanced_transactions': ((value['enhanced_transactions'] as Array<any>).map(ClientProvidedEnhancedTransactionToJSON)),
    };
}
