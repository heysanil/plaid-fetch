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
 * An optional object to filter `/beacon/account_risk/v1/evaluate` results to a subset of the accounts on the linked Item.
 * @export
 * @interface BeaconAccountRiskEvaluateRequestOptions
 */
export interface BeaconAccountRiskEvaluateRequestOptions {
    /**
     * An array of `account_ids` for the specific accounts to evaluate.
     * @type {Array<string>}
     * @memberof BeaconAccountRiskEvaluateRequestOptions
     */
    account_ids?: Array<string>;
}

/**
 * Check if a given object implements the BeaconAccountRiskEvaluateRequestOptions interface.
 */
export function instanceOfBeaconAccountRiskEvaluateRequestOptions(value: object): boolean {
    return true;
}

export function BeaconAccountRiskEvaluateRequestOptionsFromJSON(json: any): BeaconAccountRiskEvaluateRequestOptions {
    return BeaconAccountRiskEvaluateRequestOptionsFromJSONTyped(json, false);
}

export function BeaconAccountRiskEvaluateRequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconAccountRiskEvaluateRequestOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'account_ids': json['account_ids'] == null ? undefined : json['account_ids'],
    };
}

export function BeaconAccountRiskEvaluateRequestOptionsToJSON(value?: BeaconAccountRiskEvaluateRequestOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_ids': value['account_ids'],
    };
}
