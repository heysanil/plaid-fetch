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
 * The user's legal name
 * @export
 * @interface SignalPersonName
 */
export interface SignalPersonName {
    /**
     * The user's name prefix (e.g. "Mr.")
     * @type {string}
     * @memberof SignalPersonName
     */
    prefix?: string;
    /**
     * The user's given name. If the user has a one-word name, it should be provided in this field.
     * @type {string}
     * @memberof SignalPersonName
     */
    given_name?: string;
    /**
     * The user's middle name
     * @type {string}
     * @memberof SignalPersonName
     */
    middle_name?: string;
    /**
     * The user's family name / surname
     * @type {string}
     * @memberof SignalPersonName
     */
    family_name?: string;
    /**
     * The user's name suffix (e.g. "II")
     * @type {string}
     * @memberof SignalPersonName
     */
    suffix?: string;
}

/**
 * Check if a given object implements the SignalPersonName interface.
 */
export function instanceOfSignalPersonName(value: object): boolean {
    return true;
}

export function SignalPersonNameFromJSON(json: any): SignalPersonName {
    return SignalPersonNameFromJSONTyped(json, false);
}

export function SignalPersonNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignalPersonName {
    if (json == null) {
        return json;
    }
    return {
        
        'prefix': json['prefix'] == null ? undefined : json['prefix'],
        'given_name': json['given_name'] == null ? undefined : json['given_name'],
        'middle_name': json['middle_name'] == null ? undefined : json['middle_name'],
        'family_name': json['family_name'] == null ? undefined : json['family_name'],
        'suffix': json['suffix'] == null ? undefined : json['suffix'],
    };
}

export function SignalPersonNameToJSON(value?: SignalPersonName | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'prefix': value['prefix'],
        'given_name': value['given_name'],
        'middle_name': value['middle_name'],
        'family_name': value['family_name'],
        'suffix': value['suffix'],
    };
}
