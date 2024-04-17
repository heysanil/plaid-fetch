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
 * An optional object for `/credit/bank_income/get` request options.
 * @export
 * @interface CreditBankIncomeGetRequestOptions
 */
export interface CreditBankIncomeGetRequestOptions {
    /**
     * How many Bank Income Reports should be fetched. Multiple reports may be available if the report has been re-created or refreshed. If more than one report is available, the most recent reports will be returned first.
     * @type {number}
     * @memberof CreditBankIncomeGetRequestOptions
     */
    count?: number;
}

/**
 * Check if a given object implements the CreditBankIncomeGetRequestOptions interface.
 */
export function instanceOfCreditBankIncomeGetRequestOptions(value: object): boolean {
    return true;
}

export function CreditBankIncomeGetRequestOptionsFromJSON(json: any): CreditBankIncomeGetRequestOptions {
    return CreditBankIncomeGetRequestOptionsFromJSONTyped(json, false);
}

export function CreditBankIncomeGetRequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditBankIncomeGetRequestOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
    };
}

export function CreditBankIncomeGetRequestOptionsToJSON(value?: CreditBankIncomeGetRequestOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
    };
}
