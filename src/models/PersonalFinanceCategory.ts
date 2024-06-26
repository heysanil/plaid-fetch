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
 * Information describing the intent of the transaction. Most relevant for personal finance use cases, but not limited to such use cases.
 * 
 * See the [`taxonomy CSV file`](https://plaid.com/documents/transactions-personal-finance-category-taxonomy.csv) for a full list of personal finance categories. If you are migrating to personal finance categories from the legacy categories, also refer to the [`migration guide`](https://plaid.com/docs/transactions/pfc-migration/).
 * @export
 * @interface PersonalFinanceCategory
 */
export interface PersonalFinanceCategory {
    [key: string]: any | any;
    /**
     * A high level category that communicates the broad category of the transaction.
     * @type {string}
     * @memberof PersonalFinanceCategory
     */
    primary: string;
    /**
     * A granular category conveying the transaction's intent. This field can also be used as a unique identifier for the category.
     * @type {string}
     * @memberof PersonalFinanceCategory
     */
    detailed: string;
    /**
     * A description of how confident we are that the provided categories accurately describe the transaction intent.
     * 
     * `VERY_HIGH`: We are more than 98% confident that this category reflects the intent of the transaction.
     * `HIGH`: We are more than 90% confident that this category reflects the intent of the transaction.
     * `MEDIUM`: We are moderately confident that this category reflects the intent of the transaction.
     * `LOW`: This category may reflect the intent, but there may be other categories that are more accurate.
     * `UNKNOWN`: We don’t know the confidence level for this category.
     * @type {string}
     * @memberof PersonalFinanceCategory
     */
    confidence_level?: string;
}

/**
 * Check if a given object implements the PersonalFinanceCategory interface.
 */
export function instanceOfPersonalFinanceCategory(value: object): boolean {
    if (!('primary' in value)) return false;
    if (!('detailed' in value)) return false;
    return true;
}

export function PersonalFinanceCategoryFromJSON(json: any): PersonalFinanceCategory {
    return PersonalFinanceCategoryFromJSONTyped(json, false);
}

export function PersonalFinanceCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonalFinanceCategory {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'primary': json['primary'],
        'detailed': json['detailed'],
        'confidence_level': json['confidence_level'] == null ? undefined : json['confidence_level'],
    };
}

export function PersonalFinanceCategoryToJSON(value?: PersonalFinanceCategory | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'primary': value['primary'],
        'detailed': value['detailed'],
        'confidence_level': value['confidence_level'],
    };
}

