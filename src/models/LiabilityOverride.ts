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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';
import type { PSLFStatus } from './PSLFStatus';
import {
    PSLFStatusFromJSON,
    PSLFStatusFromJSONTyped,
    PSLFStatusToJSON,
} from './PSLFStatus';
import type { StudentLoanRepaymentModel } from './StudentLoanRepaymentModel';
import {
    StudentLoanRepaymentModelFromJSON,
    StudentLoanRepaymentModelFromJSONTyped,
    StudentLoanRepaymentModelToJSON,
} from './StudentLoanRepaymentModel';
import type { StudentLoanStatus } from './StudentLoanStatus';
import {
    StudentLoanStatusFromJSON,
    StudentLoanStatusFromJSONTyped,
    StudentLoanStatusToJSON,
} from './StudentLoanStatus';

/**
 * Used to configure Sandbox test data for the Liabilities product
 * @export
 * @interface LiabilityOverride
 */
export interface LiabilityOverride {
    [key: string]: any | any;
    /**
     * The type of the liability object, either `credit` or `student`. Mortgages are not currently supported in the custom Sandbox.
     * @type {string}
     * @memberof LiabilityOverride
     */
    type: string;
    /**
     * The purchase APR percentage value. For simplicity, this is the only interest rate used to calculate interest charges. Can only be set if `type` is `credit`.
     * @type {number}
     * @memberof LiabilityOverride
     */
    purchase_apr: number;
    /**
     * The cash APR percentage value. Can only be set if `type` is `credit`.
     * @type {number}
     * @memberof LiabilityOverride
     */
    cash_apr: number;
    /**
     * The balance transfer APR percentage value. Can only be set if `type` is `credit`.
     * @type {number}
     * @memberof LiabilityOverride
     */
    balance_transfer_apr: number;
    /**
     * The special APR percentage value. Can only be set if `type` is `credit`.
     * @type {number}
     * @memberof LiabilityOverride
     */
    special_apr: number;
    /**
     * Override the `last_payment_amount` field. Can only be set if `type` is `credit`.
     * @type {number}
     * @memberof LiabilityOverride
     */
    last_payment_amount: number;
    /**
     * Override the `minimum_payment_amount` field. Can only be set if `type` is `credit` or `student`.
     * @type {number}
     * @memberof LiabilityOverride
     */
    minimum_payment_amount: number;
    /**
     * Override the `is_overdue` field
     * @type {boolean}
     * @memberof LiabilityOverride
     */
    is_overdue: boolean;
    /**
     * The date on which the loan was initially lent, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) (YYYY-MM-DD) format. Can only be set if `type` is `student`.
     * @type {Date}
     * @memberof LiabilityOverride
     */
    origination_date: Date;
    /**
     * The original loan principal. Can only be set if `type` is `student`.
     * @type {number}
     * @memberof LiabilityOverride
     */
    principal: number;
    /**
     * The interest rate on the loan as a percentage. Can only be set if `type` is `student`.
     * @type {number}
     * @memberof LiabilityOverride
     */
    nominal_apr: number;
    /**
     * If set, interest capitalization begins at the given number of months after loan origination. By default interest is never capitalized. Can only be set if `type` is `student`.
     * @type {number}
     * @memberof LiabilityOverride
     */
    interest_capitalization_grace_period_months: number;
    /**
     * 
     * @type {StudentLoanRepaymentModel}
     * @memberof LiabilityOverride
     */
    repayment_model: StudentLoanRepaymentModel;
    /**
     * Override the `expected_payoff_date` field. Can only be set if `type` is `student`.
     * @type {Date}
     * @memberof LiabilityOverride
     */
    expected_payoff_date: Date;
    /**
     * Override the `guarantor` field. Can only be set if `type` is `student`.
     * @type {string}
     * @memberof LiabilityOverride
     */
    guarantor: string;
    /**
     * Override the `is_federal` field. Can only be set if `type` is `student`.
     * @type {boolean}
     * @memberof LiabilityOverride
     */
    is_federal: boolean;
    /**
     * Override the `loan_name` field. Can only be set if `type` is `student`.
     * @type {string}
     * @memberof LiabilityOverride
     */
    loan_name: string;
    /**
     * 
     * @type {StudentLoanStatus}
     * @memberof LiabilityOverride
     */
    loan_status: StudentLoanStatus;
    /**
     * Override the `payment_reference_number` field. Can only be set if `type` is `student`.
     * @type {string}
     * @memberof LiabilityOverride
     */
    payment_reference_number: string;
    /**
     * 
     * @type {PSLFStatus}
     * @memberof LiabilityOverride
     */
    pslf_status: PSLFStatus;
    /**
     * Override the `repayment_plan.description` field. Can only be set if `type` is `student`.
     * @type {string}
     * @memberof LiabilityOverride
     */
    repayment_plan_description: string;
    /**
     * Override the `repayment_plan.type` field. Can only be set if `type` is `student`. Possible values are: `"extended graduated"`, `"extended standard"`, `"graduated"`, `"income-contingent repayment"`, `"income-based repayment"`, `"interest only"`, `"other"`, `"pay as you earn"`, `"revised pay as you earn"`, `"standard"`, or `"saving on a valuable education"`.
     * @type {string}
     * @memberof LiabilityOverride
     */
    repayment_plan_type: string;
    /**
     * Override the `sequence_number` field. Can only be set if `type` is `student`.
     * @type {string}
     * @memberof LiabilityOverride
     */
    sequence_number: string;
    /**
     * 
     * @type {Address}
     * @memberof LiabilityOverride
     */
    servicer_address: Address;
}

/**
 * Check if a given object implements the LiabilityOverride interface.
 */
export function instanceOfLiabilityOverride(value: object): boolean {
    if (!('type' in value)) return false;
    if (!('purchase_apr' in value)) return false;
    if (!('cash_apr' in value)) return false;
    if (!('balance_transfer_apr' in value)) return false;
    if (!('special_apr' in value)) return false;
    if (!('last_payment_amount' in value)) return false;
    if (!('minimum_payment_amount' in value)) return false;
    if (!('is_overdue' in value)) return false;
    if (!('origination_date' in value)) return false;
    if (!('principal' in value)) return false;
    if (!('nominal_apr' in value)) return false;
    if (!('interest_capitalization_grace_period_months' in value)) return false;
    if (!('repayment_model' in value)) return false;
    if (!('expected_payoff_date' in value)) return false;
    if (!('guarantor' in value)) return false;
    if (!('is_federal' in value)) return false;
    if (!('loan_name' in value)) return false;
    if (!('loan_status' in value)) return false;
    if (!('payment_reference_number' in value)) return false;
    if (!('pslf_status' in value)) return false;
    if (!('repayment_plan_description' in value)) return false;
    if (!('repayment_plan_type' in value)) return false;
    if (!('sequence_number' in value)) return false;
    if (!('servicer_address' in value)) return false;
    return true;
}

export function LiabilityOverrideFromJSON(json: any): LiabilityOverride {
    return LiabilityOverrideFromJSONTyped(json, false);
}

export function LiabilityOverrideFromJSONTyped(json: any, ignoreDiscriminator: boolean): LiabilityOverride {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'type': json['type'],
        'purchase_apr': json['purchase_apr'],
        'cash_apr': json['cash_apr'],
        'balance_transfer_apr': json['balance_transfer_apr'],
        'special_apr': json['special_apr'],
        'last_payment_amount': json['last_payment_amount'],
        'minimum_payment_amount': json['minimum_payment_amount'],
        'is_overdue': json['is_overdue'],
        'origination_date': (new Date(json['origination_date'])),
        'principal': json['principal'],
        'nominal_apr': json['nominal_apr'],
        'interest_capitalization_grace_period_months': json['interest_capitalization_grace_period_months'],
        'repayment_model': StudentLoanRepaymentModelFromJSON(json['repayment_model']),
        'expected_payoff_date': (new Date(json['expected_payoff_date'])),
        'guarantor': json['guarantor'],
        'is_federal': json['is_federal'],
        'loan_name': json['loan_name'],
        'loan_status': StudentLoanStatusFromJSON(json['loan_status']),
        'payment_reference_number': json['payment_reference_number'],
        'pslf_status': PSLFStatusFromJSON(json['pslf_status']),
        'repayment_plan_description': json['repayment_plan_description'],
        'repayment_plan_type': json['repayment_plan_type'],
        'sequence_number': json['sequence_number'],
        'servicer_address': AddressFromJSON(json['servicer_address']),
    };
}

export function LiabilityOverrideToJSON(value?: LiabilityOverride | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'type': value['type'],
        'purchase_apr': value['purchase_apr'],
        'cash_apr': value['cash_apr'],
        'balance_transfer_apr': value['balance_transfer_apr'],
        'special_apr': value['special_apr'],
        'last_payment_amount': value['last_payment_amount'],
        'minimum_payment_amount': value['minimum_payment_amount'],
        'is_overdue': value['is_overdue'],
        'origination_date': ((value['origination_date']).toISOString().substring(0,10)),
        'principal': value['principal'],
        'nominal_apr': value['nominal_apr'],
        'interest_capitalization_grace_period_months': value['interest_capitalization_grace_period_months'],
        'repayment_model': StudentLoanRepaymentModelToJSON(value['repayment_model']),
        'expected_payoff_date': ((value['expected_payoff_date']).toISOString().substring(0,10)),
        'guarantor': value['guarantor'],
        'is_federal': value['is_federal'],
        'loan_name': value['loan_name'],
        'loan_status': StudentLoanStatusToJSON(value['loan_status']),
        'payment_reference_number': value['payment_reference_number'],
        'pslf_status': PSLFStatusToJSON(value['pslf_status']),
        'repayment_plan_description': value['repayment_plan_description'],
        'repayment_plan_type': value['repayment_plan_type'],
        'sequence_number': value['sequence_number'],
        'servicer_address': AddressToJSON(value['servicer_address']),
    };
}
