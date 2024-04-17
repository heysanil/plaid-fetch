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
 * Defines the response schema for `/transfer/ledger/distribute`
 * @export
 * @interface TransferLedgerDistributeResponse
 */
export interface TransferLedgerDistributeResponse {
    [key: string]: any | any;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof TransferLedgerDistributeResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the TransferLedgerDistributeResponse interface.
 */
export function instanceOfTransferLedgerDistributeResponse(value: object): boolean {
    if (!('request_id' in value)) return false;
    return true;
}

export function TransferLedgerDistributeResponseFromJSON(json: any): TransferLedgerDistributeResponse {
    return TransferLedgerDistributeResponseFromJSONTyped(json, false);
}

export function TransferLedgerDistributeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferLedgerDistributeResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'request_id': json['request_id'],
    };
}

export function TransferLedgerDistributeResponseToJSON(value?: TransferLedgerDistributeResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'request_id': value['request_id'],
    };
}
