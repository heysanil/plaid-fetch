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
 * Defines the response schema for `/sandbox/transfer/ledger/simulate_available`
 * @export
 * @interface SandboxTransferLedgerSimulateAvailableResponse
 */
export interface SandboxTransferLedgerSimulateAvailableResponse {
    [key: string]: any | any;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof SandboxTransferLedgerSimulateAvailableResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the SandboxTransferLedgerSimulateAvailableResponse interface.
 */
export function instanceOfSandboxTransferLedgerSimulateAvailableResponse(value: object): boolean {
    if (!('request_id' in value)) return false;
    return true;
}

export function SandboxTransferLedgerSimulateAvailableResponseFromJSON(json: any): SandboxTransferLedgerSimulateAvailableResponse {
    return SandboxTransferLedgerSimulateAvailableResponseFromJSONTyped(json, false);
}

export function SandboxTransferLedgerSimulateAvailableResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTransferLedgerSimulateAvailableResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'request_id': json['request_id'],
    };
}

export function SandboxTransferLedgerSimulateAvailableResponseToJSON(value?: SandboxTransferLedgerSimulateAvailableResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'request_id': value['request_id'],
    };
}

