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
 * Search inputs for creating a watchlist screening
 * @export
 * @interface WatchlistScreeningRequestSearchTerms
 */
export interface WatchlistScreeningRequestSearchTerms {
    /**
     * ID of the associated program.
     * @type {string}
     * @memberof WatchlistScreeningRequestSearchTerms
     */
    watchlist_program_id: string;
    /**
     * The legal name of the individual being screened.
     * @type {string}
     * @memberof WatchlistScreeningRequestSearchTerms
     */
    legal_name: string;
    /**
     * A date in the format YYYY-MM-DD (RFC 3339 Section 5.6).
     * @type {Date}
     * @memberof WatchlistScreeningRequestSearchTerms
     */
    date_of_birth?: Date;
    /**
     * The numeric or alphanumeric identifier associated with this document.
     * @type {string}
     * @memberof WatchlistScreeningRequestSearchTerms
     */
    document_number?: string;
    /**
     * Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO 3166-1 alpha-2 form.
     * @type {string}
     * @memberof WatchlistScreeningRequestSearchTerms
     */
    country?: string;
}

/**
 * Check if a given object implements the WatchlistScreeningRequestSearchTerms interface.
 */
export function instanceOfWatchlistScreeningRequestSearchTerms(value: object): boolean {
    if (!('watchlist_program_id' in value)) return false;
    if (!('legal_name' in value)) return false;
    return true;
}

export function WatchlistScreeningRequestSearchTermsFromJSON(json: any): WatchlistScreeningRequestSearchTerms {
    return WatchlistScreeningRequestSearchTermsFromJSONTyped(json, false);
}

export function WatchlistScreeningRequestSearchTermsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningRequestSearchTerms {
    if (json == null) {
        return json;
    }
    return {
        
        'watchlist_program_id': json['watchlist_program_id'],
        'legal_name': json['legal_name'],
        'date_of_birth': json['date_of_birth'] == null ? undefined : (new Date(json['date_of_birth'])),
        'document_number': json['document_number'] == null ? undefined : json['document_number'],
        'country': json['country'] == null ? undefined : json['country'],
    };
}

export function WatchlistScreeningRequestSearchTermsToJSON(value?: WatchlistScreeningRequestSearchTerms | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'watchlist_program_id': value['watchlist_program_id'],
        'legal_name': value['legal_name'],
        'date_of_birth': value['date_of_birth'] == null ? undefined : ((value['date_of_birth']).toISOString().substring(0,10)),
        'document_number': value['document_number'],
        'country': value['country'],
    };
}

