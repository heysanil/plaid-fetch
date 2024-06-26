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


/**
 * Description of the reason you want to evaluate risk.
 * `ONBOARDING`: user links a first bank account as part of the onboarding flow of your platform.
 * `NEW_ACCOUNT`: user links another bank account or replaces the currently linked bank account on your platform.
 * `INFORMATION_CHANGE`: user changes their information on your platform, e.g., updating their phone number.
 * `DORMANT_USER`:  you decide to re-evaluate a user that becomes active after a period of inactivity.  
 * `OTHER`: any other reasons not listed here
 * Possible values:  `ONBOARDING`, `NEW_ACCOUNT`, `INFORMATION_CHANGE`, `DORMANT_USER`, `OTHER`
 * 
 * @export
 */
export const BeaconAccountRiskEvaluateEvaluationReason = {
    Onboarding: 'ONBOARDING',
    NewAccount: 'NEW_ACCOUNT',
    InformationChange: 'INFORMATION_CHANGE',
    DormantUser: 'DORMANT_USER',
    Other: 'OTHER'
} as const;
export type BeaconAccountRiskEvaluateEvaluationReason = typeof BeaconAccountRiskEvaluateEvaluationReason[keyof typeof BeaconAccountRiskEvaluateEvaluationReason];


export function BeaconAccountRiskEvaluateEvaluationReasonFromJSON(json: any): BeaconAccountRiskEvaluateEvaluationReason {
    return BeaconAccountRiskEvaluateEvaluationReasonFromJSONTyped(json, false);
}

export function BeaconAccountRiskEvaluateEvaluationReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconAccountRiskEvaluateEvaluationReason {
    return json as BeaconAccountRiskEvaluateEvaluationReason;
}

export function BeaconAccountRiskEvaluateEvaluationReasonToJSON(value?: BeaconAccountRiskEvaluateEvaluationReason | null): any {
    return value as any;
}

