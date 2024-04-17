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
 * @interface PaymentAmountRefunded
 */
export interface PaymentAmountRefunded {
    /**
     * 
     * @type {PaymentAmountCurrency}
     * @memberof PaymentAmountRefunded
     */
    currency: PaymentAmountCurrency;
    /**
     * The amount of the payment. Must contain at most two digits of precision e.g. `1.23`.
     * @type {number}
     * @memberof PaymentAmountRefunded
     */
    value: number;
}

/**
 * Check if a given object implements the PaymentAmountRefunded interface.
 */
export function instanceOfPaymentAmountRefunded(value: object): boolean {
    if (!('currency' in value)) return false;
    if (!('value' in value)) return false;
    return true;
}

export function PaymentAmountRefundedFromJSON(json: any): PaymentAmountRefunded {
    return PaymentAmountRefundedFromJSONTyped(json, false);
}

export function PaymentAmountRefundedFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAmountRefunded {
    if (json == null) {
        return json;
    }
    return {
        
        'currency': PaymentAmountCurrencyFromJSON(json['currency']),
        'value': json['value'],
    };
}

export function PaymentAmountRefundedToJSON(value?: PaymentAmountRefunded | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'currency': PaymentAmountCurrencyToJSON(value['currency']),
        'value': value['value'],
    };
}
