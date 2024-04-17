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
 * The result of the bank income report generation
 * 
 * `SUCCESS`: The bank income report was successfully generated and can be retrieved via `/cra/bank_income/get`.
 * 
 * `FAILURE`: The bank income report failed to be generated
 * @export
 */
export const CraBankIncomeCompleteResult = {
    Success: 'SUCCESS',
    Failure: 'FAILURE'
} as const;
export type CraBankIncomeCompleteResult = typeof CraBankIncomeCompleteResult[keyof typeof CraBankIncomeCompleteResult];


export function CraBankIncomeCompleteResultFromJSON(json: any): CraBankIncomeCompleteResult {
    return CraBankIncomeCompleteResultFromJSONTyped(json, false);
}

export function CraBankIncomeCompleteResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CraBankIncomeCompleteResult {
    return json as CraBankIncomeCompleteResult;
}

export function CraBankIncomeCompleteResultToJSON(value?: CraBankIncomeCompleteResult | null): any {
    return value as any;
}
