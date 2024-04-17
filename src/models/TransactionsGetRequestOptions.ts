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
 * An optional object to be used with the request. If specified, `options` must not be `null`.
 * @export
 * @interface TransactionsGetRequestOptions
 */
export interface TransactionsGetRequestOptions {
    /**
     * A list of `account_ids` to retrieve for the Item
     * 
     * Note: An error will be returned if a provided `account_id` is not associated with the Item.
     * @type {Array<string>}
     * @memberof TransactionsGetRequestOptions
     */
    account_ids?: Array<string>;
    /**
     * The number of transactions to fetch.
     * @type {number}
     * @memberof TransactionsGetRequestOptions
     */
    count?: number;
    /**
     * The number of transactions to skip. The default value is 0.
     * @type {number}
     * @memberof TransactionsGetRequestOptions
     */
    offset?: number;
    /**
     * Include the raw unparsed transaction description from the financial institution.
     * @type {boolean}
     * @memberof TransactionsGetRequestOptions
     */
    include_original_description?: boolean;
    /**
     * Personal finance categories are now returned by default.
     * @type {boolean}
     * @memberof TransactionsGetRequestOptions
     * @deprecated
     */
    include_personal_finance_category_beta?: boolean;
    /**
     * Personal finance categories are now returned by default.
     * @type {boolean}
     * @memberof TransactionsGetRequestOptions
     * @deprecated
     */
    include_personal_finance_category?: boolean;
    /**
     * Counterparties and extra merchant fields are now returned by default.
     * @type {boolean}
     * @memberof TransactionsGetRequestOptions
     * @deprecated
     */
    include_logo_and_counterparty_beta?: boolean;
    /**
     * This option only applies to calls for Items that were not initialized with Transactions during Link and are now adding the Transactions product to the Item for the first time. In these cases, this option controls the maximum number of days of transaction history that Plaid will request from the financial institution. For developer accounts created after December 3, 2023, if no value is specified, this will default to 90 days. For developer accounts created on December 3, 2023 or earlier, if no value is specified, this will default to 730 days until June 24, 2024, at which point it will default to 90 days.
     * 
     * If Transactions has already been added to the Item prior to this call, this field will have no effect.
     * 
     * We strongly recommend that customers utilizing [Recurring Transactions](https://plaid.com/docs/api/products/transactions/#transactionsrecurringget) request at least 180 days of history for optimal results.
     * @type {number}
     * @memberof TransactionsGetRequestOptions
     */
    days_requested?: number;
}

/**
 * Check if a given object implements the TransactionsGetRequestOptions interface.
 */
export function instanceOfTransactionsGetRequestOptions(value: object): boolean {
    return true;
}

export function TransactionsGetRequestOptionsFromJSON(json: any): TransactionsGetRequestOptions {
    return TransactionsGetRequestOptionsFromJSONTyped(json, false);
}

export function TransactionsGetRequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsGetRequestOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'account_ids': json['account_ids'] == null ? undefined : json['account_ids'],
        'count': json['count'] == null ? undefined : json['count'],
        'offset': json['offset'] == null ? undefined : json['offset'],
        'include_original_description': json['include_original_description'] == null ? undefined : json['include_original_description'],
        'include_personal_finance_category_beta': json['include_personal_finance_category_beta'] == null ? undefined : json['include_personal_finance_category_beta'],
        'include_personal_finance_category': json['include_personal_finance_category'] == null ? undefined : json['include_personal_finance_category'],
        'include_logo_and_counterparty_beta': json['include_logo_and_counterparty_beta'] == null ? undefined : json['include_logo_and_counterparty_beta'],
        'days_requested': json['days_requested'] == null ? undefined : json['days_requested'],
    };
}

export function TransactionsGetRequestOptionsToJSON(value?: TransactionsGetRequestOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_ids': value['account_ids'],
        'count': value['count'],
        'offset': value['offset'],
        'include_original_description': value['include_original_description'],
        'include_personal_finance_category_beta': value['include_personal_finance_category_beta'],
        'include_personal_finance_category': value['include_personal_finance_category'],
        'include_logo_and_counterparty_beta': value['include_logo_and_counterparty_beta'],
        'days_requested': value['days_requested'],
    };
}
