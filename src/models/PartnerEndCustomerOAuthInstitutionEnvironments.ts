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
import type { PartnerEndCustomerOAuthInstitutionApplicationStatus } from './PartnerEndCustomerOAuthInstitutionApplicationStatus';
import {
    PartnerEndCustomerOAuthInstitutionApplicationStatusFromJSON,
    PartnerEndCustomerOAuthInstitutionApplicationStatusFromJSONTyped,
    PartnerEndCustomerOAuthInstitutionApplicationStatusToJSON,
} from './PartnerEndCustomerOAuthInstitutionApplicationStatus';

/**
 * Registration statuses by environment.
 * @export
 * @interface PartnerEndCustomerOAuthInstitutionEnvironments
 */
export interface PartnerEndCustomerOAuthInstitutionEnvironments {
    [key: string]: any | any;
    /**
     * 
     * @type {PartnerEndCustomerOAuthInstitutionApplicationStatus}
     * @memberof PartnerEndCustomerOAuthInstitutionEnvironments
     */
    development?: PartnerEndCustomerOAuthInstitutionApplicationStatus;
    /**
     * 
     * @type {PartnerEndCustomerOAuthInstitutionApplicationStatus}
     * @memberof PartnerEndCustomerOAuthInstitutionEnvironments
     */
    production?: PartnerEndCustomerOAuthInstitutionApplicationStatus;
}

/**
 * Check if a given object implements the PartnerEndCustomerOAuthInstitutionEnvironments interface.
 */
export function instanceOfPartnerEndCustomerOAuthInstitutionEnvironments(value: object): boolean {
    return true;
}

export function PartnerEndCustomerOAuthInstitutionEnvironmentsFromJSON(json: any): PartnerEndCustomerOAuthInstitutionEnvironments {
    return PartnerEndCustomerOAuthInstitutionEnvironmentsFromJSONTyped(json, false);
}

export function PartnerEndCustomerOAuthInstitutionEnvironmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerEndCustomerOAuthInstitutionEnvironments {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'development': json['development'] == null ? undefined : PartnerEndCustomerOAuthInstitutionApplicationStatusFromJSON(json['development']),
        'production': json['production'] == null ? undefined : PartnerEndCustomerOAuthInstitutionApplicationStatusFromJSON(json['production']),
    };
}

export function PartnerEndCustomerOAuthInstitutionEnvironmentsToJSON(value?: PartnerEndCustomerOAuthInstitutionEnvironments | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'development': PartnerEndCustomerOAuthInstitutionApplicationStatusToJSON(value['development']),
        'production': PartnerEndCustomerOAuthInstitutionApplicationStatusToJSON(value['production']),
    };
}
