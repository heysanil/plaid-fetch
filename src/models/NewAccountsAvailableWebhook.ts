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
 * Fired when Plaid detects a new account for Items created or updated with [Account Select v2](https://plaid.com/docs/link/customization/#account-select). Upon receiving this webhook, you can prompt your users to share new accounts with you through [Account Select v2 update mode](https://plaid.com/docs/link/update-mode/#using-update-mode-to-request-new-accounts).
 * @export
 * @interface NewAccountsAvailableWebhook
 */
export interface NewAccountsAvailableWebhook {
    /**
     * `ITEM`
     * @type {string}
     * @memberof NewAccountsAvailableWebhook
     */
    webhook_type?: string;
    /**
     * `NEW_ACCOUNTS_AVAILABLE`
     * @type {string}
     * @memberof NewAccountsAvailableWebhook
     */
    webhook_code?: string;
    /**
     * The `item_id` of the Item associated with this webhook, warning, or error
     * @type {string}
     * @memberof NewAccountsAvailableWebhook
     */
    item_id?: string;
    /**
     * 
     * @type {PlaidError}
     * @memberof NewAccountsAvailableWebhook
     */
    error?: PlaidError;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof NewAccountsAvailableWebhook
     */
    environment?: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the NewAccountsAvailableWebhook interface.
 */
export function instanceOfNewAccountsAvailableWebhook(value: object): boolean {
    return true;
}

export function NewAccountsAvailableWebhookFromJSON(json: any): NewAccountsAvailableWebhook {
    return NewAccountsAvailableWebhookFromJSONTyped(json, false);
}

export function NewAccountsAvailableWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewAccountsAvailableWebhook {
    if (json == null) {
        return json;
    }
    return {
        
        'webhook_type': json['webhook_type'] == null ? undefined : json['webhook_type'],
        'webhook_code': json['webhook_code'] == null ? undefined : json['webhook_code'],
        'item_id': json['item_id'] == null ? undefined : json['item_id'],
        'error': json['error'] == null ? undefined : PlaidErrorFromJSON(json['error']),
        'environment': json['environment'] == null ? undefined : WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function NewAccountsAvailableWebhookToJSON(value?: NewAccountsAvailableWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'item_id': value['item_id'],
        'error': PlaidErrorToJSON(value['error']),
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}

