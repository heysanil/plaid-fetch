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
 * Fired when a report created on the Beacon Network matches with one of your Beacon Users.
 * @export
 * @interface BeaconReportSyndicationCreatedWebhook
 */
export interface BeaconReportSyndicationCreatedWebhook {
    [key: string]: any | any;
    /**
     * `BEACON`
     * @type {string}
     * @memberof BeaconReportSyndicationCreatedWebhook
     */
    webhook_type: string;
    /**
     * `REPORT_SYNDICATION_CREATED`
     * @type {string}
     * @memberof BeaconReportSyndicationCreatedWebhook
     */
    webhook_code: string;
    /**
     * The ID of the associated Beacon Report Syndication.
     * @type {string}
     * @memberof BeaconReportSyndicationCreatedWebhook
     */
    beacon_report_syndication_id: string;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof BeaconReportSyndicationCreatedWebhook
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the BeaconReportSyndicationCreatedWebhook interface.
 */
export function instanceOfBeaconReportSyndicationCreatedWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('beacon_report_syndication_id' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function BeaconReportSyndicationCreatedWebhookFromJSON(json: any): BeaconReportSyndicationCreatedWebhook {
    return BeaconReportSyndicationCreatedWebhookFromJSONTyped(json, false);
}

export function BeaconReportSyndicationCreatedWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconReportSyndicationCreatedWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'beacon_report_syndication_id': json['beacon_report_syndication_id'],
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function BeaconReportSyndicationCreatedWebhookToJSON(value?: BeaconReportSyndicationCreatedWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'beacon_report_syndication_id': value['beacon_report_syndication_id'],
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}
