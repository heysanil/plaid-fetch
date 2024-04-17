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

import { mapValues } from '../runtime';
/**
 * Status information about the account and routing number in the Plaid network.
 * @export
 * @interface AccountVerificationInsightsNetworkStatus
 */
export interface AccountVerificationInsightsNetworkStatus {
    [key: string]: any | any;
    /**
     * Indicates whether we found at least one matching account for the ACH account and routing number.
     * @type {boolean}
     * @memberof AccountVerificationInsightsNetworkStatus
     */
    has_numbers_match: boolean;
    /**
     * Indicates if at least one matching account for the ACH account and routing number is already verified.
     * @type {boolean}
     * @memberof AccountVerificationInsightsNetworkStatus
     */
    is_numbers_match_verified: boolean;
}

/**
 * Check if a given object implements the AccountVerificationInsightsNetworkStatus interface.
 */
export function instanceOfAccountVerificationInsightsNetworkStatus(value: object): boolean {
    if (!('has_numbers_match' in value)) return false;
    if (!('is_numbers_match_verified' in value)) return false;
    return true;
}

export function AccountVerificationInsightsNetworkStatusFromJSON(json: any): AccountVerificationInsightsNetworkStatus {
    return AccountVerificationInsightsNetworkStatusFromJSONTyped(json, false);
}

export function AccountVerificationInsightsNetworkStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountVerificationInsightsNetworkStatus {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'has_numbers_match': json['has_numbers_match'],
        'is_numbers_match_verified': json['is_numbers_match_verified'],
    };
}

export function AccountVerificationInsightsNetworkStatusToJSON(value?: AccountVerificationInsightsNetworkStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'has_numbers_match': value['has_numbers_match'],
        'is_numbers_match_verified': value['is_numbers_match_verified'],
    };
}
