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


/**
 * The types of source employment data that users should be able to share
 * @export
 */
export const EmploymentSourceType = {
    Bank: 'bank',
    Payroll: 'payroll'
} as const;
export type EmploymentSourceType = typeof EmploymentSourceType[keyof typeof EmploymentSourceType];


export function EmploymentSourceTypeFromJSON(json: any): EmploymentSourceType {
    return EmploymentSourceTypeFromJSONTyped(json, false);
}

export function EmploymentSourceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmploymentSourceType {
    return json as EmploymentSourceType;
}

export function EmploymentSourceTypeToJSON(value?: EmploymentSourceType | null): any {
    return value as any;
}
