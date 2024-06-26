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
import type { PaymentAmountCurrency } from './PaymentAmountCurrency';
import {
    PaymentAmountCurrencyFromJSON,
    PaymentAmountCurrencyFromJSONTyped,
    PaymentAmountCurrencyToJSON,
} from './PaymentAmountCurrency';

/**
 * The amount and currency of a payment
 * @export
 * @interface PaymentAmountNullable
 */
export interface PaymentAmountNullable {
    [key: string]: any | any;
    /**
     * 
     * @type {PaymentAmountCurrency}
     * @memberof PaymentAmountNullable
     */
    currency: PaymentAmountCurrency;
    /**
     * The amount of the payment. Must contain at most two digits of precision e.g. `1.23`.
     * @type {number}
     * @memberof PaymentAmountNullable
     */
    value: number;
}

/**
 * Check if a given object implements the PaymentAmountNullable interface.
 */
export function instanceOfPaymentAmountNullable(value: object): boolean {
    if (!('currency' in value)) return false;
    if (!('value' in value)) return false;
    return true;
}

export function PaymentAmountNullableFromJSON(json: any): PaymentAmountNullable {
    return PaymentAmountNullableFromJSONTyped(json, false);
}

export function PaymentAmountNullableFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAmountNullable {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'currency': PaymentAmountCurrencyFromJSON(json['currency']),
        'value': json['value'],
    };
}

export function PaymentAmountNullableToJSON(value?: PaymentAmountNullable | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'currency': PaymentAmountCurrencyToJSON(value['currency']),
        'value': value['value'],
    };
}

