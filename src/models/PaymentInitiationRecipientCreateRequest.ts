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
import type { PaymentInitiationAddress } from './PaymentInitiationAddress';
import {
    PaymentInitiationAddressFromJSON,
    PaymentInitiationAddressFromJSONTyped,
    PaymentInitiationAddressToJSON,
} from './PaymentInitiationAddress';
import type { RecipientBACSNullable } from './RecipientBACSNullable';
import {
    RecipientBACSNullableFromJSON,
    RecipientBACSNullableFromJSONTyped,
    RecipientBACSNullableToJSON,
} from './RecipientBACSNullable';

/**
 * PaymentInitiationRecipientCreateRequest defines the request schema for `/payment_initiation/recipient/create`
 * @export
 * @interface PaymentInitiationRecipientCreateRequest
 */
export interface PaymentInitiationRecipientCreateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof PaymentInitiationRecipientCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof PaymentInitiationRecipientCreateRequest
     */
    secret?: string;
    /**
     * The name of the recipient. We recommend using strings of length 18 or less and avoid special characters to ensure compatibility with all institutions.
     * @type {string}
     * @memberof PaymentInitiationRecipientCreateRequest
     */
    name: string;
    /**
     * The International Bank Account Number (IBAN) for the recipient. If BACS data is not provided, an IBAN is required.
     * @type {string}
     * @memberof PaymentInitiationRecipientCreateRequest
     */
    iban?: string;
    /**
     * 
     * @type {RecipientBACSNullable}
     * @memberof PaymentInitiationRecipientCreateRequest
     */
    bacs?: RecipientBACSNullable;
    /**
     * 
     * @type {PaymentInitiationAddress}
     * @memberof PaymentInitiationRecipientCreateRequest
     */
    address?: PaymentInitiationAddress;
}

/**
 * Check if a given object implements the PaymentInitiationRecipientCreateRequest interface.
 */
export function instanceOfPaymentInitiationRecipientCreateRequest(value: object): boolean {
    if (!('name' in value)) return false;
    return true;
}

export function PaymentInitiationRecipientCreateRequestFromJSON(json: any): PaymentInitiationRecipientCreateRequest {
    return PaymentInitiationRecipientCreateRequestFromJSONTyped(json, false);
}

export function PaymentInitiationRecipientCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentInitiationRecipientCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'name': json['name'],
        'iban': json['iban'] == null ? undefined : json['iban'],
        'bacs': json['bacs'] == null ? undefined : RecipientBACSNullableFromJSON(json['bacs']),
        'address': json['address'] == null ? undefined : PaymentInitiationAddressFromJSON(json['address']),
    };
}

export function PaymentInitiationRecipientCreateRequestToJSON(value?: PaymentInitiationRecipientCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'name': value['name'],
        'iban': value['iban'],
        'bacs': RecipientBACSNullableToJSON(value['bacs']),
        'address': PaymentInitiationAddressToJSON(value['address']),
    };
}

