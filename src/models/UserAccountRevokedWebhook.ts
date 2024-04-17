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
import type { PlaidError } from './PlaidError';
import {
    PlaidErrorFromJSON,
    PlaidErrorFromJSONTyped,
    PlaidErrorToJSON,
} from './PlaidError';
import type { WebhookEnvironmentValues } from './WebhookEnvironmentValues';
import {
    WebhookEnvironmentValuesFromJSON,
    WebhookEnvironmentValuesFromJSONTyped,
    WebhookEnvironmentValuesToJSON,
} from './WebhookEnvironmentValues';

/**
 * The `USER_ACCOUNT_REVOKED` webhook is fired when an end user has revoked access to their account on the Data Provider's portal. This webhook is currently sent only for Chase Items, but may be sent in the future for other financial institutions that allow account-level permissions revocation through their portals.
 * 
 * If you are using Auth and receive this webhook for a Chase Item, this webhook indicates that the TAN associated with the revoked account is no longer valid and cannot be used to create new transfers. You should not create new ACH transfers for the account that was revoked until access has been re-granted.
 * 
 * You can request the user to re-grant access to their account by sending them through [update mode](https://www.plaid.com/docs/link/update-mode). Alternatively, they may re-grant access directly through the Data Provider's portal.
 * 
 * After the user has re-granted access, Auth customers should call the auth endpoint again to obtain the new TAN.
 * @export
 * @interface UserAccountRevokedWebhook
 */
export interface UserAccountRevokedWebhook {
    [key: string]: any | any;
    /**
     * `ITEM`
     * @type {string}
     * @memberof UserAccountRevokedWebhook
     */
    webhook_type: string;
    /**
     * `USER_ACCOUNT_REVOKED`
     * @type {string}
     * @memberof UserAccountRevokedWebhook
     */
    webhook_code: string;
    /**
     * The `item_id` of the Item associated with this webhook, warning, or error
     * @type {string}
     * @memberof UserAccountRevokedWebhook
     */
    item_id: string;
    /**
     * The external account ID of the affected account
     * @type {string}
     * @memberof UserAccountRevokedWebhook
     */
    account_id: string;
    /**
     * 
     * @type {PlaidError}
     * @memberof UserAccountRevokedWebhook
     */
    error?: PlaidError;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof UserAccountRevokedWebhook
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the UserAccountRevokedWebhook interface.
 */
export function instanceOfUserAccountRevokedWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('item_id' in value)) return false;
    if (!('account_id' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function UserAccountRevokedWebhookFromJSON(json: any): UserAccountRevokedWebhook {
    return UserAccountRevokedWebhookFromJSONTyped(json, false);
}

export function UserAccountRevokedWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAccountRevokedWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'item_id': json['item_id'],
        'account_id': json['account_id'],
        'error': json['error'] == null ? undefined : PlaidErrorFromJSON(json['error']),
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function UserAccountRevokedWebhookToJSON(value?: UserAccountRevokedWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'item_id': value['item_id'],
        'account_id': value['account_id'],
        'error': PlaidErrorToJSON(value['error']),
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}
