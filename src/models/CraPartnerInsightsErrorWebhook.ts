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
 * Fired when a partner insights report has failed to generate
 * @export
 * @interface CraPartnerInsightsErrorWebhook
 */
export interface CraPartnerInsightsErrorWebhook {
    [key: string]: any | any;
    /**
     * `CRA_INSIGHTS`
     * @type {string}
     * @memberof CraPartnerInsightsErrorWebhook
     */
    webhook_type: string;
    /**
     * `PARTNER_INSIGHTS_ERROR`
     * @type {string}
     * @memberof CraPartnerInsightsErrorWebhook
     */
    webhook_code: string;
    /**
     * The `user_id` corresponding to the user the webhook has fired for.
     * @type {string}
     * @memberof CraPartnerInsightsErrorWebhook
     */
    user_id: string;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof CraPartnerInsightsErrorWebhook
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the CraPartnerInsightsErrorWebhook interface.
 */
export function instanceOfCraPartnerInsightsErrorWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('user_id' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function CraPartnerInsightsErrorWebhookFromJSON(json: any): CraPartnerInsightsErrorWebhook {
    return CraPartnerInsightsErrorWebhookFromJSONTyped(json, false);
}

export function CraPartnerInsightsErrorWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): CraPartnerInsightsErrorWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'user_id': json['user_id'],
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function CraPartnerInsightsErrorWebhookToJSON(value?: CraPartnerInsightsErrorWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'user_id': value['user_id'],
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}

