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
 * Status of the Bank Income Link session.
 * 
 * `APPROVED`: User has approved and verified their income
 * 
 * `NO_DEPOSITS_FOUND`: We attempted, but were unable to find any income in the connected account.
 * 
 * `USER_REPORTED_NO_INCOME`: The user explicitly indicated that they don't receive income in the connected account.
 * 
 * `STARTED`: The user began the bank income portion of the link flow.
 * 
 * `INTERNAL_ERROR`: The user encountered an internal error.
 * @export
 */
export const CreditSessionBankIncomeStatus = {
    Approved: 'APPROVED',
    NoDepositsFound: 'NO_DEPOSITS_FOUND',
    UserReportedNoIncome: 'USER_REPORTED_NO_INCOME'
} as const;
export type CreditSessionBankIncomeStatus = typeof CreditSessionBankIncomeStatus[keyof typeof CreditSessionBankIncomeStatus];


export function CreditSessionBankIncomeStatusFromJSON(json: any): CreditSessionBankIncomeStatus {
    return CreditSessionBankIncomeStatusFromJSONTyped(json, false);
}

export function CreditSessionBankIncomeStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditSessionBankIncomeStatus {
    return json as CreditSessionBankIncomeStatus;
}

export function CreditSessionBankIncomeStatusToJSON(value?: CreditSessionBankIncomeStatus | null): any {
    return value as any;
}

