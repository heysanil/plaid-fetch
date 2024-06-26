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
import type { WebhookEnvironmentValues } from './WebhookEnvironmentValues';
import {
    WebhookEnvironmentValuesFromJSON,
    WebhookEnvironmentValuesFromJSONTyped,
    WebhookEnvironmentValuesToJSON,
} from './WebhookEnvironmentValues';

/**
 * Fired when a Beacon User created within your organization matches one of your existing users.
 * @export
 * @interface BeaconDuplicateDetectedWebhook
 */
export interface BeaconDuplicateDetectedWebhook {
    [key: string]: any | any;
    /**
     * `BEACON`
     * @type {string}
     * @memberof BeaconDuplicateDetectedWebhook
     */
    webhook_type: string;
    /**
     * `DUPLICATE_DETECTED`
     * @type {string}
     * @memberof BeaconDuplicateDetectedWebhook
     */
    webhook_code: string;
    /**
     * The ID of the associated Beacon Duplicate.
     * @type {string}
     * @memberof BeaconDuplicateDetectedWebhook
     */
    beacon_duplicate_id: string;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof BeaconDuplicateDetectedWebhook
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the BeaconDuplicateDetectedWebhook interface.
 */
export function instanceOfBeaconDuplicateDetectedWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('beacon_duplicate_id' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function BeaconDuplicateDetectedWebhookFromJSON(json: any): BeaconDuplicateDetectedWebhook {
    return BeaconDuplicateDetectedWebhookFromJSONTyped(json, false);
}

export function BeaconDuplicateDetectedWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconDuplicateDetectedWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'beacon_duplicate_id': json['beacon_duplicate_id'],
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function BeaconDuplicateDetectedWebhookToJSON(value?: BeaconDuplicateDetectedWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'beacon_duplicate_id': value['beacon_duplicate_id'],
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}

