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
import type { WatchlistScreeningDocumentType } from './WatchlistScreeningDocumentType';
import {
    WatchlistScreeningDocumentTypeFromJSON,
    WatchlistScreeningDocumentTypeFromJSONTyped,
    WatchlistScreeningDocumentTypeToJSON,
} from './WatchlistScreeningDocumentType';

/**
 * An official document, usually issued by a governing body or institution, with an associated identifier.
 * @export
 * @interface WatchlistScreeningDocument
 */
export interface WatchlistScreeningDocument {
    [key: string]: any | any;
    /**
     * 
     * @type {WatchlistScreeningDocumentType}
     * @memberof WatchlistScreeningDocument
     */
    type: WatchlistScreeningDocumentType;
    /**
     * The numeric or alphanumeric identifier associated with this document.
     * @type {string}
     * @memberof WatchlistScreeningDocument
     */
    number: string;
}

/**
 * Check if a given object implements the WatchlistScreeningDocument interface.
 */
export function instanceOfWatchlistScreeningDocument(value: object): boolean {
    if (!('type' in value)) return false;
    if (!('number' in value)) return false;
    return true;
}

export function WatchlistScreeningDocumentFromJSON(json: any): WatchlistScreeningDocument {
    return WatchlistScreeningDocumentFromJSONTyped(json, false);
}

export function WatchlistScreeningDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningDocument {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'type': WatchlistScreeningDocumentTypeFromJSON(json['type']),
        'number': json['number'],
    };
}

export function WatchlistScreeningDocumentToJSON(value?: WatchlistScreeningDocument | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'type': WatchlistScreeningDocumentTypeToJSON(value['type']),
        'number': value['number'],
    };
}

