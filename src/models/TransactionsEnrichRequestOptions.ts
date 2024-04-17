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
 * An optional object to be used with the request.
 * @export
 * @interface TransactionsEnrichRequestOptions
 */
export interface TransactionsEnrichRequestOptions {
    /**
     * Include `legacy_category` and `legacy_category_id` in the response (in addition to the default `personal_finance_category`).
     * 
     * Categories are based on Plaid's legacy taxonomy. For a full list of legacy categories, see [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
     * @type {boolean}
     * @memberof TransactionsEnrichRequestOptions
     */
    include_legacy_category?: boolean;
}

/**
 * Check if a given object implements the TransactionsEnrichRequestOptions interface.
 */
export function instanceOfTransactionsEnrichRequestOptions(value: object): boolean {
    return true;
}

export function TransactionsEnrichRequestOptionsFromJSON(json: any): TransactionsEnrichRequestOptions {
    return TransactionsEnrichRequestOptionsFromJSONTyped(json, false);
}

export function TransactionsEnrichRequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsEnrichRequestOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'include_legacy_category': json['include_legacy_category'] == null ? undefined : json['include_legacy_category'],
    };
}

export function TransactionsEnrichRequestOptionsToJSON(value?: TransactionsEnrichRequestOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'include_legacy_category': value['include_legacy_category'],
    };
}
