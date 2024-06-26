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
 * The type of Beacon Report.
 * 
 * `first_party`: If this is the same individual as the one who submitted the KYC.
 * 
 * `stolen`: If this is a different individual from the one who submitted the KYC.
 * 
 * `synthetic`: If this is an individual using fabricated information.
 * 
 * `account_takeover`: If this individual's account was compromised.
 * 
 * `unknown`: If you aren't sure who committed the fraud.
 * @export
 */
export const BeaconReportType = {
    FirstParty: 'first_party',
    Stolen: 'stolen',
    Synthetic: 'synthetic',
    AccountTakeover: 'account_takeover',
    Unknown: 'unknown'
} as const;
export type BeaconReportType = typeof BeaconReportType[keyof typeof BeaconReportType];


export function BeaconReportTypeFromJSON(json: any): BeaconReportType {
    return BeaconReportTypeFromJSONTyped(json, false);
}

export function BeaconReportTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconReportType {
    return json as BeaconReportType;
}

export function BeaconReportTypeToJSON(value?: BeaconReportType | null): any {
    return value as any;
}

