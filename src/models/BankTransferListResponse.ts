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
import type { BankTransfer } from './BankTransfer';
import {
    BankTransferFromJSON,
    BankTransferFromJSONTyped,
    BankTransferToJSON,
} from './BankTransfer';

/**
 * Defines the response schema for `/bank_transfer/list`
 * @export
 * @interface BankTransferListResponse
 */
export interface BankTransferListResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {Array<BankTransfer>}
     * @memberof BankTransferListResponse
     */
    bank_transfers: Array<BankTransfer>;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof BankTransferListResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the BankTransferListResponse interface.
 */
export function instanceOfBankTransferListResponse(value: object): boolean {
    if (!('bank_transfers' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function BankTransferListResponseFromJSON(json: any): BankTransferListResponse {
    return BankTransferListResponseFromJSONTyped(json, false);
}

export function BankTransferListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankTransferListResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'bank_transfers': ((json['bank_transfers'] as Array<any>).map(BankTransferFromJSON)),
        'request_id': json['request_id'],
    };
}

export function BankTransferListResponseToJSON(value?: BankTransferListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'bank_transfers': ((value['bank_transfers'] as Array<any>).map(BankTransferToJSON)),
        'request_id': value['request_id'],
    };
}

