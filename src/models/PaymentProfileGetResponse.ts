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
import type { PaymentProfileStatus } from './PaymentProfileStatus';
import {
    PaymentProfileStatusFromJSON,
    PaymentProfileStatusFromJSONTyped,
    PaymentProfileStatusToJSON,
} from './PaymentProfileStatus';

/**
 * PaymentProfileGetResponse defines the response schema for `/payment_profile/get`
 * @export
 * @interface PaymentProfileGetResponse
 */
export interface PaymentProfileGetResponse {
    [key: string]: any | any;
    /**
     * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:mm:ssZ`) indicating the last time the given Payment Profile was updated at
     * @type {Date}
     * @memberof PaymentProfileGetResponse
     */
    updated_at: Date;
    /**
     * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:mm:ssZ`) indicating the time the given Payment Profile was created at
     * @type {Date}
     * @memberof PaymentProfileGetResponse
     */
    created_at: Date;
    /**
     * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:mm:ssZ`) indicating the time the given Payment Profile was deleted at. Always `null` if the Payment Profile has not been deleted
     * @type {Date}
     * @memberof PaymentProfileGetResponse
     */
    deleted_at: Date | null;
    /**
     * 
     * @type {PaymentProfileStatus}
     * @memberof PaymentProfileGetResponse
     */
    status: PaymentProfileStatus;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof PaymentProfileGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the PaymentProfileGetResponse interface.
 */
export function instanceOfPaymentProfileGetResponse(value: object): boolean {
    if (!('updated_at' in value)) return false;
    if (!('created_at' in value)) return false;
    if (!('deleted_at' in value)) return false;
    if (!('status' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function PaymentProfileGetResponseFromJSON(json: any): PaymentProfileGetResponse {
    return PaymentProfileGetResponseFromJSONTyped(json, false);
}

export function PaymentProfileGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentProfileGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'updated_at': (new Date(json['updated_at'])),
        'created_at': (new Date(json['created_at'])),
        'deleted_at': (json['deleted_at'] == null ? null : new Date(json['deleted_at'])),
        'status': PaymentProfileStatusFromJSON(json['status']),
        'request_id': json['request_id'],
    };
}

export function PaymentProfileGetResponseToJSON(value?: PaymentProfileGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'updated_at': ((value['updated_at']).toISOString()),
        'created_at': ((value['created_at']).toISOString()),
        'deleted_at': (value['deleted_at'] == null ? null : (value['deleted_at'] as any).toISOString()),
        'status': PaymentProfileStatusToJSON(value['status']),
        'request_id': value['request_id'],
    };
}
