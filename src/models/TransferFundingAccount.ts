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
 * The originator's funding account, linked with Plaid Link or `/transfer/migrate_account`.
 * @export
 * @interface TransferFundingAccount
 */
export interface TransferFundingAccount {
    /**
     * The access token associated with the Item data is being requested for.
     * @type {string}
     * @memberof TransferFundingAccount
     */
    access_token: string;
    /**
     * The Plaid `account_id` for the newly created Item.
     * @type {string}
     * @memberof TransferFundingAccount
     */
    account_id: string;
}

/**
 * Check if a given object implements the TransferFundingAccount interface.
 */
export function instanceOfTransferFundingAccount(value: object): boolean {
    if (!('access_token' in value)) return false;
    if (!('account_id' in value)) return false;
    return true;
}

export function TransferFundingAccountFromJSON(json: any): TransferFundingAccount {
    return TransferFundingAccountFromJSONTyped(json, false);
}

export function TransferFundingAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferFundingAccount {
    if (json == null) {
        return json;
    }
    return {
        
        'access_token': json['access_token'],
        'account_id': json['account_id'],
    };
}

export function TransferFundingAccountToJSON(value?: TransferFundingAccount | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'access_token': value['access_token'],
        'account_id': value['account_id'],
    };
}
