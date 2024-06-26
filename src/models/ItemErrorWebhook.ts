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
 * Fired when an error is encountered with an Item. The error can be resolved by having the user go through Link’s update mode.
 * @export
 * @interface ItemErrorWebhook
 */
export interface ItemErrorWebhook {
    [key: string]: any | any;
    /**
     * `ITEM`
     * @type {string}
     * @memberof ItemErrorWebhook
     */
    webhook_type: string;
    /**
     * `ERROR`
     * @type {string}
     * @memberof ItemErrorWebhook
     */
    webhook_code: string;
    /**
     * The `item_id` of the Item associated with this webhook, warning, or error
     * @type {string}
     * @memberof ItemErrorWebhook
     */
    item_id: string;
    /**
     * 
     * @type {PlaidError}
     * @memberof ItemErrorWebhook
     */
    error: PlaidError | null;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof ItemErrorWebhook
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the ItemErrorWebhook interface.
 */
export function instanceOfItemErrorWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('item_id' in value)) return false;
    if (!('error' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function ItemErrorWebhookFromJSON(json: any): ItemErrorWebhook {
    return ItemErrorWebhookFromJSONTyped(json, false);
}

export function ItemErrorWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemErrorWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'item_id': json['item_id'],
        'error': PlaidErrorFromJSON(json['error']),
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function ItemErrorWebhookToJSON(value?: ItemErrorWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'item_id': value['item_id'],
        'error': PlaidErrorToJSON(value['error']),
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}

