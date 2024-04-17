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
import type { SandboxPublicTokenCreateRequestOptionsIncomeVerification } from './SandboxPublicTokenCreateRequestOptionsIncomeVerification';
import {
    SandboxPublicTokenCreateRequestOptionsIncomeVerificationFromJSON,
    SandboxPublicTokenCreateRequestOptionsIncomeVerificationFromJSONTyped,
    SandboxPublicTokenCreateRequestOptionsIncomeVerificationToJSON,
} from './SandboxPublicTokenCreateRequestOptionsIncomeVerification';
import type { SandboxPublicTokenCreateRequestOptionsTransactions } from './SandboxPublicTokenCreateRequestOptionsTransactions';
import {
    SandboxPublicTokenCreateRequestOptionsTransactionsFromJSON,
    SandboxPublicTokenCreateRequestOptionsTransactionsFromJSONTyped,
    SandboxPublicTokenCreateRequestOptionsTransactionsToJSON,
} from './SandboxPublicTokenCreateRequestOptionsTransactions';

/**
 * An optional set of options to be used when configuring the Item. If specified, must not be `null`.
 * @export
 * @interface SandboxPublicTokenCreateRequestOptions
 */
export interface SandboxPublicTokenCreateRequestOptions {
    /**
     * Specify a webhook to associate with the new Item.
     * @type {string}
     * @memberof SandboxPublicTokenCreateRequestOptions
     */
    webhook?: string;
    /**
     * Test username to use for the creation of the Sandbox Item. Default value is `user_good`.
     * @type {string}
     * @memberof SandboxPublicTokenCreateRequestOptions
     */
    override_username?: string;
    /**
     * Test password to use for the creation of the Sandbox Item. Default value is `pass_good`.
     * @type {string}
     * @memberof SandboxPublicTokenCreateRequestOptions
     */
    override_password?: string;
    /**
     * 
     * @type {SandboxPublicTokenCreateRequestOptionsTransactions}
     * @memberof SandboxPublicTokenCreateRequestOptions
     */
    transactions?: SandboxPublicTokenCreateRequestOptionsTransactions;
    /**
     * 
     * @type {SandboxPublicTokenCreateRequestOptionsIncomeVerification}
     * @memberof SandboxPublicTokenCreateRequestOptions
     */
    income_verification?: SandboxPublicTokenCreateRequestOptionsIncomeVerification;
}

/**
 * Check if a given object implements the SandboxPublicTokenCreateRequestOptions interface.
 */
export function instanceOfSandboxPublicTokenCreateRequestOptions(value: object): boolean {
    return true;
}

export function SandboxPublicTokenCreateRequestOptionsFromJSON(json: any): SandboxPublicTokenCreateRequestOptions {
    return SandboxPublicTokenCreateRequestOptionsFromJSONTyped(json, false);
}

export function SandboxPublicTokenCreateRequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxPublicTokenCreateRequestOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'webhook': json['webhook'] == null ? undefined : json['webhook'],
        'override_username': json['override_username'] == null ? undefined : json['override_username'],
        'override_password': json['override_password'] == null ? undefined : json['override_password'],
        'transactions': json['transactions'] == null ? undefined : SandboxPublicTokenCreateRequestOptionsTransactionsFromJSON(json['transactions']),
        'income_verification': json['income_verification'] == null ? undefined : SandboxPublicTokenCreateRequestOptionsIncomeVerificationFromJSON(json['income_verification']),
    };
}

export function SandboxPublicTokenCreateRequestOptionsToJSON(value?: SandboxPublicTokenCreateRequestOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'webhook': value['webhook'],
        'override_username': value['override_username'],
        'override_password': value['override_password'],
        'transactions': SandboxPublicTokenCreateRequestOptionsTransactionsToJSON(value['transactions']),
        'income_verification': SandboxPublicTokenCreateRequestOptionsIncomeVerificationToJSON(value['income_verification']),
    };
}
