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
import type { IndividualWatchlistProgram } from './IndividualWatchlistProgram';
import {
    IndividualWatchlistProgramFromJSON,
    IndividualWatchlistProgramFromJSONTyped,
    IndividualWatchlistProgramToJSON,
} from './IndividualWatchlistProgram';

/**
 * Paginated list of individual watchlist screening programs
 * @export
 * @interface WatchlistScreeningIndividualProgramListResponse
 */
export interface WatchlistScreeningIndividualProgramListResponse {
    [key: string]: any | any;
    /**
     * List of individual watchlist screening programs
     * @type {Array<IndividualWatchlistProgram>}
     * @memberof WatchlistScreeningIndividualProgramListResponse
     */
    watchlist_programs: Array<IndividualWatchlistProgram>;
    /**
     * An identifier that determines which page of results you receive.
     * @type {string}
     * @memberof WatchlistScreeningIndividualProgramListResponse
     */
    next_cursor: string | null;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof WatchlistScreeningIndividualProgramListResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the WatchlistScreeningIndividualProgramListResponse interface.
 */
export function instanceOfWatchlistScreeningIndividualProgramListResponse(value: object): boolean {
    if (!('watchlist_programs' in value)) return false;
    if (!('next_cursor' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function WatchlistScreeningIndividualProgramListResponseFromJSON(json: any): WatchlistScreeningIndividualProgramListResponse {
    return WatchlistScreeningIndividualProgramListResponseFromJSONTyped(json, false);
}

export function WatchlistScreeningIndividualProgramListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningIndividualProgramListResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'watchlist_programs': ((json['watchlist_programs'] as Array<any>).map(IndividualWatchlistProgramFromJSON)),
        'next_cursor': json['next_cursor'],
        'request_id': json['request_id'],
    };
}

export function WatchlistScreeningIndividualProgramListResponseToJSON(value?: WatchlistScreeningIndividualProgramListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'watchlist_programs': ((value['watchlist_programs'] as Array<any>).map(IndividualWatchlistProgramToJSON)),
        'next_cursor': value['next_cursor'],
        'request_id': value['request_id'],
    };
}

