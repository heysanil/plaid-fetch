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
 * The income category for a specified income source
 * @export
 */
export const UserStatedIncomeSourceCategory = {
    Other: 'OTHER',
    Salary: 'SALARY',
    Unemployment: 'UNEMPLOYMENT',
    Cash: 'CASH',
    GigEconomy: 'GIG_ECONOMY',
    Rental: 'RENTAL',
    ChildSupport: 'CHILD_SUPPORT',
    Military: 'MILITARY',
    Retirement: 'RETIREMENT',
    LongTermDisability: 'LONG_TERM_DISABILITY',
    BankInterest: 'BANK_INTEREST'
} as const;
export type UserStatedIncomeSourceCategory = typeof UserStatedIncomeSourceCategory[keyof typeof UserStatedIncomeSourceCategory];


export function UserStatedIncomeSourceCategoryFromJSON(json: any): UserStatedIncomeSourceCategory {
    return UserStatedIncomeSourceCategoryFromJSONTyped(json, false);
}

export function UserStatedIncomeSourceCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserStatedIncomeSourceCategory {
    return json as UserStatedIncomeSourceCategory;
}

export function UserStatedIncomeSourceCategoryToJSON(value?: UserStatedIncomeSourceCategory | null): any {
    return value as any;
}
