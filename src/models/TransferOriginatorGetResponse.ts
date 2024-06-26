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
import type { DetailedOriginator } from './DetailedOriginator';
import {
    DetailedOriginatorFromJSON,
    DetailedOriginatorFromJSONTyped,
    DetailedOriginatorToJSON,
} from './DetailedOriginator';

/**
 * Defines the response schema for `/transfer/originator/get`
 * @export
 * @interface TransferOriginatorGetResponse
 */
export interface TransferOriginatorGetResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {DetailedOriginator}
     * @memberof TransferOriginatorGetResponse
     */
    originator: DetailedOriginator;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof TransferOriginatorGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the TransferOriginatorGetResponse interface.
 */
export function instanceOfTransferOriginatorGetResponse(value: object): boolean {
    if (!('originator' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function TransferOriginatorGetResponseFromJSON(json: any): TransferOriginatorGetResponse {
    return TransferOriginatorGetResponseFromJSONTyped(json, false);
}

export function TransferOriginatorGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferOriginatorGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'originator': DetailedOriginatorFromJSON(json['originator']),
        'request_id': json['request_id'],
    };
}

export function TransferOriginatorGetResponseToJSON(value?: TransferOriginatorGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'originator': DetailedOriginatorToJSON(value['originator']),
        'request_id': value['request_id'],
    };
}

