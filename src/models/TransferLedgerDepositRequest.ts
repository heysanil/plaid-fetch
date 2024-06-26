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
import type { TransferACHNetwork } from './TransferACHNetwork';
import {
    TransferACHNetworkFromJSON,
    TransferACHNetworkFromJSONTyped,
    TransferACHNetworkToJSON,
} from './TransferACHNetwork';

/**
 * Defines the request schema for `/transfer/ledger/deposit`
 * @export
 * @interface TransferLedgerDepositRequest
 */
export interface TransferLedgerDepositRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof TransferLedgerDepositRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof TransferLedgerDepositRequest
     */
    secret?: string;
    /**
     * Client ID of the customer that owns the Ledger balance. This is so Plaid knows which of your customers to payout or collect funds. Only applicable for [Platform customers](https://plaid.com/docs/transfer/application/#originators-vs-platforms). Do not include if you’re paying out to yourself.
     * @type {string}
     * @memberof TransferLedgerDepositRequest
     */
    originator_client_id?: string;
    /**
     * Specify which funding account linked to this Plaid Ledger to use. Customers can find a list of `funding_account_id`s in the Accounts page of your Plaid Dashboard, under the "Account ID" column. If this field is left blank, this will default to the default `funding_account_id` specified during onboarding. If an `originator_client_id` is specified, the `funding_account_id` must belong to the specified originator, and if `funding_account_id` is left blank, the originator's default `funding_account_id` will be used.
     * @type {string}
     * @memberof TransferLedgerDepositRequest
     */
    funding_account_id?: string;
    /**
     * A positive amount of how much will be deposited into ledger (decimal string with two digits of precision e.g. "5.50").
     * @type {string}
     * @memberof TransferLedgerDepositRequest
     */
    amount: string;
    /**
     * The description of the deposit that will be passed to the receiving bank (up to 10 characters). Note that banks utilize this field differently, and may or may not show it on the bank statement.
     * @type {string}
     * @memberof TransferLedgerDepositRequest
     */
    description?: string;
    /**
     * A unique key provided by the client, per unique ledger deposit. Maximum of 50 characters.
     * 
     * The API supports idempotency for safely retrying the request without accidentally performing the same operation twice. For example, if a request to create a ledger deposit fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single deposit is created.
     * @type {string}
     * @memberof TransferLedgerDepositRequest
     */
    idempotency_key: string;
    /**
     * 
     * @type {TransferACHNetwork}
     * @memberof TransferLedgerDepositRequest
     */
    network: TransferACHNetwork;
}

/**
 * Check if a given object implements the TransferLedgerDepositRequest interface.
 */
export function instanceOfTransferLedgerDepositRequest(value: object): boolean {
    if (!('amount' in value)) return false;
    if (!('idempotency_key' in value)) return false;
    if (!('network' in value)) return false;
    return true;
}

export function TransferLedgerDepositRequestFromJSON(json: any): TransferLedgerDepositRequest {
    return TransferLedgerDepositRequestFromJSONTyped(json, false);
}

export function TransferLedgerDepositRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferLedgerDepositRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'originator_client_id': json['originator_client_id'] == null ? undefined : json['originator_client_id'],
        'funding_account_id': json['funding_account_id'] == null ? undefined : json['funding_account_id'],
        'amount': json['amount'],
        'description': json['description'] == null ? undefined : json['description'],
        'idempotency_key': json['idempotency_key'],
        'network': TransferACHNetworkFromJSON(json['network']),
    };
}

export function TransferLedgerDepositRequestToJSON(value?: TransferLedgerDepositRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'originator_client_id': value['originator_client_id'],
        'funding_account_id': value['funding_account_id'],
        'amount': value['amount'],
        'description': value['description'],
        'idempotency_key': value['idempotency_key'],
        'network': TransferACHNetworkToJSON(value['network']),
    };
}

