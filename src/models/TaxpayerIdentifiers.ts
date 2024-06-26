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
import type { TaxpayerIdentifier } from './TaxpayerIdentifier';
import {
    TaxpayerIdentifierFromJSON,
    TaxpayerIdentifierFromJSONTyped,
    TaxpayerIdentifierToJSON,
} from './TaxpayerIdentifier';

/**
 * The collection of TAXPAYER_IDENTIFICATION elements
 * @export
 * @interface TaxpayerIdentifiers
 */
export interface TaxpayerIdentifiers {
    [key: string]: any | any;
    /**
     * 
     * @type {TaxpayerIdentifier}
     * @memberof TaxpayerIdentifiers
     */
    TAXPAYER_IDENTIFIER: TaxpayerIdentifier;
}

/**
 * Check if a given object implements the TaxpayerIdentifiers interface.
 */
export function instanceOfTaxpayerIdentifiers(value: object): boolean {
    if (!('TAXPAYER_IDENTIFIER' in value)) return false;
    return true;
}

export function TaxpayerIdentifiersFromJSON(json: any): TaxpayerIdentifiers {
    return TaxpayerIdentifiersFromJSONTyped(json, false);
}

export function TaxpayerIdentifiersFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxpayerIdentifiers {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'TAXPAYER_IDENTIFIER': TaxpayerIdentifierFromJSON(json['TAXPAYER_IDENTIFIER']),
    };
}

export function TaxpayerIdentifiersToJSON(value?: TaxpayerIdentifiers | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'TAXPAYER_IDENTIFIER': TaxpayerIdentifierToJSON(value['TAXPAYER_IDENTIFIER']),
    };
}

