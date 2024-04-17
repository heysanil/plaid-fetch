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
 * TransactionsRecurringCreateInput defines a single input to the `/transactions/recurring/streams/create` endpoint.
 * @export
 * @interface TransactionsRecurringCreateInput
 */
export interface TransactionsRecurringCreateInput {
    /**
     * IDs of all the transactions that will be merged into one stream. If any transaction currently exists in another stream, it will be removed from the other stream.
     * @type {Array<string>}
     * @memberof TransactionsRecurringCreateInput
     */
    transaction_ids?: Array<string>;
}

/**
 * Check if a given object implements the TransactionsRecurringCreateInput interface.
 */
export function instanceOfTransactionsRecurringCreateInput(value: object): boolean {
    return true;
}

export function TransactionsRecurringCreateInputFromJSON(json: any): TransactionsRecurringCreateInput {
    return TransactionsRecurringCreateInputFromJSONTyped(json, false);
}

export function TransactionsRecurringCreateInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsRecurringCreateInput {
    if (json == null) {
        return json;
    }
    return {
        
        'transaction_ids': json['transaction_ids'] == null ? undefined : json['transaction_ids'],
    };
}

export function TransactionsRecurringCreateInputToJSON(value?: TransactionsRecurringCreateInput | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'transaction_ids': value['transaction_ids'],
    };
}
