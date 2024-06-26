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
import type { PlaidError } from './PlaidError';
import {
    PlaidErrorFromJSON,
    PlaidErrorFromJSONTyped,
    PlaidErrorToJSON,
} from './PlaidError';
import type { WebhookEnvironmentValues } from './WebhookEnvironmentValues';
import {
    WebhookEnvironmentValuesFromJSON,
    WebhookEnvironmentValuesFromJSONTyped,
    WebhookEnvironmentValuesToJSON,
} from './WebhookEnvironmentValues';

/**
 * Fired when an Item was not verified via automated micro-deposits after seven days since the automated micro-deposit was made.
 * @export
 * @interface VerificationExpiredWebhook
 */
export interface VerificationExpiredWebhook {
    [key: string]: any | any;
    /**
     * `AUTH`
     * @type {string}
     * @memberof VerificationExpiredWebhook
     */
    webhook_type: string;
    /**
     * `VERIFICATION_EXPIRED`
     * @type {string}
     * @memberof VerificationExpiredWebhook
     */
    webhook_code: string;
    /**
     * The `item_id` of the Item associated with this webhook, warning, or error
     * @type {string}
     * @memberof VerificationExpiredWebhook
     */
    item_id: string;
    /**
     * The `account_id` of the account associated with the webhook
     * @type {string}
     * @memberof VerificationExpiredWebhook
     */
    account_id: string;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof VerificationExpiredWebhook
     */
    environment: WebhookEnvironmentValues;
    /**
     * 
     * @type {PlaidError}
     * @memberof VerificationExpiredWebhook
     */
    error?: PlaidError;
}

/**
 * Check if a given object implements the VerificationExpiredWebhook interface.
 */
export function instanceOfVerificationExpiredWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('item_id' in value)) return false;
    if (!('account_id' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function VerificationExpiredWebhookFromJSON(json: any): VerificationExpiredWebhook {
    return VerificationExpiredWebhookFromJSONTyped(json, false);
}

export function VerificationExpiredWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerificationExpiredWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'item_id': json['item_id'],
        'account_id': json['account_id'],
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
        'error': json['error'] == null ? undefined : PlaidErrorFromJSON(json['error']),
    };
}

export function VerificationExpiredWebhookToJSON(value?: VerificationExpiredWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'item_id': value['item_id'],
        'account_id': value['account_id'],
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
        'error': PlaidErrorToJSON(value['error']),
    };
}

