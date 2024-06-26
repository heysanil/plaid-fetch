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
import type { BankIncomeRefreshCompleteResult } from './BankIncomeRefreshCompleteResult';
import {
    BankIncomeRefreshCompleteResultFromJSON,
    BankIncomeRefreshCompleteResultFromJSONTyped,
    BankIncomeRefreshCompleteResultToJSON,
} from './BankIncomeRefreshCompleteResult';

/**
 * Optional fields which will be populated in the simulated webhook
 * @export
 * @interface SandboxBankIncomeWebhookFireRequestWebhookFields
 */
export interface SandboxBankIncomeWebhookFireRequestWebhookFields {
    /**
     * The user id to be returned in INCOME webhooks
     * @type {string}
     * @memberof SandboxBankIncomeWebhookFireRequestWebhookFields
     */
    user_id: string;
    /**
     * 
     * @type {BankIncomeRefreshCompleteResult}
     * @memberof SandboxBankIncomeWebhookFireRequestWebhookFields
     */
    bank_income_refresh_complete_result?: BankIncomeRefreshCompleteResult;
}

/**
 * Check if a given object implements the SandboxBankIncomeWebhookFireRequestWebhookFields interface.
 */
export function instanceOfSandboxBankIncomeWebhookFireRequestWebhookFields(value: object): boolean {
    if (!('user_id' in value)) return false;
    return true;
}

export function SandboxBankIncomeWebhookFireRequestWebhookFieldsFromJSON(json: any): SandboxBankIncomeWebhookFireRequestWebhookFields {
    return SandboxBankIncomeWebhookFireRequestWebhookFieldsFromJSONTyped(json, false);
}

export function SandboxBankIncomeWebhookFireRequestWebhookFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxBankIncomeWebhookFireRequestWebhookFields {
    if (json == null) {
        return json;
    }
    return {
        
        'user_id': json['user_id'],
        'bank_income_refresh_complete_result': json['bank_income_refresh_complete_result'] == null ? undefined : BankIncomeRefreshCompleteResultFromJSON(json['bank_income_refresh_complete_result']),
    };
}

export function SandboxBankIncomeWebhookFireRequestWebhookFieldsToJSON(value?: SandboxBankIncomeWebhookFireRequestWebhookFields | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'user_id': value['user_id'],
        'bank_income_refresh_complete_result': BankIncomeRefreshCompleteResultToJSON(value['bank_income_refresh_complete_result']),
    };
}

