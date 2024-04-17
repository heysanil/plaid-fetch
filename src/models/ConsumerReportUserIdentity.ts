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
import type { AddressData } from './AddressData';
import {
    AddressDataFromJSON,
    AddressDataFromJSONTyped,
    AddressDataToJSON,
} from './AddressData';

/**
 * ConsumerReportUserIdentity defines the user identity data collected for consumer report purpose. This field is required to be set if you later use the created user for consumer report purpose.
 * @export
 * @interface ConsumerReportUserIdentity
 */
export interface ConsumerReportUserIdentity {
    [key: string]: any | any;
    /**
     * The user's first name
     * @type {string}
     * @memberof ConsumerReportUserIdentity
     */
    first_name: string;
    /**
     * The user's last name
     * @type {string}
     * @memberof ConsumerReportUserIdentity
     */
    last_name: string;
    /**
     * The user's phone numbers. The format of phone number will be validated and for better normalization, it is expected to be in E.164 format +{countrycode}{number}, for example `+14151234567`.
     * @type {Array<string>}
     * @memberof ConsumerReportUserIdentity
     */
    phone_numbers: Array<string>;
    /**
     * The user's emails
     * @type {Array<string>}
     * @memberof ConsumerReportUserIdentity
     */
    emails: Array<string>;
    /**
     * 
     * @type {AddressData}
     * @memberof ConsumerReportUserIdentity
     */
    primary_address: AddressData;
}

/**
 * Check if a given object implements the ConsumerReportUserIdentity interface.
 */
export function instanceOfConsumerReportUserIdentity(value: object): boolean {
    if (!('first_name' in value)) return false;
    if (!('last_name' in value)) return false;
    if (!('phone_numbers' in value)) return false;
    if (!('emails' in value)) return false;
    if (!('primary_address' in value)) return false;
    return true;
}

export function ConsumerReportUserIdentityFromJSON(json: any): ConsumerReportUserIdentity {
    return ConsumerReportUserIdentityFromJSONTyped(json, false);
}

export function ConsumerReportUserIdentityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsumerReportUserIdentity {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'first_name': json['first_name'],
        'last_name': json['last_name'],
        'phone_numbers': json['phone_numbers'],
        'emails': json['emails'],
        'primary_address': AddressDataFromJSON(json['primary_address']),
    };
}

export function ConsumerReportUserIdentityToJSON(value?: ConsumerReportUserIdentity | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'first_name': value['first_name'],
        'last_name': value['last_name'],
        'phone_numbers': value['phone_numbers'],
        'emails': value['emails'],
        'primary_address': AddressDataToJSON(value['primary_address']),
    };
}
