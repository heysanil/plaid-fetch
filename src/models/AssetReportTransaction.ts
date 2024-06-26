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
import type { AssetReportTransactionType } from './AssetReportTransactionType';
import {
    AssetReportTransactionTypeFromJSON,
    AssetReportTransactionTypeFromJSONTyped,
    AssetReportTransactionTypeToJSON,
} from './AssetReportTransactionType';
import type { CreditCategory } from './CreditCategory';
import {
    CreditCategoryFromJSON,
    CreditCategoryFromJSONTyped,
    CreditCategoryToJSON,
} from './CreditCategory';
import type { Location } from './Location';
import {
    LocationFromJSON,
    LocationFromJSONTyped,
    LocationToJSON,
} from './Location';
import type { PaymentMeta } from './PaymentMeta';
import {
    PaymentMetaFromJSON,
    PaymentMetaFromJSONTyped,
    PaymentMetaToJSON,
} from './PaymentMeta';

/**
 * A transaction on the asset report
 * @export
 * @interface AssetReportTransaction
 */
export interface AssetReportTransaction {
    [key: string]: any | any;
    /**
     * The ID of the account in which this transaction occurred.
     * @type {string}
     * @memberof AssetReportTransaction
     */
    account_id: string;
    /**
     * The settled value of the transaction, denominated in the transaction's currency, as stated in `iso_currency_code` or `unofficial_currency_code`. Positive values when money moves out of the account; negative values when money moves in. For example, debit card purchases are positive; credit card payments, direct deposits, and refunds are negative.
     * @type {number}
     * @memberof AssetReportTransaction
     */
    amount: number;
    /**
     * The ISO-4217 currency code of the transaction. Always `null` if `unofficial_currency_code` is non-null.
     * @type {string}
     * @memberof AssetReportTransaction
     */
    iso_currency_code: string | null;
    /**
     * The unofficial currency code associated with the transaction. Always `null` if `iso_currency_code` is non-`null`. Unofficial currency codes are used for currencies that do not have official ISO currency codes, such as cryptocurrencies and the currencies of certain countries.
     * 
     * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a full listing of supported `unofficial_currency_code`s.
     * @type {string}
     * @memberof AssetReportTransaction
     */
    unofficial_currency_code: string | null;
    /**
     * The string returned by the financial institution to describe the transaction.
     * @type {string}
     * @memberof AssetReportTransaction
     */
    original_description: string | null;
    /**
     * A hierarchical array of the categories to which this transaction belongs. For a full list of categories, see [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
     * 
     * This field will only appear in an Asset Report with Insights.
     * @type {Array<string>}
     * @memberof AssetReportTransaction
     */
    category?: Array<string>;
    /**
     * The ID of the category to which this transaction belongs. For a full list of categories, see [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
     * 
     * This field will only appear in an Asset Report with Insights.
     * @type {string}
     * @memberof AssetReportTransaction
     */
    category_id?: string;
    /**
     * 
     * @type {CreditCategory}
     * @memberof AssetReportTransaction
     */
    credit_category?: CreditCategory;
    /**
     * The check number of the transaction. This field is only populated for check transactions.
     * @type {string}
     * @memberof AssetReportTransaction
     */
    check_number?: string;
    /**
     * For pending transactions, the date that the transaction occurred; for posted transactions, the date that the transaction posted. Both dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format ( `YYYY-MM-DD` ).
     * @type {Date}
     * @memberof AssetReportTransaction
     */
    date: Date;
    /**
     * The date on which the transaction took place, in IS0 8601 format.
     * @type {string}
     * @memberof AssetReportTransaction
     */
    date_transacted?: string;
    /**
     * 
     * @type {Location}
     * @memberof AssetReportTransaction
     */
    location?: Location;
    /**
     * The merchant name or transaction description.
     * 
     * This field will only appear in an Asset Report with Insights.
     * @type {string}
     * @memberof AssetReportTransaction
     */
    name?: string;
    /**
     * The merchant name, as enriched by Plaid from the `name` field. This is typically a more human-readable version of the merchant counterparty in the transaction. For some bank transactions (such as checks or account transfers) where there is no meaningful merchant name, this value will be `null`.
     * @type {string}
     * @memberof AssetReportTransaction
     */
    merchant_name?: string;
    /**
     * 
     * @type {PaymentMeta}
     * @memberof AssetReportTransaction
     */
    payment_meta?: PaymentMeta;
    /**
     * When `true`, identifies the transaction as pending or unsettled. Pending transaction details (name, type, amount, category ID) may change before they are settled.
     * @type {boolean}
     * @memberof AssetReportTransaction
     */
    pending: boolean;
    /**
     * The ID of a posted transaction's associated pending transaction, where applicable.
     * @type {string}
     * @memberof AssetReportTransaction
     */
    pending_transaction_id?: string;
    /**
     * The name of the account owner. This field is not typically populated and only relevant when dealing with sub-accounts.
     * @type {string}
     * @memberof AssetReportTransaction
     */
    account_owner?: string;
    /**
     * The unique ID of the transaction. Like all Plaid identifiers, the `transaction_id` is case sensitive.
     * @type {string}
     * @memberof AssetReportTransaction
     */
    transaction_id: string;
    /**
     * 
     * @type {AssetReportTransactionType}
     * @memberof AssetReportTransaction
     */
    transaction_type?: AssetReportTransactionType;
    /**
     * A unique identifier for an income source.
     * @type {string}
     * @memberof AssetReportTransaction
     */
    income_source_id?: string;
}

/**
 * Check if a given object implements the AssetReportTransaction interface.
 */
export function instanceOfAssetReportTransaction(value: object): boolean {
    if (!('account_id' in value)) return false;
    if (!('amount' in value)) return false;
    if (!('iso_currency_code' in value)) return false;
    if (!('unofficial_currency_code' in value)) return false;
    if (!('original_description' in value)) return false;
    if (!('date' in value)) return false;
    if (!('pending' in value)) return false;
    if (!('transaction_id' in value)) return false;
    return true;
}

export function AssetReportTransactionFromJSON(json: any): AssetReportTransaction {
    return AssetReportTransactionFromJSONTyped(json, false);
}

export function AssetReportTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetReportTransaction {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'account_id': json['account_id'],
        'amount': json['amount'],
        'iso_currency_code': json['iso_currency_code'],
        'unofficial_currency_code': json['unofficial_currency_code'],
        'original_description': json['original_description'],
        'category': json['category'] == null ? undefined : json['category'],
        'category_id': json['category_id'] == null ? undefined : json['category_id'],
        'credit_category': json['credit_category'] == null ? undefined : CreditCategoryFromJSON(json['credit_category']),
        'check_number': json['check_number'] == null ? undefined : json['check_number'],
        'date': (new Date(json['date'])),
        'date_transacted': json['date_transacted'] == null ? undefined : json['date_transacted'],
        'location': json['location'] == null ? undefined : LocationFromJSON(json['location']),
        'name': json['name'] == null ? undefined : json['name'],
        'merchant_name': json['merchant_name'] == null ? undefined : json['merchant_name'],
        'payment_meta': json['payment_meta'] == null ? undefined : PaymentMetaFromJSON(json['payment_meta']),
        'pending': json['pending'],
        'pending_transaction_id': json['pending_transaction_id'] == null ? undefined : json['pending_transaction_id'],
        'account_owner': json['account_owner'] == null ? undefined : json['account_owner'],
        'transaction_id': json['transaction_id'],
        'transaction_type': json['transaction_type'] == null ? undefined : AssetReportTransactionTypeFromJSON(json['transaction_type']),
        'income_source_id': json['income_source_id'] == null ? undefined : json['income_source_id'],
    };
}

export function AssetReportTransactionToJSON(value?: AssetReportTransaction | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'account_id': value['account_id'],
        'amount': value['amount'],
        'iso_currency_code': value['iso_currency_code'],
        'unofficial_currency_code': value['unofficial_currency_code'],
        'original_description': value['original_description'],
        'category': value['category'],
        'category_id': value['category_id'],
        'credit_category': CreditCategoryToJSON(value['credit_category']),
        'check_number': value['check_number'],
        'date': ((value['date']).toISOString().substring(0,10)),
        'date_transacted': value['date_transacted'],
        'location': LocationToJSON(value['location']),
        'name': value['name'],
        'merchant_name': value['merchant_name'],
        'payment_meta': PaymentMetaToJSON(value['payment_meta']),
        'pending': value['pending'],
        'pending_transaction_id': value['pending_transaction_id'],
        'account_owner': value['account_owner'],
        'transaction_id': value['transaction_id'],
        'transaction_type': AssetReportTransactionTypeToJSON(value['transaction_type']),
        'income_source_id': value['income_source_id'],
    };
}

