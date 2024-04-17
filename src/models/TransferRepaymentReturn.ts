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
 * Represents a return on a Guaranteed ACH transfer that is included in the specified repayment.
 * @export
 * @interface TransferRepaymentReturn
 */
export interface TransferRepaymentReturn {
    [key: string]: any | any;
    /**
     * The unique identifier of the guaranteed transfer that was returned.
     * @type {string}
     * @memberof TransferRepaymentReturn
     */
    transfer_id: string;
    /**
     * The unique identifier of the corresponding `returned` transfer event.
     * @type {number}
     * @memberof TransferRepaymentReturn
     */
    event_id: number;
    /**
     * The value of the returned transfer.
     * @type {string}
     * @memberof TransferRepaymentReturn
     */
    amount: string;
    /**
     * The currency of the repayment, e.g. "USD".
     * @type {string}
     * @memberof TransferRepaymentReturn
     */
    iso_currency_code: string;
}

/**
 * Check if a given object implements the TransferRepaymentReturn interface.
 */
export function instanceOfTransferRepaymentReturn(value: object): boolean {
    if (!('transfer_id' in value)) return false;
    if (!('event_id' in value)) return false;
    if (!('amount' in value)) return false;
    if (!('iso_currency_code' in value)) return false;
    return true;
}

export function TransferRepaymentReturnFromJSON(json: any): TransferRepaymentReturn {
    return TransferRepaymentReturnFromJSONTyped(json, false);
}

export function TransferRepaymentReturnFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferRepaymentReturn {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'transfer_id': json['transfer_id'],
        'event_id': json['event_id'],
        'amount': json['amount'],
        'iso_currency_code': json['iso_currency_code'],
    };
}

export function TransferRepaymentReturnToJSON(value?: TransferRepaymentReturn | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'transfer_id': value['transfer_id'],
        'event_id': value['event_id'],
        'amount': value['amount'],
        'iso_currency_code': value['iso_currency_code'],
    };
}
