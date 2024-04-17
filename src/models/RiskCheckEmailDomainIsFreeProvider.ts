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
 * Indicates whether the email address domain is a free provider such as Gmail or Hotmail if known.
 * @export
 */
export const RiskCheckEmailDomainIsFreeProvider = {
    Yes: 'yes',
    No: 'no',
    NoData: 'no_data'
} as const;
export type RiskCheckEmailDomainIsFreeProvider = typeof RiskCheckEmailDomainIsFreeProvider[keyof typeof RiskCheckEmailDomainIsFreeProvider];


export function RiskCheckEmailDomainIsFreeProviderFromJSON(json: any): RiskCheckEmailDomainIsFreeProvider {
    return RiskCheckEmailDomainIsFreeProviderFromJSONTyped(json, false);
}

export function RiskCheckEmailDomainIsFreeProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): RiskCheckEmailDomainIsFreeProvider {
    return json as RiskCheckEmailDomainIsFreeProvider;
}

export function RiskCheckEmailDomainIsFreeProviderToJSON(value?: RiskCheckEmailDomainIsFreeProvider | null): any {
    return value as any;
}
