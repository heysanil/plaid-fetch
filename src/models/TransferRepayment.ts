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
 * A repayment is created automatically after one or more guaranteed transactions receive a return. If there are multiple eligible returns in a day, they are batched together into a single repayment.
 * 
 * Repayments are sent over ACH, with funds typically available on the next banking day.
 * @export
 * @interface TransferRepayment
 */
export interface TransferRepayment {
    [key: string]: any | any;
    /**
     * Identifier of the repayment.
     * @type {string}
     * @memberof TransferRepayment
     */
    repayment_id: string;
    /**
     * The datetime when the repayment occurred, in RFC 3339 format.
     * @type {Date}
     * @memberof TransferRepayment
     */
    created: Date;
    /**
     * Decimal amount of the repayment as it appears on your account ledger.
     * @type {string}
     * @memberof TransferRepayment
     */
    amount: string;
    /**
     * The currency of the repayment, e.g. "USD".
     * @type {string}
     * @memberof TransferRepayment
     */
    iso_currency_code: string;
}

/**
 * Check if a given object implements the TransferRepayment interface.
 */
export function instanceOfTransferRepayment(value: object): boolean {
    if (!('repayment_id' in value)) return false;
    if (!('created' in value)) return false;
    if (!('amount' in value)) return false;
    if (!('iso_currency_code' in value)) return false;
    return true;
}

export function TransferRepaymentFromJSON(json: any): TransferRepayment {
    return TransferRepaymentFromJSONTyped(json, false);
}

export function TransferRepaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferRepayment {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'repayment_id': json['repayment_id'],
        'created': (new Date(json['created'])),
        'amount': json['amount'],
        'iso_currency_code': json['iso_currency_code'],
    };
}

export function TransferRepaymentToJSON(value?: TransferRepayment | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'repayment_id': value['repayment_id'],
        'created': ((value['created']).toISOString()),
        'amount': value['amount'],
        'iso_currency_code': value['iso_currency_code'],
    };
}
