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
import type { ACHClass } from './ACHClass';
import {
    ACHClassFromJSON,
    ACHClassFromJSONTyped,
    ACHClassToJSON,
} from './ACHClass';
import type { TransferACHNetwork } from './TransferACHNetwork';
import {
    TransferACHNetworkFromJSON,
    TransferACHNetworkFromJSONTyped,
    TransferACHNetworkToJSON,
} from './TransferACHNetwork';
import type { TransferDevice } from './TransferDevice';
import {
    TransferDeviceFromJSON,
    TransferDeviceFromJSONTyped,
    TransferDeviceToJSON,
} from './TransferDevice';
import type { TransferRecurringSchedule } from './TransferRecurringSchedule';
import {
    TransferRecurringScheduleFromJSON,
    TransferRecurringScheduleFromJSONTyped,
    TransferRecurringScheduleToJSON,
} from './TransferRecurringSchedule';
import type { TransferType } from './TransferType';
import {
    TransferTypeFromJSON,
    TransferTypeFromJSONTyped,
    TransferTypeToJSON,
} from './TransferType';
import type { TransferUserInRequest } from './TransferUserInRequest';
import {
    TransferUserInRequestFromJSON,
    TransferUserInRequestFromJSONTyped,
    TransferUserInRequestToJSON,
} from './TransferUserInRequest';

/**
 * Defines the request schema for `/transfer/recurring/create`
 * @export
 * @interface TransferRecurringCreateRequest
 */
export interface TransferRecurringCreateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof TransferRecurringCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof TransferRecurringCreateRequest
     */
    secret?: string;
    /**
     * The Plaid `access_token` for the account that will be debited or credited.
     * @type {string}
     * @memberof TransferRecurringCreateRequest
     */
    access_token: string;
    /**
     * A random key provided by the client, per unique recurring transfer. Maximum of 50 characters.
     * 
     * The API supports idempotency for safely retrying requests without accidentally performing the same operation twice. For example, if a request to create a recurring fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single recurring transfer is created.
     * @type {string}
     * @memberof TransferRecurringCreateRequest
     */
    idempotency_key: string;
    /**
     * The Plaid `account_id` corresponding to the end-user account that will be debited or credited.
     * @type {string}
     * @memberof TransferRecurringCreateRequest
     */
    account_id: string;
    /**
     * Specify the account used to fund the transfer. Customers can find a list of `funding_account_id`s in the Accounts page of your Plaid Dashboard, under the "Account ID" column. If this field is left blank, it will default to the default `funding_account_id` specified during onboarding.
     * @type {string}
     * @memberof TransferRecurringCreateRequest
     * @deprecated
     */
    funding_account_id?: string;
    /**
     * 
     * @type {TransferType}
     * @memberof TransferRecurringCreateRequest
     */
    type: TransferType;
    /**
     * 
     * @type {TransferACHNetwork}
     * @memberof TransferRecurringCreateRequest
     */
    network: TransferACHNetwork;
    /**
     * 
     * @type {ACHClass}
     * @memberof TransferRecurringCreateRequest
     */
    ach_class?: ACHClass;
    /**
     * The amount of the transfer (decimal string with two digits of precision e.g. "10.00"). When calling `/transfer/authorization/create`, specify the maximum amount to authorize. When calling `/transfer/create`, specify the exact amount of the transfer, up to a maximum of the amount authorized. If this field is left blank when calling `/transfer/create`, the maximum amount authorized in the `authorization_id` will be sent.
     * @type {string}
     * @memberof TransferRecurringCreateRequest
     */
    amount: string;
    /**
     * If the end user is initiating the specific transfer themselves via an interactive UI, this should be `true`; for automatic recurring payments where the end user is not actually initiating each individual transfer, it should be `false`.
     * @type {boolean}
     * @memberof TransferRecurringCreateRequest
     */
    user_present?: boolean;
    /**
     * The currency of the transfer amount. The default value is "USD".
     * @type {string}
     * @memberof TransferRecurringCreateRequest
     * @deprecated
     */
    iso_currency_code?: string;
    /**
     * The description of the recurring transfer.
     * @type {string}
     * @memberof TransferRecurringCreateRequest
     */
    description: string;
    /**
     * Plaid’s unique identifier for a test clock. This field may only be used when using `sandbox` environment. If provided, the created `recurring_transfer` is associated with the `test_clock`. New originations are automatically generated when the associated `test_clock` advances.
     * @type {string}
     * @memberof TransferRecurringCreateRequest
     */
    test_clock_id?: string;
    /**
     * 
     * @type {TransferRecurringSchedule}
     * @memberof TransferRecurringCreateRequest
     */
    schedule: TransferRecurringSchedule;
    /**
     * 
     * @type {TransferUserInRequest}
     * @memberof TransferRecurringCreateRequest
     */
    user: TransferUserInRequest;
    /**
     * 
     * @type {TransferDevice}
     * @memberof TransferRecurringCreateRequest
     */
    device?: TransferDevice;
}

/**
 * Check if a given object implements the TransferRecurringCreateRequest interface.
 */
export function instanceOfTransferRecurringCreateRequest(value: object): boolean {
    if (!('access_token' in value)) return false;
    if (!('idempotency_key' in value)) return false;
    if (!('account_id' in value)) return false;
    if (!('type' in value)) return false;
    if (!('network' in value)) return false;
    if (!('amount' in value)) return false;
    if (!('description' in value)) return false;
    if (!('schedule' in value)) return false;
    if (!('user' in value)) return false;
    return true;
}

export function TransferRecurringCreateRequestFromJSON(json: any): TransferRecurringCreateRequest {
    return TransferRecurringCreateRequestFromJSONTyped(json, false);
}

export function TransferRecurringCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferRecurringCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'access_token': json['access_token'],
        'idempotency_key': json['idempotency_key'],
        'account_id': json['account_id'],
        'funding_account_id': json['funding_account_id'] == null ? undefined : json['funding_account_id'],
        'type': TransferTypeFromJSON(json['type']),
        'network': TransferACHNetworkFromJSON(json['network']),
        'ach_class': json['ach_class'] == null ? undefined : ACHClassFromJSON(json['ach_class']),
        'amount': json['amount'],
        'user_present': json['user_present'] == null ? undefined : json['user_present'],
        'iso_currency_code': json['iso_currency_code'] == null ? undefined : json['iso_currency_code'],
        'description': json['description'],
        'test_clock_id': json['test_clock_id'] == null ? undefined : json['test_clock_id'],
        'schedule': TransferRecurringScheduleFromJSON(json['schedule']),
        'user': TransferUserInRequestFromJSON(json['user']),
        'device': json['device'] == null ? undefined : TransferDeviceFromJSON(json['device']),
    };
}

export function TransferRecurringCreateRequestToJSON(value?: TransferRecurringCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'access_token': value['access_token'],
        'idempotency_key': value['idempotency_key'],
        'account_id': value['account_id'],
        'funding_account_id': value['funding_account_id'],
        'type': TransferTypeToJSON(value['type']),
        'network': TransferACHNetworkToJSON(value['network']),
        'ach_class': ACHClassToJSON(value['ach_class']),
        'amount': value['amount'],
        'user_present': value['user_present'],
        'iso_currency_code': value['iso_currency_code'],
        'description': value['description'],
        'test_clock_id': value['test_clock_id'],
        'schedule': TransferRecurringScheduleToJSON(value['schedule']),
        'user': TransferUserInRequestToJSON(value['user']),
        'device': TransferDeviceToJSON(value['device']),
    };
}

