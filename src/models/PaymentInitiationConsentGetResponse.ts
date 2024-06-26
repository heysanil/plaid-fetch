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
import type { PaymentInitiationConsentConstraints } from './PaymentInitiationConsentConstraints';
import {
    PaymentInitiationConsentConstraintsFromJSON,
    PaymentInitiationConsentConstraintsFromJSONTyped,
    PaymentInitiationConsentConstraintsToJSON,
} from './PaymentInitiationConsentConstraints';
import type { PaymentInitiationConsentScope } from './PaymentInitiationConsentScope';
import {
    PaymentInitiationConsentScopeFromJSON,
    PaymentInitiationConsentScopeFromJSONTyped,
    PaymentInitiationConsentScopeToJSON,
} from './PaymentInitiationConsentScope';
import type { PaymentInitiationConsentStatus } from './PaymentInitiationConsentStatus';
import {
    PaymentInitiationConsentStatusFromJSON,
    PaymentInitiationConsentStatusFromJSONTyped,
    PaymentInitiationConsentStatusToJSON,
} from './PaymentInitiationConsentStatus';

/**
 * PaymentInitiationConsentGetResponse defines the response schema for `/payment_initation/consent/get`
 * @export
 * @interface PaymentInitiationConsentGetResponse
 */
export interface PaymentInitiationConsentGetResponse {
    [key: string]: any | any;
    /**
     * The consent ID.
     * @type {string}
     * @memberof PaymentInitiationConsentGetResponse
     */
    consent_id: string;
    /**
     * 
     * @type {PaymentInitiationConsentStatus}
     * @memberof PaymentInitiationConsentGetResponse
     */
    status: PaymentInitiationConsentStatus;
    /**
     * Consent creation timestamp, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format.
     * @type {Date}
     * @memberof PaymentInitiationConsentGetResponse
     */
    created_at: Date;
    /**
     * The ID of the recipient the payment consent is for.
     * @type {string}
     * @memberof PaymentInitiationConsentGetResponse
     */
    recipient_id: string;
    /**
     * A reference for the payment consent.
     * @type {string}
     * @memberof PaymentInitiationConsentGetResponse
     */
    reference: string;
    /**
     * 
     * @type {PaymentInitiationConsentConstraints}
     * @memberof PaymentInitiationConsentGetResponse
     */
    constraints: PaymentInitiationConsentConstraints;
    /**
     * An array of payment consent scopes.
     * @type {Array<PaymentInitiationConsentScope>}
     * @memberof PaymentInitiationConsentGetResponse
     */
    scopes: Array<PaymentInitiationConsentScope>;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof PaymentInitiationConsentGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the PaymentInitiationConsentGetResponse interface.
 */
export function instanceOfPaymentInitiationConsentGetResponse(value: object): boolean {
    if (!('consent_id' in value)) return false;
    if (!('status' in value)) return false;
    if (!('created_at' in value)) return false;
    if (!('recipient_id' in value)) return false;
    if (!('reference' in value)) return false;
    if (!('constraints' in value)) return false;
    if (!('scopes' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function PaymentInitiationConsentGetResponseFromJSON(json: any): PaymentInitiationConsentGetResponse {
    return PaymentInitiationConsentGetResponseFromJSONTyped(json, false);
}

export function PaymentInitiationConsentGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentInitiationConsentGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'consent_id': json['consent_id'],
        'status': PaymentInitiationConsentStatusFromJSON(json['status']),
        'created_at': (new Date(json['created_at'])),
        'recipient_id': json['recipient_id'],
        'reference': json['reference'],
        'constraints': PaymentInitiationConsentConstraintsFromJSON(json['constraints']),
        'scopes': ((json['scopes'] as Array<any>).map(PaymentInitiationConsentScopeFromJSON)),
        'request_id': json['request_id'],
    };
}

export function PaymentInitiationConsentGetResponseToJSON(value?: PaymentInitiationConsentGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'consent_id': value['consent_id'],
        'status': PaymentInitiationConsentStatusToJSON(value['status']),
        'created_at': ((value['created_at']).toISOString()),
        'recipient_id': value['recipient_id'],
        'reference': value['reference'],
        'constraints': PaymentInitiationConsentConstraintsToJSON(value['constraints']),
        'scopes': ((value['scopes'] as Array<any>).map(PaymentInitiationConsentScopeToJSON)),
        'request_id': value['request_id'],
    };
}

