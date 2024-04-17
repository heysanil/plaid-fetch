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
 * ProcessorAccountGetRequest defines the request schema for `/processor/account/get`
 * @export
 * @interface ProcessorAccountGetRequest
 */
export interface ProcessorAccountGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof ProcessorAccountGetRequest
     */
    client_id?: string;
    /**
     * The processor token obtained from the Plaid integration partner. Processor tokens are in the format: `processor-<environment>-<identifier>`
     * @type {string}
     * @memberof ProcessorAccountGetRequest
     */
    processor_token: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof ProcessorAccountGetRequest
     */
    secret?: string;
}

/**
 * Check if a given object implements the ProcessorAccountGetRequest interface.
 */
export function instanceOfProcessorAccountGetRequest(value: object): boolean {
    if (!('processor_token' in value)) return false;
    return true;
}

export function ProcessorAccountGetRequestFromJSON(json: any): ProcessorAccountGetRequest {
    return ProcessorAccountGetRequestFromJSONTyped(json, false);
}

export function ProcessorAccountGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorAccountGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'processor_token': json['processor_token'],
        'secret': json['secret'] == null ? undefined : json['secret'],
    };
}

export function ProcessorAccountGetRequestToJSON(value?: ProcessorAccountGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'processor_token': value['processor_token'],
        'secret': value['secret'],
    };
}
