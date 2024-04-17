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
import type { AccountBase } from './AccountBase';
import {
    AccountBaseFromJSON,
    AccountBaseFromJSONTyped,
    AccountBaseToJSON,
} from './AccountBase';
import type { ProcessorNumber } from './ProcessorNumber';
import {
    ProcessorNumberFromJSON,
    ProcessorNumberFromJSONTyped,
    ProcessorNumberToJSON,
} from './ProcessorNumber';

/**
 * ProcessorAuthGetResponse defines the response schema for `/processor/auth/get`
 * @export
 * @interface ProcessorAuthGetResponse
 */
export interface ProcessorAuthGetResponse {
    [key: string]: any | any;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof ProcessorAuthGetResponse
     */
    request_id: string;
    /**
     * 
     * @type {ProcessorNumber}
     * @memberof ProcessorAuthGetResponse
     */
    numbers: ProcessorNumber;
    /**
     * 
     * @type {AccountBase}
     * @memberof ProcessorAuthGetResponse
     */
    account: AccountBase;
}

/**
 * Check if a given object implements the ProcessorAuthGetResponse interface.
 */
export function instanceOfProcessorAuthGetResponse(value: object): boolean {
    if (!('request_id' in value)) return false;
    if (!('numbers' in value)) return false;
    if (!('account' in value)) return false;
    return true;
}

export function ProcessorAuthGetResponseFromJSON(json: any): ProcessorAuthGetResponse {
    return ProcessorAuthGetResponseFromJSONTyped(json, false);
}

export function ProcessorAuthGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorAuthGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'request_id': json['request_id'],
        'numbers': ProcessorNumberFromJSON(json['numbers']),
        'account': AccountBaseFromJSON(json['account']),
    };
}

export function ProcessorAuthGetResponseToJSON(value?: ProcessorAuthGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'request_id': value['request_id'],
        'numbers': ProcessorNumberToJSON(value['numbers']),
        'account': AccountBaseToJSON(value['account']),
    };
}
