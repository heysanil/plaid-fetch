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
 * Contains the supported service types in RTP
 * @export
 * @interface TransferCapabilitiesGetRTP
 */
export interface TransferCapabilitiesGetRTP {
    [key: string]: any | any;
    /**
     * When `true`, the linked Item's institution supports RTP credit transfer.
     * @type {boolean}
     * @memberof TransferCapabilitiesGetRTP
     */
    credit?: boolean;
}

/**
 * Check if a given object implements the TransferCapabilitiesGetRTP interface.
 */
export function instanceOfTransferCapabilitiesGetRTP(value: object): boolean {
    return true;
}

export function TransferCapabilitiesGetRTPFromJSON(json: any): TransferCapabilitiesGetRTP {
    return TransferCapabilitiesGetRTPFromJSONTyped(json, false);
}

export function TransferCapabilitiesGetRTPFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferCapabilitiesGetRTP {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'credit': json['credit'] == null ? undefined : json['credit'],
    };
}

export function TransferCapabilitiesGetRTPToJSON(value?: TransferCapabilitiesGetRTP | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'credit': value['credit'],
    };
}
