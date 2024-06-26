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
import type { CreditSessionBankIncomeStatus } from './CreditSessionBankIncomeStatus';
import {
    CreditSessionBankIncomeStatusFromJSON,
    CreditSessionBankIncomeStatusFromJSONTyped,
    CreditSessionBankIncomeStatusToJSON,
} from './CreditSessionBankIncomeStatus';

/**
 * The details of a bank income verification in Link
 * @export
 * @interface CreditSessionBankIncomeResult
 */
export interface CreditSessionBankIncomeResult {
    /**
     * 
     * @type {CreditSessionBankIncomeStatus}
     * @memberof CreditSessionBankIncomeResult
     */
    status?: CreditSessionBankIncomeStatus;
    /**
     * The Plaid Item ID. The `item_id` is always unique; linking the same account at the same institution twice will result in two Items with different `item_id` values. Like all Plaid identifiers, the `item_id` is case-sensitive.
     * @type {string}
     * @memberof CreditSessionBankIncomeResult
     */
    item_id?: string;
    /**
     * The Plaid Institution ID associated with the Item.
     * @type {string}
     * @memberof CreditSessionBankIncomeResult
     */
    institution_id?: string;
}

/**
 * Check if a given object implements the CreditSessionBankIncomeResult interface.
 */
export function instanceOfCreditSessionBankIncomeResult(value: object): boolean {
    return true;
}

export function CreditSessionBankIncomeResultFromJSON(json: any): CreditSessionBankIncomeResult {
    return CreditSessionBankIncomeResultFromJSONTyped(json, false);
}

export function CreditSessionBankIncomeResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditSessionBankIncomeResult {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'] == null ? undefined : CreditSessionBankIncomeStatusFromJSON(json['status']),
        'item_id': json['item_id'] == null ? undefined : json['item_id'],
        'institution_id': json['institution_id'] == null ? undefined : json['institution_id'],
    };
}

export function CreditSessionBankIncomeResultToJSON(value?: CreditSessionBankIncomeResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': CreditSessionBankIncomeStatusToJSON(value['status']),
        'item_id': value['item_id'],
        'institution_id': value['institution_id'],
    };
}

