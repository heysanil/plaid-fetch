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
import type { WalletTransactionStatus } from './WalletTransactionStatus';
import {
    WalletTransactionStatusFromJSON,
    WalletTransactionStatusFromJSONTyped,
    WalletTransactionStatusToJSON,
} from './WalletTransactionStatus';

/**
 * WalletTransactionExecuteResponse defines the response schema for `/wallet/transaction/execute`
 * @export
 * @interface WalletTransactionExecuteResponse
 */
export interface WalletTransactionExecuteResponse {
    [key: string]: any | any;
    /**
     * A unique ID identifying the transaction
     * @type {string}
     * @memberof WalletTransactionExecuteResponse
     */
    transaction_id: string;
    /**
     * 
     * @type {WalletTransactionStatus}
     * @memberof WalletTransactionExecuteResponse
     */
    status: WalletTransactionStatus;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof WalletTransactionExecuteResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the WalletTransactionExecuteResponse interface.
 */
export function instanceOfWalletTransactionExecuteResponse(value: object): boolean {
    if (!('transaction_id' in value)) return false;
    if (!('status' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function WalletTransactionExecuteResponseFromJSON(json: any): WalletTransactionExecuteResponse {
    return WalletTransactionExecuteResponseFromJSONTyped(json, false);
}

export function WalletTransactionExecuteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalletTransactionExecuteResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'transaction_id': json['transaction_id'],
        'status': WalletTransactionStatusFromJSON(json['status']),
        'request_id': json['request_id'],
    };
}

export function WalletTransactionExecuteResponseToJSON(value?: WalletTransactionExecuteResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'transaction_id': value['transaction_id'],
        'status': WalletTransactionStatusToJSON(value['status']),
        'request_id': value['request_id'],
    };
}
