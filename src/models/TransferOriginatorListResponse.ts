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
import type { Originator } from './Originator';
import {
    OriginatorFromJSON,
    OriginatorFromJSONTyped,
    OriginatorToJSON,
} from './Originator';

/**
 * Defines the response schema for `/transfer/originator/list`
 * @export
 * @interface TransferOriginatorListResponse
 */
export interface TransferOriginatorListResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {Array<Originator>}
     * @memberof TransferOriginatorListResponse
     */
    originators: Array<Originator>;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof TransferOriginatorListResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the TransferOriginatorListResponse interface.
 */
export function instanceOfTransferOriginatorListResponse(value: object): boolean {
    if (!('originators' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function TransferOriginatorListResponseFromJSON(json: any): TransferOriginatorListResponse {
    return TransferOriginatorListResponseFromJSONTyped(json, false);
}

export function TransferOriginatorListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferOriginatorListResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'originators': ((json['originators'] as Array<any>).map(OriginatorFromJSON)),
        'request_id': json['request_id'],
    };
}

export function TransferOriginatorListResponseToJSON(value?: TransferOriginatorListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'originators': ((value['originators'] as Array<any>).map(OriginatorToJSON)),
        'request_id': value['request_id'],
    };
}
