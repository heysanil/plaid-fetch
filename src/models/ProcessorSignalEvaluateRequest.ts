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
import type { SignalDevice } from './SignalDevice';
import {
    SignalDeviceFromJSON,
    SignalDeviceFromJSONTyped,
    SignalDeviceToJSON,
} from './SignalDevice';
import type { SignalUser } from './SignalUser';
import {
    SignalUserFromJSON,
    SignalUserFromJSONTyped,
    SignalUserToJSON,
} from './SignalUser';

/**
 * ProcessorSignalEvaluateRequest defines the request schema for `/processor/signal/evaluate`
 * @export
 * @interface ProcessorSignalEvaluateRequest
 */
export interface ProcessorSignalEvaluateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof ProcessorSignalEvaluateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof ProcessorSignalEvaluateRequest
     */
    secret?: string;
    /**
     * The processor token obtained from the Plaid integration partner. Processor tokens are in the format: `processor-<environment>-<identifier>`
     * @type {string}
     * @memberof ProcessorSignalEvaluateRequest
     */
    processor_token: string;
    /**
     * The unique ID that you would like to use to refer to this transaction. For your convenience mapping your internal data, you could use your internal ID/identifier for this transaction. The max length for this field is 36 characters.
     * @type {string}
     * @memberof ProcessorSignalEvaluateRequest
     */
    client_transaction_id: string;
    /**
     * The transaction amount, in USD (e.g. `102.05`)
     * @type {number}
     * @memberof ProcessorSignalEvaluateRequest
     */
    amount: number;
    /**
     * `true` if the end user is present while initiating the ACH transfer and the endpoint is being called; `false` otherwise (for example, when the ACH transfer is scheduled and the end user is not present, or you call this endpoint after the ACH transfer but before submitting the Nacha file for ACH processing).
     * @type {boolean}
     * @memberof ProcessorSignalEvaluateRequest
     */
    user_present?: boolean;
    /**
     * A unique ID that identifies the end user in your system. This ID is used to correlate requests by a user with multiple Items. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`.
     * @type {string}
     * @memberof ProcessorSignalEvaluateRequest
     */
    client_user_id?: string;
    /**
     * **true** if the ACH transaction is a recurring transaction; **false** otherwise 
     * @type {boolean}
     * @memberof ProcessorSignalEvaluateRequest
     */
    is_recurring?: boolean;
    /**
     * The default ACH or non-ACH payment method to complete the transaction.
     * `SAME_DAY_ACH`: Same Day ACH by NACHA. The debit transaction is processed and settled on the same day
     * `NEXT_DAY_ACH`: Next Day ACH settlement for debit transactions, offered by some payment processors
     * `STANDARD_ACH`: standard ACH by NACHA
     * `REAL_TIME_PAYMENTS`: real-time payments such as RTP and FedNow
     * `DEBIT_CARD`: if the default payment is over debit card networks
     * `MULTIPLE_PAYMENT_METHODS`: if there is no default debit rail or there are multiple payment methods
     * Possible values:  `SAME_DAY_ACH`, `NEXT_DAY_ACH`, `STANDARD_ACH`, `REAL_TIME_PAYMENTS`, `DEBIT_CARD`, `MULTIPLE_PAYMENT_METHODS`
     * @type {string}
     * @memberof ProcessorSignalEvaluateRequest
     */
    default_payment_method?: string;
    /**
     * 
     * @type {SignalUser}
     * @memberof ProcessorSignalEvaluateRequest
     */
    user?: SignalUser;
    /**
     * 
     * @type {SignalDevice}
     * @memberof ProcessorSignalEvaluateRequest
     */
    device?: SignalDevice;
}

/**
 * Check if a given object implements the ProcessorSignalEvaluateRequest interface.
 */
export function instanceOfProcessorSignalEvaluateRequest(value: object): boolean {
    if (!('processor_token' in value)) return false;
    if (!('client_transaction_id' in value)) return false;
    if (!('amount' in value)) return false;
    return true;
}

export function ProcessorSignalEvaluateRequestFromJSON(json: any): ProcessorSignalEvaluateRequest {
    return ProcessorSignalEvaluateRequestFromJSONTyped(json, false);
}

export function ProcessorSignalEvaluateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorSignalEvaluateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'processor_token': json['processor_token'],
        'client_transaction_id': json['client_transaction_id'],
        'amount': json['amount'],
        'user_present': json['user_present'] == null ? undefined : json['user_present'],
        'client_user_id': json['client_user_id'] == null ? undefined : json['client_user_id'],
        'is_recurring': json['is_recurring'] == null ? undefined : json['is_recurring'],
        'default_payment_method': json['default_payment_method'] == null ? undefined : json['default_payment_method'],
        'user': json['user'] == null ? undefined : SignalUserFromJSON(json['user']),
        'device': json['device'] == null ? undefined : SignalDeviceFromJSON(json['device']),
    };
}

export function ProcessorSignalEvaluateRequestToJSON(value?: ProcessorSignalEvaluateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'processor_token': value['processor_token'],
        'client_transaction_id': value['client_transaction_id'],
        'amount': value['amount'],
        'user_present': value['user_present'],
        'client_user_id': value['client_user_id'],
        'is_recurring': value['is_recurring'],
        'default_payment_method': value['default_payment_method'],
        'user': SignalUserToJSON(value['user']),
        'device': SignalDeviceToJSON(value['device']),
    };
}

