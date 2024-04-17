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
 * TransactionsRecurringMergeInput defines a single input to the `/transactions/recurring/streams/merge` endpoint.
 * @export
 * @interface TransactionsRecurringMergeInput
 */
export interface TransactionsRecurringMergeInput {
    /**
     * IDs of all the streams that will be merged into the first stream. This operation will retain the stream_id of the first stream.
     * @type {Array<string>}
     * @memberof TransactionsRecurringMergeInput
     */
    stream_ids: Array<string>;
}

/**
 * Check if a given object implements the TransactionsRecurringMergeInput interface.
 */
export function instanceOfTransactionsRecurringMergeInput(value: object): boolean {
    if (!('stream_ids' in value)) return false;
    return true;
}

export function TransactionsRecurringMergeInputFromJSON(json: any): TransactionsRecurringMergeInput {
    return TransactionsRecurringMergeInputFromJSONTyped(json, false);
}

export function TransactionsRecurringMergeInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsRecurringMergeInput {
    if (json == null) {
        return json;
    }
    return {
        
        'stream_ids': json['stream_ids'],
    };
}

export function TransactionsRecurringMergeInputToJSON(value?: TransactionsRecurringMergeInput | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'stream_ids': value['stream_ids'],
    };
}
