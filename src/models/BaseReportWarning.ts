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
import type { BaseReportWarningCode } from './BaseReportWarningCode';
import {
    BaseReportWarningCodeFromJSON,
    BaseReportWarningCodeFromJSONTyped,
    BaseReportWarningCodeToJSON,
} from './BaseReportWarningCode';
import type { Cause } from './Cause';
import {
    CauseFromJSON,
    CauseFromJSONTyped,
    CauseToJSON,
} from './Cause';

/**
 * It is possible for an Base Report to be returned with missing account owner information. In such cases, the Base Report will contain warning data in the response, indicating why obtaining the owner information failed.
 * @export
 * @interface BaseReportWarning
 */
export interface BaseReportWarning {
    [key: string]: any | any;
    /**
     * The warning type, which will always be `BASE_REPORT_WARNING`
     * @type {string}
     * @memberof BaseReportWarning
     */
    warning_type: string;
    /**
     * 
     * @type {BaseReportWarningCode}
     * @memberof BaseReportWarning
     */
    warning_code: BaseReportWarningCode;
    /**
     * 
     * @type {Cause}
     * @memberof BaseReportWarning
     */
    cause: Cause;
}

/**
 * Check if a given object implements the BaseReportWarning interface.
 */
export function instanceOfBaseReportWarning(value: object): boolean {
    if (!('warning_type' in value)) return false;
    if (!('warning_code' in value)) return false;
    if (!('cause' in value)) return false;
    return true;
}

export function BaseReportWarningFromJSON(json: any): BaseReportWarning {
    return BaseReportWarningFromJSONTyped(json, false);
}

export function BaseReportWarningFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseReportWarning {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'warning_type': json['warning_type'],
        'warning_code': BaseReportWarningCodeFromJSON(json['warning_code']),
        'cause': CauseFromJSON(json['cause']),
    };
}

export function BaseReportWarningToJSON(value?: BaseReportWarning | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'warning_type': value['warning_type'],
        'warning_code': BaseReportWarningCodeToJSON(value['warning_code']),
        'cause': CauseToJSON(value['cause']),
    };
}

