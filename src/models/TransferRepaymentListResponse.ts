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
import type { TransferRepayment } from './TransferRepayment';
import {
    TransferRepaymentFromJSON,
    TransferRepaymentFromJSONTyped,
    TransferRepaymentToJSON,
} from './TransferRepayment';

/**
 * Defines the response schema for `/transfer/repayments/list`
 * @export
 * @interface TransferRepaymentListResponse
 */
export interface TransferRepaymentListResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {Array<TransferRepayment>}
     * @memberof TransferRepaymentListResponse
     */
    repayments: Array<TransferRepayment>;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof TransferRepaymentListResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the TransferRepaymentListResponse interface.
 */
export function instanceOfTransferRepaymentListResponse(value: object): boolean {
    if (!('repayments' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function TransferRepaymentListResponseFromJSON(json: any): TransferRepaymentListResponse {
    return TransferRepaymentListResponseFromJSONTyped(json, false);
}

export function TransferRepaymentListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferRepaymentListResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'repayments': ((json['repayments'] as Array<any>).map(TransferRepaymentFromJSON)),
        'request_id': json['request_id'],
    };
}

export function TransferRepaymentListResponseToJSON(value?: TransferRepaymentListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'repayments': ((value['repayments'] as Array<any>).map(TransferRepaymentToJSON)),
        'request_id': value['request_id'],
    };
}

