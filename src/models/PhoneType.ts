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
 * An enum indicating whether a phone number is a phone line or a fax line.
 * @export
 */
export const PhoneType = {
    Phone: 'phone',
    Fax: 'fax'
} as const;
export type PhoneType = typeof PhoneType[keyof typeof PhoneType];


export function PhoneTypeFromJSON(json: any): PhoneType {
    return PhoneTypeFromJSONTyped(json, false);
}

export function PhoneTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhoneType {
    return json as PhoneType;
}

export function PhoneTypeToJSON(value?: PhoneType | null): any {
    return value as any;
}
