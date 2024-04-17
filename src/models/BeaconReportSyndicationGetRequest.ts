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
 * Request input for getting a Beacon Report Syndication
 * @export
 * @interface BeaconReportSyndicationGetRequest
 */
export interface BeaconReportSyndicationGetRequest {
    /**
     * ID of the associated Beacon Report Syndication.
     * @type {string}
     * @memberof BeaconReportSyndicationGetRequest
     */
    beacon_report_syndication_id: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof BeaconReportSyndicationGetRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof BeaconReportSyndicationGetRequest
     */
    secret?: string;
}

/**
 * Check if a given object implements the BeaconReportSyndicationGetRequest interface.
 */
export function instanceOfBeaconReportSyndicationGetRequest(value: object): boolean {
    if (!('beacon_report_syndication_id' in value)) return false;
    return true;
}

export function BeaconReportSyndicationGetRequestFromJSON(json: any): BeaconReportSyndicationGetRequest {
    return BeaconReportSyndicationGetRequestFromJSONTyped(json, false);
}

export function BeaconReportSyndicationGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconReportSyndicationGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'beacon_report_syndication_id': json['beacon_report_syndication_id'],
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
    };
}

export function BeaconReportSyndicationGetRequestToJSON(value?: BeaconReportSyndicationGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'beacon_report_syndication_id': value['beacon_report_syndication_id'],
        'client_id': value['client_id'],
        'secret': value['secret'],
    };
}
