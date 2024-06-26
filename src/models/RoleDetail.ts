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
import type { PartyRoleType } from './PartyRoleType';
import {
    PartyRoleTypeFromJSON,
    PartyRoleTypeFromJSONTyped,
    PartyRoleTypeToJSON,
} from './PartyRoleType';

/**
 * Documentation not found in the MISMO model viewer and not provided by Freddie Mac.
 * @export
 * @interface RoleDetail
 */
export interface RoleDetail {
    [key: string]: any | any;
    /**
     * 
     * @type {PartyRoleType}
     * @memberof RoleDetail
     */
    PartyRoleType: PartyRoleType;
}

/**
 * Check if a given object implements the RoleDetail interface.
 */
export function instanceOfRoleDetail(value: object): boolean {
    if (!('PartyRoleType' in value)) return false;
    return true;
}

export function RoleDetailFromJSON(json: any): RoleDetail {
    return RoleDetailFromJSONTyped(json, false);
}

export function RoleDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoleDetail {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'PartyRoleType': PartyRoleTypeFromJSON(json['PartyRoleType']),
    };
}

export function RoleDetailToJSON(value?: RoleDetail | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'PartyRoleType': PartyRoleTypeToJSON(value['PartyRoleType']),
    };
}

