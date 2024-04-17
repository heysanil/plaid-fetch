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
import type { WatchlistScreeningStatus } from './WatchlistScreeningStatus';
import {
    WatchlistScreeningStatusFromJSON,
    WatchlistScreeningStatusFromJSONTyped,
    WatchlistScreeningStatusToJSON,
} from './WatchlistScreeningStatus';

/**
 * Request input for listinging watchlist screenings for individuals
 * @export
 * @interface WatchlistScreeningIndividualListRequest
 */
export interface WatchlistScreeningIndividualListRequest {
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof WatchlistScreeningIndividualListRequest
     */
    secret?: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof WatchlistScreeningIndividualListRequest
     */
    client_id?: string;
    /**
     * ID of the associated program.
     * @type {string}
     * @memberof WatchlistScreeningIndividualListRequest
     */
    watchlist_program_id: string;
    /**
     * A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the `/link/token/create` `client_user_id` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`.
     * @type {string}
     * @memberof WatchlistScreeningIndividualListRequest
     */
    client_user_id?: string;
    /**
     * 
     * @type {WatchlistScreeningStatus}
     * @memberof WatchlistScreeningIndividualListRequest
     */
    status?: WatchlistScreeningStatus;
    /**
     * ID of the associated user.
     * @type {string}
     * @memberof WatchlistScreeningIndividualListRequest
     */
    assignee?: string;
    /**
     * An identifier that determines which page of results you receive.
     * @type {string}
     * @memberof WatchlistScreeningIndividualListRequest
     */
    cursor?: string;
}

/**
 * Check if a given object implements the WatchlistScreeningIndividualListRequest interface.
 */
export function instanceOfWatchlistScreeningIndividualListRequest(value: object): boolean {
    if (!('watchlist_program_id' in value)) return false;
    return true;
}

export function WatchlistScreeningIndividualListRequestFromJSON(json: any): WatchlistScreeningIndividualListRequest {
    return WatchlistScreeningIndividualListRequestFromJSONTyped(json, false);
}

export function WatchlistScreeningIndividualListRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningIndividualListRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'secret': json['secret'] == null ? undefined : json['secret'],
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'watchlist_program_id': json['watchlist_program_id'],
        'client_user_id': json['client_user_id'] == null ? undefined : json['client_user_id'],
        'status': json['status'] == null ? undefined : WatchlistScreeningStatusFromJSON(json['status']),
        'assignee': json['assignee'] == null ? undefined : json['assignee'],
        'cursor': json['cursor'] == null ? undefined : json['cursor'],
    };
}

export function WatchlistScreeningIndividualListRequestToJSON(value?: WatchlistScreeningIndividualListRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'secret': value['secret'],
        'client_id': value['client_id'],
        'watchlist_program_id': value['watchlist_program_id'],
        'client_user_id': value['client_user_id'],
        'status': WatchlistScreeningStatusToJSON(value['status']),
        'assignee': value['assignee'],
        'cursor': value['cursor'],
    };
}
