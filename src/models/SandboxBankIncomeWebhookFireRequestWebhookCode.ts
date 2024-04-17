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
 * The webhook codes this endpoint can be used to test
 * @export
 */
export const SandboxBankIncomeWebhookFireRequestWebhookCode = {
    Update: 'BANK_INCOME_REFRESH_UPDATE',
    Complete: 'BANK_INCOME_REFRESH_COMPLETE'
} as const;
export type SandboxBankIncomeWebhookFireRequestWebhookCode = typeof SandboxBankIncomeWebhookFireRequestWebhookCode[keyof typeof SandboxBankIncomeWebhookFireRequestWebhookCode];


export function SandboxBankIncomeWebhookFireRequestWebhookCodeFromJSON(json: any): SandboxBankIncomeWebhookFireRequestWebhookCode {
    return SandboxBankIncomeWebhookFireRequestWebhookCodeFromJSONTyped(json, false);
}

export function SandboxBankIncomeWebhookFireRequestWebhookCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxBankIncomeWebhookFireRequestWebhookCode {
    return json as SandboxBankIncomeWebhookFireRequestWebhookCode;
}

export function SandboxBankIncomeWebhookFireRequestWebhookCodeToJSON(value?: SandboxBankIncomeWebhookFireRequestWebhookCode | null): any {
    return value as any;
}
