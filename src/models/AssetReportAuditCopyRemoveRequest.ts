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
 * AssetReportAuditCopyRemoveRequest defines the request schema for `/asset_report/audit_copy/remove`
 * @export
 * @interface AssetReportAuditCopyRemoveRequest
 */
export interface AssetReportAuditCopyRemoveRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof AssetReportAuditCopyRemoveRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof AssetReportAuditCopyRemoveRequest
     */
    secret?: string;
    /**
     * The `audit_copy_token` granting access to the Audit Copy you would like to revoke.
     * @type {string}
     * @memberof AssetReportAuditCopyRemoveRequest
     */
    audit_copy_token: string;
}

/**
 * Check if a given object implements the AssetReportAuditCopyRemoveRequest interface.
 */
export function instanceOfAssetReportAuditCopyRemoveRequest(value: object): boolean {
    if (!('audit_copy_token' in value)) return false;
    return true;
}

export function AssetReportAuditCopyRemoveRequestFromJSON(json: any): AssetReportAuditCopyRemoveRequest {
    return AssetReportAuditCopyRemoveRequestFromJSONTyped(json, false);
}

export function AssetReportAuditCopyRemoveRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetReportAuditCopyRemoveRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'audit_copy_token': json['audit_copy_token'],
    };
}

export function AssetReportAuditCopyRemoveRequestToJSON(value?: AssetReportAuditCopyRemoveRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'audit_copy_token': value['audit_copy_token'],
    };
}

