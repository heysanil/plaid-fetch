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
 * Maximum amount of a single payment initiated using the payment consent.
 * @export
 * @interface PaymentConsentMaxPaymentAmount
 */
export interface PaymentConsentMaxPaymentAmount {
    /**
     * 
     * @type {PaymentAmountCurrency}
     * @memberof PaymentConsentMaxPaymentAmount
     */
    currency: PaymentAmountCurrency;
    /**
     * The amount of the payment. Must contain at most two digits of precision e.g. `1.23`. Minimum accepted value is `1`.
     * @type {number}
     * @memberof PaymentConsentMaxPaymentAmount
     */
    value: number;
}

/**
 * Check if a given object implements the PaymentConsentMaxPaymentAmount interface.
 */
export function instanceOfPaymentConsentMaxPaymentAmount(value: object): boolean {
    if (!('currency' in value)) return false;
    if (!('value' in value)) return false;
    return true;
}

export function PaymentConsentMaxPaymentAmountFromJSON(json: any): PaymentConsentMaxPaymentAmount {
    return PaymentConsentMaxPaymentAmountFromJSONTyped(json, false);
}

export function PaymentConsentMaxPaymentAmountFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentConsentMaxPaymentAmount {
    if (json == null) {
        return json;
    }
    return {
        
        'currency': PaymentAmountCurrencyFromJSON(json['currency']),
        'value': json['value'],
    };
}

export function PaymentConsentMaxPaymentAmountToJSON(value?: PaymentConsentMaxPaymentAmount | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'currency': PaymentAmountCurrencyToJSON(value['currency']),
        'value': value['value'],
    };
}
