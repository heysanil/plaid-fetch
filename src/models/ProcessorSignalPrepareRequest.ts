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
 * ProcessorSignalPrepareRequest defines the request schema for `/processor/signal/prepare`
 * @export
 * @interface ProcessorSignalPrepareRequest
 */
export interface ProcessorSignalPrepareRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof ProcessorSignalPrepareRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof ProcessorSignalPrepareRequest
     */
    secret?: string;
    /**
     * The processor token obtained from the Plaid integration partner. Processor tokens are in the format: `processor-<environment>-<identifier>`
     * @type {string}
     * @memberof ProcessorSignalPrepareRequest
     */
    processor_token: string;
}

/**
 * Check if a given object implements the ProcessorSignalPrepareRequest interface.
 */
export function instanceOfProcessorSignalPrepareRequest(value: object): boolean {
    if (!('processor_token' in value)) return false;
    return true;
}

export function ProcessorSignalPrepareRequestFromJSON(json: any): ProcessorSignalPrepareRequest {
    return ProcessorSignalPrepareRequestFromJSONTyped(json, false);
}

export function ProcessorSignalPrepareRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorSignalPrepareRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'processor_token': json['processor_token'],
    };
}

export function ProcessorSignalPrepareRequestToJSON(value?: ProcessorSignalPrepareRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'processor_token': value['processor_token'],
    };
}

