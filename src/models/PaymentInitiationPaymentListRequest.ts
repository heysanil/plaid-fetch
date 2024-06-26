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
 * PaymentInitiationPaymentListRequest defines the request schema for `/payment_initiation/payment/list`
 * @export
 * @interface PaymentInitiationPaymentListRequest
 */
export interface PaymentInitiationPaymentListRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof PaymentInitiationPaymentListRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof PaymentInitiationPaymentListRequest
     */
    secret?: string;
    /**
     * The maximum number of payments to return. If `count` is not specified, a maximum of 10 payments will be returned, beginning with the most recent payment before the cursor (if specified).
     * @type {number}
     * @memberof PaymentInitiationPaymentListRequest
     */
    count?: number;
    /**
     * A string in RFC 3339 format (i.e. "2019-12-06T22:35:49Z"). Only payments created before the cursor will be returned.
     * @type {Date}
     * @memberof PaymentInitiationPaymentListRequest
     */
    cursor?: Date;
    /**
     * The consent ID. If specified, only payments, executed using this consent, will be returned.
     * @type {string}
     * @memberof PaymentInitiationPaymentListRequest
     */
    consent_id?: string;
}

/**
 * Check if a given object implements the PaymentInitiationPaymentListRequest interface.
 */
export function instanceOfPaymentInitiationPaymentListRequest(value: object): boolean {
    return true;
}

export function PaymentInitiationPaymentListRequestFromJSON(json: any): PaymentInitiationPaymentListRequest {
    return PaymentInitiationPaymentListRequestFromJSONTyped(json, false);
}

export function PaymentInitiationPaymentListRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentInitiationPaymentListRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'count': json['count'] == null ? undefined : json['count'],
        'cursor': json['cursor'] == null ? undefined : (new Date(json['cursor'])),
        'consent_id': json['consent_id'] == null ? undefined : json['consent_id'],
    };
}

export function PaymentInitiationPaymentListRequestToJSON(value?: PaymentInitiationPaymentListRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'count': value['count'],
        'cursor': value['cursor'] == null ? undefined : ((value['cursor'] as any).toISOString()),
        'consent_id': value['consent_id'],
    };
}

