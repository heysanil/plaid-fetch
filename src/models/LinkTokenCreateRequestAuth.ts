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
 * Specifies options for initializing Link for use with the Auth product. This field can be used to enable or disable extended Auth flows for the resulting Link session. Omitting any field will result in a default that can be configured by your account manager. The default behavior described in the documentation is the default behavior that will apply if you have not requested your account manager to apply a different default.
 * @export
 * @interface LinkTokenCreateRequestAuth
 */
export interface LinkTokenCreateRequestAuth {
    /**
     * Specifies whether Auth Type Select is enabled for the Link session, allowing the end user to choose between linking instantly or manually prior to selecting their financial institution. Note that this can only be true if `same_day_microdeposits_enabled` is set to true.
     * @type {boolean}
     * @memberof LinkTokenCreateRequestAuth
     */
    auth_type_select_enabled?: boolean;
    /**
     * Specifies whether the Link session is enabled for the Automated Micro-deposits flow. Default behavior is `false`.
     * @type {boolean}
     * @memberof LinkTokenCreateRequestAuth
     */
    automated_microdeposits_enabled?: boolean;
    /**
     * Specifies whether the Link session is enabled for the Instant Match flow. As of November 2022, Instant Match will be enabled by default. Instant Match can be disabled by setting this field to `false`.
     * @type {boolean}
     * @memberof LinkTokenCreateRequestAuth
     */
    instant_match_enabled?: boolean;
    /**
     * Specifies whether the Link session is enabled for the Same Day Micro-deposits flow.  Default behavior is `false`.
     * @type {boolean}
     * @memberof LinkTokenCreateRequestAuth
     */
    same_day_microdeposits_enabled?: boolean;
    /**
     * Specifies whether the Link session is enabled for the Instant Micro-deposits flow.  Default behavior is `true`.
     * @type {boolean}
     * @memberof LinkTokenCreateRequestAuth
     */
    instant_microdeposits_enabled?: boolean;
    /**
     * Specifies what type of [Reroute to Credentials](https://plaid.com/docs/auth/coverage/same-day/#reroute-to-credentials) pane should be used in the Link session for the Same Day Micro-deposits flow. As of October 15 2023, the default setting is `OPTIONAL`.
     * @type {string}
     * @memberof LinkTokenCreateRequestAuth
     */
    reroute_to_credentials?: LinkTokenCreateRequestAuthRerouteToCredentialsEnum;
    /**
     * Specifies whether the Link session is enabled for the Database Match flow.
     * @type {boolean}
     * @memberof LinkTokenCreateRequestAuth
     */
    database_match_enabled?: boolean;
    /**
     * Specifies whether the Link session is enabled for the Database Insights flow.
     * @type {boolean}
     * @memberof LinkTokenCreateRequestAuth
     */
    database_insights_enabled?: boolean;
    /**
     * This field has been deprecated in favor of `auth_type_select_enabled`.
     * @type {string}
     * @memberof LinkTokenCreateRequestAuth
     * @deprecated
     */
    flow_type?: LinkTokenCreateRequestAuthFlowTypeEnum;
    /**
     * Specifies whether the Link session is enabled for SMS microdeposits verification. If omitted, behavior defaults to as if this was set to `true`.
     * @type {boolean}
     * @memberof LinkTokenCreateRequestAuth
     */
    sms_microdeposits_verification_enabled?: boolean;
}


/**
 * @export
 */
export const LinkTokenCreateRequestAuthRerouteToCredentialsEnum = {
    Off: 'OFF',
    Optional: 'OPTIONAL',
    Forced: 'FORCED'
} as const;
export type LinkTokenCreateRequestAuthRerouteToCredentialsEnum = typeof LinkTokenCreateRequestAuthRerouteToCredentialsEnum[keyof typeof LinkTokenCreateRequestAuthRerouteToCredentialsEnum];

/**
 * @export
 */
export const LinkTokenCreateRequestAuthFlowTypeEnum = {
    FlexibleAuth: 'FLEXIBLE_AUTH'
} as const;
export type LinkTokenCreateRequestAuthFlowTypeEnum = typeof LinkTokenCreateRequestAuthFlowTypeEnum[keyof typeof LinkTokenCreateRequestAuthFlowTypeEnum];


/**
 * Check if a given object implements the LinkTokenCreateRequestAuth interface.
 */
export function instanceOfLinkTokenCreateRequestAuth(value: object): boolean {
    return true;
}

export function LinkTokenCreateRequestAuthFromJSON(json: any): LinkTokenCreateRequestAuth {
    return LinkTokenCreateRequestAuthFromJSONTyped(json, false);
}

export function LinkTokenCreateRequestAuthFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkTokenCreateRequestAuth {
    if (json == null) {
        return json;
    }
    return {
        
        'auth_type_select_enabled': json['auth_type_select_enabled'] == null ? undefined : json['auth_type_select_enabled'],
        'automated_microdeposits_enabled': json['automated_microdeposits_enabled'] == null ? undefined : json['automated_microdeposits_enabled'],
        'instant_match_enabled': json['instant_match_enabled'] == null ? undefined : json['instant_match_enabled'],
        'same_day_microdeposits_enabled': json['same_day_microdeposits_enabled'] == null ? undefined : json['same_day_microdeposits_enabled'],
        'instant_microdeposits_enabled': json['instant_microdeposits_enabled'] == null ? undefined : json['instant_microdeposits_enabled'],
        'reroute_to_credentials': json['reroute_to_credentials'] == null ? undefined : json['reroute_to_credentials'],
        'database_match_enabled': json['database_match_enabled'] == null ? undefined : json['database_match_enabled'],
        'database_insights_enabled': json['database_insights_enabled'] == null ? undefined : json['database_insights_enabled'],
        'flow_type': json['flow_type'] == null ? undefined : json['flow_type'],
        'sms_microdeposits_verification_enabled': json['sms_microdeposits_verification_enabled'] == null ? undefined : json['sms_microdeposits_verification_enabled'],
    };
}

export function LinkTokenCreateRequestAuthToJSON(value?: LinkTokenCreateRequestAuth | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'auth_type_select_enabled': value['auth_type_select_enabled'],
        'automated_microdeposits_enabled': value['automated_microdeposits_enabled'],
        'instant_match_enabled': value['instant_match_enabled'],
        'same_day_microdeposits_enabled': value['same_day_microdeposits_enabled'],
        'instant_microdeposits_enabled': value['instant_microdeposits_enabled'],
        'reroute_to_credentials': value['reroute_to_credentials'],
        'database_match_enabled': value['database_match_enabled'],
        'database_insights_enabled': value['database_insights_enabled'],
        'flow_type': value['flow_type'],
        'sms_microdeposits_verification_enabled': value['sms_microdeposits_verification_enabled'],
    };
}
