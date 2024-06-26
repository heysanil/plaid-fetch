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
import type { CreditBankIncomeAccountType } from './CreditBankIncomeAccountType';
import {
    CreditBankIncomeAccountTypeFromJSON,
    CreditBankIncomeAccountTypeFromJSONTyped,
    CreditBankIncomeAccountTypeToJSON,
} from './CreditBankIncomeAccountType';
import type { DepositoryAccountSubtype } from './DepositoryAccountSubtype';
import {
    DepositoryAccountSubtypeFromJSON,
    DepositoryAccountSubtypeFromJSONTyped,
    DepositoryAccountSubtypeToJSON,
} from './DepositoryAccountSubtype';
import type { Owner } from './Owner';
import {
    OwnerFromJSON,
    OwnerFromJSONTyped,
    OwnerToJSON,
} from './Owner';

/**
 * Account data corresponding to the item from which Partner Insights were generated from
 * @export
 * @interface CraPartnerInsightsItemAccount
 */
export interface CraPartnerInsightsItemAccount {
    [key: string]: any | any;
    /**
     * The last 2-4 alphanumeric characters of an account's official account number.
     * Note that the mask may be non-unique between an Item's accounts, and it may also
     * not match the mask that the bank displays to the user.
     * @type {string}
     * @memberof CraPartnerInsightsItemAccount
     */
    mask: string | null;
    /**
     * The name of the account
     * @type {string}
     * @memberof CraPartnerInsightsItemAccount
     */
    name: string;
    /**
     * The official name of the bank account.
     * @type {string}
     * @memberof CraPartnerInsightsItemAccount
     */
    official_name: string | null;
    /**
     * 
     * @type {DepositoryAccountSubtype}
     * @memberof CraPartnerInsightsItemAccount
     */
    subtype: DepositoryAccountSubtype;
    /**
     * 
     * @type {CreditBankIncomeAccountType}
     * @memberof CraPartnerInsightsItemAccount
     */
    type: CreditBankIncomeAccountType;
    /**
     * Data returned by the financial institution about the account owner or owners. Identity information is optional, so field may return an empty array.
     * @type {Array<Owner>}
     * @memberof CraPartnerInsightsItemAccount
     */
    owners: Array<Owner>;
}

/**
 * Check if a given object implements the CraPartnerInsightsItemAccount interface.
 */
export function instanceOfCraPartnerInsightsItemAccount(value: object): boolean {
    if (!('mask' in value)) return false;
    if (!('name' in value)) return false;
    if (!('official_name' in value)) return false;
    if (!('subtype' in value)) return false;
    if (!('type' in value)) return false;
    if (!('owners' in value)) return false;
    return true;
}

export function CraPartnerInsightsItemAccountFromJSON(json: any): CraPartnerInsightsItemAccount {
    return CraPartnerInsightsItemAccountFromJSONTyped(json, false);
}

export function CraPartnerInsightsItemAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CraPartnerInsightsItemAccount {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'mask': json['mask'],
        'name': json['name'],
        'official_name': json['official_name'],
        'subtype': DepositoryAccountSubtypeFromJSON(json['subtype']),
        'type': CreditBankIncomeAccountTypeFromJSON(json['type']),
        'owners': ((json['owners'] as Array<any>).map(OwnerFromJSON)),
    };
}

export function CraPartnerInsightsItemAccountToJSON(value?: CraPartnerInsightsItemAccount | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'mask': value['mask'],
        'name': value['name'],
        'official_name': value['official_name'],
        'subtype': DepositoryAccountSubtypeToJSON(value['subtype']),
        'type': CreditBankIncomeAccountTypeToJSON(value['type']),
        'owners': ((value['owners'] as Array<any>).map(OwnerToJSON)),
    };
}

