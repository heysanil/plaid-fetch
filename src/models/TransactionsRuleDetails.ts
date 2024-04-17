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
import type { TransactionsRuleField } from './TransactionsRuleField';
import {
    TransactionsRuleFieldFromJSON,
    TransactionsRuleFieldFromJSONTyped,
    TransactionsRuleFieldToJSON,
} from './TransactionsRuleField';
import type { TransactionsRuleType } from './TransactionsRuleType';
import {
    TransactionsRuleTypeFromJSON,
    TransactionsRuleTypeFromJSONTyped,
    TransactionsRuleTypeToJSON,
} from './TransactionsRuleType';

/**
 * A representation of transactions rule details.
 * @export
 * @interface TransactionsRuleDetails
 */
export interface TransactionsRuleDetails {
    /**
     * 
     * @type {TransactionsRuleField}
     * @memberof TransactionsRuleDetails
     */
    field: TransactionsRuleField;
    /**
     * 
     * @type {TransactionsRuleType}
     * @memberof TransactionsRuleDetails
     */
    type: TransactionsRuleType;
    /**
     * For TRANSACTION_ID field, provide transaction_id. For NAME field, provide a string pattern.
     * 
     * @type {string}
     * @memberof TransactionsRuleDetails
     */
    query: string;
}

/**
 * Check if a given object implements the TransactionsRuleDetails interface.
 */
export function instanceOfTransactionsRuleDetails(value: object): boolean {
    if (!('field' in value)) return false;
    if (!('type' in value)) return false;
    if (!('query' in value)) return false;
    return true;
}

export function TransactionsRuleDetailsFromJSON(json: any): TransactionsRuleDetails {
    return TransactionsRuleDetailsFromJSONTyped(json, false);
}

export function TransactionsRuleDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsRuleDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'field': TransactionsRuleFieldFromJSON(json['field']),
        'type': TransactionsRuleTypeFromJSON(json['type']),
        'query': json['query'],
    };
}

export function TransactionsRuleDetailsToJSON(value?: TransactionsRuleDetails | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'field': TransactionsRuleFieldToJSON(value['field']),
        'type': TransactionsRuleTypeToJSON(value['type']),
        'query': value['query'],
    };
}
