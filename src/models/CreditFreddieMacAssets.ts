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
import type { CreditFreddieMacAsset } from './CreditFreddieMacAsset';
import {
    CreditFreddieMacAssetFromJSON,
    CreditFreddieMacAssetFromJSONTyped,
    CreditFreddieMacAssetToJSON,
} from './CreditFreddieMacAsset';

/**
 * Documentation not found in the MISMO model viewer and not provided by Freddie Mac.
 * @export
 * @interface CreditFreddieMacAssets
 */
export interface CreditFreddieMacAssets {
    [key: string]: any | any;
    /**
     * Documentation not found in the MISMO model viewer and not provided by Freddie Mac.
     * @type {Array<CreditFreddieMacAsset>}
     * @memberof CreditFreddieMacAssets
     */
    ASSET: Array<CreditFreddieMacAsset>;
}

/**
 * Check if a given object implements the CreditFreddieMacAssets interface.
 */
export function instanceOfCreditFreddieMacAssets(value: object): boolean {
    if (!('ASSET' in value)) return false;
    return true;
}

export function CreditFreddieMacAssetsFromJSON(json: any): CreditFreddieMacAssets {
    return CreditFreddieMacAssetsFromJSONTyped(json, false);
}

export function CreditFreddieMacAssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditFreddieMacAssets {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'ASSET': ((json['ASSET'] as Array<any>).map(CreditFreddieMacAssetFromJSON)),
    };
}

export function CreditFreddieMacAssetsToJSON(value?: CreditFreddieMacAssets | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'ASSET': ((value['ASSET'] as Array<any>).map(CreditFreddieMacAssetToJSON)),
    };
}
