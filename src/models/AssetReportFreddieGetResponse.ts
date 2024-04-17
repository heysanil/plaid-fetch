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
import type { AssetReportFreddie } from './AssetReportFreddie';
import {
    AssetReportFreddieFromJSON,
    AssetReportFreddieFromJSONTyped,
    AssetReportFreddieToJSON,
} from './AssetReportFreddie';

/**
 * AssetReportFreddieGetResponse defines the response schema for `/asset_report/get`
 * @export
 * @interface AssetReportFreddieGetResponse
 */
export interface AssetReportFreddieGetResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {AssetReportFreddie}
     * @memberof AssetReportFreddieGetResponse
     */
    DEAL: AssetReportFreddie;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof AssetReportFreddieGetResponse
     */
    request_id: string;
    /**
     * The Verification Of Assets (aka VOA or Freddie Mac Schema) schema version.
     * @type {number}
     * @memberof AssetReportFreddieGetResponse
     */
    SchemaVersion: number;
}

/**
 * Check if a given object implements the AssetReportFreddieGetResponse interface.
 */
export function instanceOfAssetReportFreddieGetResponse(value: object): boolean {
    if (!('DEAL' in value)) return false;
    if (!('request_id' in value)) return false;
    if (!('SchemaVersion' in value)) return false;
    return true;
}

export function AssetReportFreddieGetResponseFromJSON(json: any): AssetReportFreddieGetResponse {
    return AssetReportFreddieGetResponseFromJSONTyped(json, false);
}

export function AssetReportFreddieGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetReportFreddieGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'DEAL': AssetReportFreddieFromJSON(json['DEAL']),
        'request_id': json['request_id'],
        'SchemaVersion': json['SchemaVersion'],
    };
}

export function AssetReportFreddieGetResponseToJSON(value?: AssetReportFreddieGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'DEAL': AssetReportFreddieToJSON(value['DEAL']),
        'request_id': value['request_id'],
        'SchemaVersion': value['SchemaVersion'],
    };
}
