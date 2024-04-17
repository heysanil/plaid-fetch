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
 * Defines the request schema for `/transfer/recurring/list`
 * @export
 * @interface TransferRecurringListRequest
 */
export interface TransferRecurringListRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof TransferRecurringListRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof TransferRecurringListRequest
     */
    secret?: string;
    /**
     * The start datetime of recurring transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)
     * @type {Date}
     * @memberof TransferRecurringListRequest
     */
    start_time?: Date;
    /**
     * The end datetime of recurring transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)
     * @type {Date}
     * @memberof TransferRecurringListRequest
     */
    end_time?: Date;
    /**
     * The maximum number of recurring transfers to return.
     * @type {number}
     * @memberof TransferRecurringListRequest
     */
    count?: number;
    /**
     * The number of recurring transfers to skip before returning results.
     * @type {number}
     * @memberof TransferRecurringListRequest
     */
    offset?: number;
    /**
     * Filter recurring transfers to only those with the specified `funding_account_id`.
     * @type {string}
     * @memberof TransferRecurringListRequest
     */
    funding_account_id?: string;
}

/**
 * Check if a given object implements the TransferRecurringListRequest interface.
 */
export function instanceOfTransferRecurringListRequest(value: object): boolean {
    return true;
}

export function TransferRecurringListRequestFromJSON(json: any): TransferRecurringListRequest {
    return TransferRecurringListRequestFromJSONTyped(json, false);
}

export function TransferRecurringListRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferRecurringListRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'start_time': json['start_time'] == null ? undefined : (new Date(json['start_time'])),
        'end_time': json['end_time'] == null ? undefined : (new Date(json['end_time'])),
        'count': json['count'] == null ? undefined : json['count'],
        'offset': json['offset'] == null ? undefined : json['offset'],
        'funding_account_id': json['funding_account_id'] == null ? undefined : json['funding_account_id'],
    };
}

export function TransferRecurringListRequestToJSON(value?: TransferRecurringListRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'start_time': value['start_time'] == null ? undefined : ((value['start_time'] as any).toISOString()),
        'end_time': value['end_time'] == null ? undefined : ((value['end_time'] as any).toISOString()),
        'count': value['count'],
        'offset': value['offset'],
        'funding_account_id': value['funding_account_id'],
    };
}
