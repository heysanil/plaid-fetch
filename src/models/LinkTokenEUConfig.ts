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
 * Configuration parameters for EU flows
 * @export
 * @interface LinkTokenEUConfig
 */
export interface LinkTokenEUConfig {
    /**
     * If `true`, open Link without an initial UI. Defaults to `false`.
     * @type {boolean}
     * @memberof LinkTokenEUConfig
     */
    headless?: boolean;
}

/**
 * Check if a given object implements the LinkTokenEUConfig interface.
 */
export function instanceOfLinkTokenEUConfig(value: object): boolean {
    return true;
}

export function LinkTokenEUConfigFromJSON(json: any): LinkTokenEUConfig {
    return LinkTokenEUConfigFromJSONTyped(json, false);
}

export function LinkTokenEUConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkTokenEUConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'headless': json['headless'] == null ? undefined : json['headless'],
    };
}

export function LinkTokenEUConfigToJSON(value?: LinkTokenEUConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'headless': value['headless'],
    };
}
