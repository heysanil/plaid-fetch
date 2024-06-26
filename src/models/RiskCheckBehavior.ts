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
import type { RiskCheckBehaviorBotDetectedLabel } from './RiskCheckBehaviorBotDetectedLabel';
import {
    RiskCheckBehaviorBotDetectedLabelFromJSON,
    RiskCheckBehaviorBotDetectedLabelFromJSONTyped,
    RiskCheckBehaviorBotDetectedLabelToJSON,
} from './RiskCheckBehaviorBotDetectedLabel';
import type { RiskCheckBehaviorFraudRingDetectedLabel } from './RiskCheckBehaviorFraudRingDetectedLabel';
import {
    RiskCheckBehaviorFraudRingDetectedLabelFromJSON,
    RiskCheckBehaviorFraudRingDetectedLabelFromJSONTyped,
    RiskCheckBehaviorFraudRingDetectedLabelToJSON,
} from './RiskCheckBehaviorFraudRingDetectedLabel';
import type { RiskCheckBehaviorUserInteractionsLabel } from './RiskCheckBehaviorUserInteractionsLabel';
import {
    RiskCheckBehaviorUserInteractionsLabelFromJSON,
    RiskCheckBehaviorUserInteractionsLabelFromJSONTyped,
    RiskCheckBehaviorUserInteractionsLabelToJSON,
} from './RiskCheckBehaviorUserInteractionsLabel';

/**
 * Result summary object specifying values for `behavior` attributes of risk check, when available.
 * @export
 * @interface RiskCheckBehavior
 */
export interface RiskCheckBehavior {
    [key: string]: any | any;
    /**
     * 
     * @type {RiskCheckBehaviorUserInteractionsLabel}
     * @memberof RiskCheckBehavior
     */
    user_interactions: RiskCheckBehaviorUserInteractionsLabel;
    /**
     * 
     * @type {RiskCheckBehaviorFraudRingDetectedLabel}
     * @memberof RiskCheckBehavior
     */
    fraud_ring_detected: RiskCheckBehaviorFraudRingDetectedLabel;
    /**
     * 
     * @type {RiskCheckBehaviorBotDetectedLabel}
     * @memberof RiskCheckBehavior
     */
    bot_detected: RiskCheckBehaviorBotDetectedLabel;
}

/**
 * Check if a given object implements the RiskCheckBehavior interface.
 */
export function instanceOfRiskCheckBehavior(value: object): boolean {
    if (!('user_interactions' in value)) return false;
    if (!('fraud_ring_detected' in value)) return false;
    if (!('bot_detected' in value)) return false;
    return true;
}

export function RiskCheckBehaviorFromJSON(json: any): RiskCheckBehavior {
    return RiskCheckBehaviorFromJSONTyped(json, false);
}

export function RiskCheckBehaviorFromJSONTyped(json: any, ignoreDiscriminator: boolean): RiskCheckBehavior {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'user_interactions': RiskCheckBehaviorUserInteractionsLabelFromJSON(json['user_interactions']),
        'fraud_ring_detected': RiskCheckBehaviorFraudRingDetectedLabelFromJSON(json['fraud_ring_detected']),
        'bot_detected': RiskCheckBehaviorBotDetectedLabelFromJSON(json['bot_detected']),
    };
}

export function RiskCheckBehaviorToJSON(value?: RiskCheckBehavior | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'user_interactions': RiskCheckBehaviorUserInteractionsLabelToJSON(value['user_interactions']),
        'fraud_ring_detected': RiskCheckBehaviorFraudRingDetectedLabelToJSON(value['fraud_ring_detected']),
        'bot_detected': RiskCheckBehaviorBotDetectedLabelToJSON(value['bot_detected']),
    };
}

