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
 * Information specific to wire transfers.
 * @export
 * @interface TransferWireDetails
 */
export interface TransferWireDetails {
    /**
     * Additional information from the wire originator to the beneficiary. Max 140 characters.
     * @type {string}
     * @memberof TransferWireDetails
     */
    message_to_beneficiary?: string;
}

/**
 * Check if a given object implements the TransferWireDetails interface.
 */
export function instanceOfTransferWireDetails(value: object): boolean {
    return true;
}

export function TransferWireDetailsFromJSON(json: any): TransferWireDetails {
    return TransferWireDetailsFromJSONTyped(json, false);
}

export function TransferWireDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferWireDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'message_to_beneficiary': json['message_to_beneficiary'] == null ? undefined : json['message_to_beneficiary'],
    };
}

export function TransferWireDetailsToJSON(value?: TransferWireDetails | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message_to_beneficiary': value['message_to_beneficiary'],
    };
}

