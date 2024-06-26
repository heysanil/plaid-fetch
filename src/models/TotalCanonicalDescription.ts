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
 * Commonly used term to describe the line item.
 * @export
 */
export const TotalCanonicalDescription = {
    Bonus: 'BONUS',
    Commission: 'COMMISSION',
    Overtime: 'OVERTIME',
    PaidTimeOff: 'PAID TIME OFF',
    RegularPay: 'REGULAR PAY',
    Vacation: 'VACATION',
    EmployeeMedicare: 'EMPLOYEE MEDICARE',
    Fica: 'FICA',
    SocialSecurityEmployeeTax: 'SOCIAL SECURITY EMPLOYEE TAX',
    Medical: 'MEDICAL',
    Vision: 'VISION',
    Dental: 'DENTAL',
    NetPay: 'NET PAY',
    Taxes: 'TAXES',
    NotFound: 'NOT_FOUND',
    Other: 'OTHER',
    Null: 'null'
} as const;
export type TotalCanonicalDescription = typeof TotalCanonicalDescription[keyof typeof TotalCanonicalDescription];


export function TotalCanonicalDescriptionFromJSON(json: any): TotalCanonicalDescription {
    return TotalCanonicalDescriptionFromJSONTyped(json, false);
}

export function TotalCanonicalDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TotalCanonicalDescription {
    return json as TotalCanonicalDescription;
}

export function TotalCanonicalDescriptionToJSON(value?: TotalCanonicalDescription | null): any {
    return value as any;
}

