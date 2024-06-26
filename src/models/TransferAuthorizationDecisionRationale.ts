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
import type { TransferAuthorizationDecisionRationaleCode } from './TransferAuthorizationDecisionRationaleCode';
import {
    TransferAuthorizationDecisionRationaleCodeFromJSON,
    TransferAuthorizationDecisionRationaleCodeFromJSONTyped,
    TransferAuthorizationDecisionRationaleCodeToJSON,
} from './TransferAuthorizationDecisionRationaleCode';

/**
 * The rationale for Plaid's decision regarding a proposed transfer. It is always set for `declined` decisions, and may or may not be null for `approved` decisions.
 * @export
 * @interface TransferAuthorizationDecisionRationale
 */
export interface TransferAuthorizationDecisionRationale {
    [key: string]: any | any;
    /**
     * 
     * @type {TransferAuthorizationDecisionRationaleCode}
     * @memberof TransferAuthorizationDecisionRationale
     */
    code: TransferAuthorizationDecisionRationaleCode;
    /**
     * A human-readable description of the code associated with a transfer approval or transfer decline.
     * @type {string}
     * @memberof TransferAuthorizationDecisionRationale
     */
    description: string;
}

/**
 * Check if a given object implements the TransferAuthorizationDecisionRationale interface.
 */
export function instanceOfTransferAuthorizationDecisionRationale(value: object): boolean {
    if (!('code' in value)) return false;
    if (!('description' in value)) return false;
    return true;
}

export function TransferAuthorizationDecisionRationaleFromJSON(json: any): TransferAuthorizationDecisionRationale {
    return TransferAuthorizationDecisionRationaleFromJSONTyped(json, false);
}

export function TransferAuthorizationDecisionRationaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferAuthorizationDecisionRationale {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'code': TransferAuthorizationDecisionRationaleCodeFromJSON(json['code']),
        'description': json['description'],
    };
}

export function TransferAuthorizationDecisionRationaleToJSON(value?: TransferAuthorizationDecisionRationale | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'code': TransferAuthorizationDecisionRationaleCodeToJSON(value['code']),
        'description': value['description'],
    };
}

