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
import type { CreditBankEmploymentReport } from './CreditBankEmploymentReport';
import {
    CreditBankEmploymentReportFromJSON,
    CreditBankEmploymentReportFromJSONTyped,
    CreditBankEmploymentReportToJSON,
} from './CreditBankEmploymentReport';

/**
 * CreditBankEmploymentGetResponse defines the response schema for `/beta/credit/v1/bank_employment/get`.
 * @export
 * @interface CreditBankEmploymentGetResponse
 */
export interface CreditBankEmploymentGetResponse {
    [key: string]: any | any;
    /**
     * Bank Employment data. Each entry in the array will be a distinct bank employment report.
     * @type {Array<CreditBankEmploymentReport>}
     * @memberof CreditBankEmploymentGetResponse
     */
    bank_employment_reports: Array<CreditBankEmploymentReport>;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof CreditBankEmploymentGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the CreditBankEmploymentGetResponse interface.
 */
export function instanceOfCreditBankEmploymentGetResponse(value: object): boolean {
    if (!('bank_employment_reports' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function CreditBankEmploymentGetResponseFromJSON(json: any): CreditBankEmploymentGetResponse {
    return CreditBankEmploymentGetResponseFromJSONTyped(json, false);
}

export function CreditBankEmploymentGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditBankEmploymentGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'bank_employment_reports': ((json['bank_employment_reports'] as Array<any>).map(CreditBankEmploymentReportFromJSON)),
        'request_id': json['request_id'],
    };
}

export function CreditBankEmploymentGetResponseToJSON(value?: CreditBankEmploymentGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'bank_employment_reports': ((value['bank_employment_reports'] as Array<any>).map(CreditBankEmploymentReportToJSON)),
        'request_id': value['request_id'],
    };
}
