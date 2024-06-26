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
import type { TransferCreditUsageConfiguration } from './TransferCreditUsageConfiguration';
import {
    TransferCreditUsageConfigurationFromJSON,
    TransferCreditUsageConfigurationFromJSONTyped,
    TransferCreditUsageConfigurationToJSON,
} from './TransferCreditUsageConfiguration';
import type { TransferDebitUsageConfiguration } from './TransferDebitUsageConfiguration';
import {
    TransferDebitUsageConfigurationFromJSON,
    TransferDebitUsageConfigurationFromJSONTyped,
    TransferDebitUsageConfigurationToJSON,
} from './TransferDebitUsageConfiguration';
import type { TransferFundingAccount } from './TransferFundingAccount';
import {
    TransferFundingAccountFromJSON,
    TransferFundingAccountFromJSONTyped,
    TransferFundingAccountToJSON,
} from './TransferFundingAccount';
import type { TransferOriginatorAddress } from './TransferOriginatorAddress';
import {
    TransferOriginatorAddressFromJSON,
    TransferOriginatorAddressFromJSONTyped,
    TransferOriginatorAddressToJSON,
} from './TransferOriginatorAddress';

/**
 * The diligence information for the originator.
 * @export
 * @interface TransferOriginatorDiligence
 */
export interface TransferOriginatorDiligence {
    /**
     * The business name of the originator.
     * @type {string}
     * @memberof TransferOriginatorDiligence
     */
    dba: string;
    /**
     * The tax ID of the originator.
     * @type {string}
     * @memberof TransferOriginatorDiligence
     */
    tax_id: string;
    /**
     * 
     * @type {TransferCreditUsageConfiguration}
     * @memberof TransferOriginatorDiligence
     */
    credit_usage_configuration?: TransferCreditUsageConfiguration;
    /**
     * 
     * @type {TransferDebitUsageConfiguration}
     * @memberof TransferOriginatorDiligence
     */
    debit_usage_configuration?: TransferDebitUsageConfiguration;
    /**
     * 
     * @type {TransferOriginatorAddress}
     * @memberof TransferOriginatorDiligence
     */
    address: TransferOriginatorAddress;
    /**
     * The website of the originator.
     * @type {string}
     * @memberof TransferOriginatorDiligence
     */
    website: string;
    /**
     * The NAICS code of the originator.
     * @type {string}
     * @memberof TransferOriginatorDiligence
     */
    naics_code: string;
    /**
     * 
     * @type {TransferFundingAccount}
     * @memberof TransferOriginatorDiligence
     */
    funding_account: TransferFundingAccount;
}

/**
 * Check if a given object implements the TransferOriginatorDiligence interface.
 */
export function instanceOfTransferOriginatorDiligence(value: object): boolean {
    if (!('dba' in value)) return false;
    if (!('tax_id' in value)) return false;
    if (!('address' in value)) return false;
    if (!('website' in value)) return false;
    if (!('naics_code' in value)) return false;
    if (!('funding_account' in value)) return false;
    return true;
}

export function TransferOriginatorDiligenceFromJSON(json: any): TransferOriginatorDiligence {
    return TransferOriginatorDiligenceFromJSONTyped(json, false);
}

export function TransferOriginatorDiligenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferOriginatorDiligence {
    if (json == null) {
        return json;
    }
    return {
        
        'dba': json['dba'],
        'tax_id': json['tax_id'],
        'credit_usage_configuration': json['credit_usage_configuration'] == null ? undefined : TransferCreditUsageConfigurationFromJSON(json['credit_usage_configuration']),
        'debit_usage_configuration': json['debit_usage_configuration'] == null ? undefined : TransferDebitUsageConfigurationFromJSON(json['debit_usage_configuration']),
        'address': TransferOriginatorAddressFromJSON(json['address']),
        'website': json['website'],
        'naics_code': json['naics_code'],
        'funding_account': TransferFundingAccountFromJSON(json['funding_account']),
    };
}

export function TransferOriginatorDiligenceToJSON(value?: TransferOriginatorDiligence | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'dba': value['dba'],
        'tax_id': value['tax_id'],
        'credit_usage_configuration': TransferCreditUsageConfigurationToJSON(value['credit_usage_configuration']),
        'debit_usage_configuration': TransferDebitUsageConfigurationToJSON(value['debit_usage_configuration']),
        'address': TransferOriginatorAddressToJSON(value['address']),
        'website': value['website'],
        'naics_code': value['naics_code'],
        'funding_account': TransferFundingAccountToJSON(value['funding_account']),
    };
}

