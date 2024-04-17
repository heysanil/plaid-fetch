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
 * The confidence that Plaid can support the user in the digital income verification flow instead of requiring a manual paystub upload. One of the following:
 * 
 * `"HIGH"`: It is very likely that this user can use the digital income verification flow.
 * 
 * "`LOW`": It is unlikely that this user can use the digital income verification flow.
 * 
 * `"UNKNOWN"`: It was not possible to determine if the user is supportable with the information passed.
 * @export
 */
export const IncomeVerificationPrecheckConfidence = {
    High: 'HIGH',
    Low: 'LOW',
    Unknown: 'UNKNOWN'
} as const;
export type IncomeVerificationPrecheckConfidence = typeof IncomeVerificationPrecheckConfidence[keyof typeof IncomeVerificationPrecheckConfidence];


export function IncomeVerificationPrecheckConfidenceFromJSON(json: any): IncomeVerificationPrecheckConfidence {
    return IncomeVerificationPrecheckConfidenceFromJSONTyped(json, false);
}

export function IncomeVerificationPrecheckConfidenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncomeVerificationPrecheckConfidence {
    return json as IncomeVerificationPrecheckConfidence;
}

export function IncomeVerificationPrecheckConfidenceToJSON(value?: IncomeVerificationPrecheckConfidence | null): any {
    return value as any;
}
