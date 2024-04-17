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
 * Configuration parameters for the Investments product
 * @export
 * @interface LinkTokenInvestments
 */
export interface LinkTokenInvestments {
    /**
     * If `true`, allow self-custody crypto wallets to be added without requiring signature verification. Defaults to `false`.
     * @type {boolean}
     * @memberof LinkTokenInvestments
     */
    allow_unverified_crypto_wallets?: boolean;
    /**
     * If `true`, allow users to manually enter Investments account and holdings information. Defaults to `false`.
     * @type {boolean}
     * @memberof LinkTokenInvestments
     */
    allow_manual_entry?: boolean;
}

/**
 * Check if a given object implements the LinkTokenInvestments interface.
 */
export function instanceOfLinkTokenInvestments(value: object): boolean {
    return true;
}

export function LinkTokenInvestmentsFromJSON(json: any): LinkTokenInvestments {
    return LinkTokenInvestmentsFromJSONTyped(json, false);
}

export function LinkTokenInvestmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkTokenInvestments {
    if (json == null) {
        return json;
    }
    return {
        
        'allow_unverified_crypto_wallets': json['allow_unverified_crypto_wallets'] == null ? undefined : json['allow_unverified_crypto_wallets'],
        'allow_manual_entry': json['allow_manual_entry'] == null ? undefined : json['allow_manual_entry'],
    };
}

export function LinkTokenInvestmentsToJSON(value?: LinkTokenInvestments | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'allow_unverified_crypto_wallets': value['allow_unverified_crypto_wallets'],
        'allow_manual_entry': value['allow_manual_entry'],
    };
}
