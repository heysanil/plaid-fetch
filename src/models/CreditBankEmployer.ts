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
 * Object containing employer data.
 * @export
 * @interface CreditBankEmployer
 */
export interface CreditBankEmployer {
    /**
     * Name of the employer.
     * @type {string}
     * @memberof CreditBankEmployer
     */
    name: string;
}

/**
 * Check if a given object implements the CreditBankEmployer interface.
 */
export function instanceOfCreditBankEmployer(value: object): boolean {
    if (!('name' in value)) return false;
    return true;
}

export function CreditBankEmployerFromJSON(json: any): CreditBankEmployer {
    return CreditBankEmployerFromJSONTyped(json, false);
}

export function CreditBankEmployerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditBankEmployer {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function CreditBankEmployerToJSON(value?: CreditBankEmployer | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
    };
}
