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
import type { FDXPartyRegistry } from './FDXPartyRegistry';
import {
    FDXPartyRegistryFromJSON,
    FDXPartyRegistryFromJSONTyped,
    FDXPartyRegistryToJSON,
} from './FDXPartyRegistry';
import type { FDXPartyType } from './FDXPartyType';
import {
    FDXPartyTypeFromJSON,
    FDXPartyTypeFromJSONTyped,
    FDXPartyTypeToJSON,
} from './FDXPartyType';

/**
 * FDX Participant - an entity or person that is a part of a FDX API transaction
 * @export
 * @interface FDXParty
 */
export interface FDXParty {
    /**
     * Human recognizable common name
     * @type {string}
     * @memberof FDXParty
     */
    name: string;
    /**
     * 
     * @type {FDXPartyType}
     * @memberof FDXParty
     */
    type: FDXPartyType;
    /**
     * URI for party, where an end user could learn more about the company or application involved in the data sharing chain
     * @type {string}
     * @memberof FDXParty
     */
    homeUri?: string;
    /**
     * URI for a logo asset to be displayed to the end user
     * @type {string}
     * @memberof FDXParty
     */
    logoUri?: string;
    /**
     * 
     * @type {FDXPartyRegistry}
     * @memberof FDXParty
     */
    registry?: FDXPartyRegistry;
    /**
     * Registered name of party
     * @type {string}
     * @memberof FDXParty
     */
    registeredEntityName?: string;
    /**
     * Registered id of party
     * @type {string}
     * @memberof FDXParty
     */
    registeredEntityId?: string;
}

/**
 * Check if a given object implements the FDXParty interface.
 */
export function instanceOfFDXParty(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function FDXPartyFromJSON(json: any): FDXParty {
    return FDXPartyFromJSONTyped(json, false);
}

export function FDXPartyFromJSONTyped(json: any, ignoreDiscriminator: boolean): FDXParty {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'type': FDXPartyTypeFromJSON(json['type']),
        'homeUri': json['homeUri'] == null ? undefined : json['homeUri'],
        'logoUri': json['logoUri'] == null ? undefined : json['logoUri'],
        'registry': json['registry'] == null ? undefined : FDXPartyRegistryFromJSON(json['registry']),
        'registeredEntityName': json['registeredEntityName'] == null ? undefined : json['registeredEntityName'],
        'registeredEntityId': json['registeredEntityId'] == null ? undefined : json['registeredEntityId'],
    };
}

export function FDXPartyToJSON(value?: FDXParty | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'type': FDXPartyTypeToJSON(value['type']),
        'homeUri': value['homeUri'],
        'logoUri': value['logoUri'],
        'registry': FDXPartyRegistryToJSON(value['registry']),
        'registeredEntityName': value['registeredEntityName'],
        'registeredEntityId': value['registeredEntityId'],
    };
}
