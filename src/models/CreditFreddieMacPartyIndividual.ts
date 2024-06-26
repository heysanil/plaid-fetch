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
import type { CreditFreddieMacIndividualName } from './CreditFreddieMacIndividualName';
import {
    CreditFreddieMacIndividualNameFromJSON,
    CreditFreddieMacIndividualNameFromJSONTyped,
    CreditFreddieMacIndividualNameToJSON,
} from './CreditFreddieMacIndividualName';

/**
 * Documentation not found in the MISMO model viewer and not provided by Freddie Mac.
 * @export
 * @interface CreditFreddieMacPartyIndividual
 */
export interface CreditFreddieMacPartyIndividual {
    [key: string]: any | any;
    /**
     * 
     * @type {CreditFreddieMacIndividualName}
     * @memberof CreditFreddieMacPartyIndividual
     */
    NAME: CreditFreddieMacIndividualName;
}

/**
 * Check if a given object implements the CreditFreddieMacPartyIndividual interface.
 */
export function instanceOfCreditFreddieMacPartyIndividual(value: object): boolean {
    if (!('NAME' in value)) return false;
    return true;
}

export function CreditFreddieMacPartyIndividualFromJSON(json: any): CreditFreddieMacPartyIndividual {
    return CreditFreddieMacPartyIndividualFromJSONTyped(json, false);
}

export function CreditFreddieMacPartyIndividualFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditFreddieMacPartyIndividual {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'NAME': CreditFreddieMacIndividualNameFromJSON(json['NAME']),
    };
}

export function CreditFreddieMacPartyIndividualToJSON(value?: CreditFreddieMacPartyIndividual | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'NAME': CreditFreddieMacIndividualNameToJSON(value['NAME']),
    };
}

