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
import type { IncomeBreakdownType } from './IncomeBreakdownType';
import {
    IncomeBreakdownTypeFromJSON,
    IncomeBreakdownTypeFromJSONTyped,
    IncomeBreakdownTypeToJSON,
} from './IncomeBreakdownType';

/**
 * An object representing a breakdown of the different income types on the paystub.
 * @export
 * @interface IncomeBreakdown
 */
export interface IncomeBreakdown {
    [key: string]: any | any;
    /**
     * 
     * @type {IncomeBreakdownType}
     * @memberof IncomeBreakdown
     */
    type: IncomeBreakdownType | null;
    /**
     * The hourly rate at which the income is paid.
     * @type {number}
     * @memberof IncomeBreakdown
     */
    rate: number | null;
    /**
     * The number of hours logged for this income for this pay period.
     * @type {number}
     * @memberof IncomeBreakdown
     */
    hours: number | null;
    /**
     * The total pay for this pay period.
     * @type {number}
     * @memberof IncomeBreakdown
     */
    total: number | null;
}

/**
 * Check if a given object implements the IncomeBreakdown interface.
 */
export function instanceOfIncomeBreakdown(value: object): boolean {
    if (!('type' in value)) return false;
    if (!('rate' in value)) return false;
    if (!('hours' in value)) return false;
    if (!('total' in value)) return false;
    return true;
}

export function IncomeBreakdownFromJSON(json: any): IncomeBreakdown {
    return IncomeBreakdownFromJSONTyped(json, false);
}

export function IncomeBreakdownFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncomeBreakdown {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'type': IncomeBreakdownTypeFromJSON(json['type']),
        'rate': json['rate'],
        'hours': json['hours'],
        'total': json['total'],
    };
}

export function IncomeBreakdownToJSON(value?: IncomeBreakdown | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'type': IncomeBreakdownTypeToJSON(value['type']),
        'rate': value['rate'],
        'hours': value['hours'],
        'total': value['total'],
    };
}

