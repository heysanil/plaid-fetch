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
import type { PaymentInitiationPayment } from './PaymentInitiationPayment';
import {
    PaymentInitiationPaymentFromJSON,
    PaymentInitiationPaymentFromJSONTyped,
    PaymentInitiationPaymentToJSON,
} from './PaymentInitiationPayment';

/**
 * PaymentInitiationPaymentListResponse defines the response schema for `/payment_initiation/payment/list`
 * @export
 * @interface PaymentInitiationPaymentListResponse
 */
export interface PaymentInitiationPaymentListResponse {
    [key: string]: any | any;
    /**
     * An array of payments that have been created, associated with the given `client_id`.
     * @type {Array<PaymentInitiationPayment>}
     * @memberof PaymentInitiationPaymentListResponse
     */
    payments: Array<PaymentInitiationPayment>;
    /**
     * The value that, when used as the optional `cursor` parameter to `/payment_initiation/payment/list`, will return the next unreturned payment as its first payment.
     * @type {Date}
     * @memberof PaymentInitiationPaymentListResponse
     */
    next_cursor: Date | null;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof PaymentInitiationPaymentListResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the PaymentInitiationPaymentListResponse interface.
 */
export function instanceOfPaymentInitiationPaymentListResponse(value: object): boolean {
    if (!('payments' in value)) return false;
    if (!('next_cursor' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function PaymentInitiationPaymentListResponseFromJSON(json: any): PaymentInitiationPaymentListResponse {
    return PaymentInitiationPaymentListResponseFromJSONTyped(json, false);
}

export function PaymentInitiationPaymentListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentInitiationPaymentListResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'payments': ((json['payments'] as Array<any>).map(PaymentInitiationPaymentFromJSON)),
        'next_cursor': (json['next_cursor'] == null ? null : new Date(json['next_cursor'])),
        'request_id': json['request_id'],
    };
}

export function PaymentInitiationPaymentListResponseToJSON(value?: PaymentInitiationPaymentListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'payments': ((value['payments'] as Array<any>).map(PaymentInitiationPaymentToJSON)),
        'next_cursor': (value['next_cursor'] == null ? null : (value['next_cursor'] as any).toISOString()),
        'request_id': value['request_id'],
    };
}
