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
import type { FDXHateoasLink } from './FDXHateoasLink';
import {
    FDXHateoasLinkFromJSON,
    FDXHateoasLinkFromJSONTyped,
    FDXHateoasLinkToJSON,
} from './FDXHateoasLink';
import type { FDXNotificationCategory } from './FDXNotificationCategory';
import {
    FDXNotificationCategoryFromJSON,
    FDXNotificationCategoryFromJSONTyped,
    FDXNotificationCategoryToJSON,
} from './FDXNotificationCategory';
import type { FDXNotificationPayload } from './FDXNotificationPayload';
import {
    FDXNotificationPayloadFromJSON,
    FDXNotificationPayloadFromJSONTyped,
    FDXNotificationPayloadToJSON,
} from './FDXNotificationPayload';
import type { FDXNotificationPriority } from './FDXNotificationPriority';
import {
    FDXNotificationPriorityFromJSON,
    FDXNotificationPriorityFromJSONTyped,
    FDXNotificationPriorityToJSON,
} from './FDXNotificationPriority';
import type { FDXNotificationSeverity } from './FDXNotificationSeverity';
import {
    FDXNotificationSeverityFromJSON,
    FDXNotificationSeverityFromJSONTyped,
    FDXNotificationSeverityToJSON,
} from './FDXNotificationSeverity';
import type { FDXNotificationType } from './FDXNotificationType';
import {
    FDXNotificationTypeFromJSON,
    FDXNotificationTypeFromJSONTyped,
    FDXNotificationTypeToJSON,
} from './FDXNotificationType';
import type { FDXParty } from './FDXParty';
import {
    FDXPartyFromJSON,
    FDXPartyFromJSONTyped,
    FDXPartyToJSON,
} from './FDXParty';

/**
 * Provides the base fields of a notification. Clients will read the `type` property to determine the expected notification payload
 * @export
 * @interface FDXNotification
 */
export interface FDXNotification {
    /**
     * Id of notification
     * @type {string}
     * @memberof FDXNotification
     */
    notificationId: string;
    /**
     * 
     * @type {FDXNotificationType}
     * @memberof FDXNotification
     */
    type: FDXNotificationType;
    /**
     * ISO 8601 date-time in format 'YYYY-MM-DDThh:mm:ss.nnn[Z|[+|-]hh:mm]' according to [IETF RFC3339](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)
     * @type {Date}
     * @memberof FDXNotification
     */
    sentOn: Date;
    /**
     * 
     * @type {FDXNotificationCategory}
     * @memberof FDXNotification
     */
    category: FDXNotificationCategory;
    /**
     * 
     * @type {FDXNotificationSeverity}
     * @memberof FDXNotification
     */
    severity?: FDXNotificationSeverity;
    /**
     * 
     * @type {FDXNotificationPriority}
     * @memberof FDXNotification
     */
    priority?: FDXNotificationPriority;
    /**
     * 
     * @type {FDXParty}
     * @memberof FDXNotification
     */
    publisher?: FDXParty;
    /**
     * 
     * @type {FDXParty}
     * @memberof FDXNotification
     */
    subscriber?: FDXParty;
    /**
     * 
     * @type {FDXNotificationPayload}
     * @memberof FDXNotification
     */
    notificationPayload: FDXNotificationPayload;
    /**
     * 
     * @type {FDXHateoasLink}
     * @memberof FDXNotification
     */
    url?: FDXHateoasLink;
}

/**
 * Check if a given object implements the FDXNotification interface.
 */
export function instanceOfFDXNotification(value: object): boolean {
    if (!('notificationId' in value)) return false;
    if (!('type' in value)) return false;
    if (!('sentOn' in value)) return false;
    if (!('category' in value)) return false;
    if (!('notificationPayload' in value)) return false;
    return true;
}

export function FDXNotificationFromJSON(json: any): FDXNotification {
    return FDXNotificationFromJSONTyped(json, false);
}

export function FDXNotificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): FDXNotification {
    if (json == null) {
        return json;
    }
    return {
        
        'notificationId': json['notificationId'],
        'type': FDXNotificationTypeFromJSON(json['type']),
        'sentOn': (new Date(json['sentOn'])),
        'category': FDXNotificationCategoryFromJSON(json['category']),
        'severity': json['severity'] == null ? undefined : FDXNotificationSeverityFromJSON(json['severity']),
        'priority': json['priority'] == null ? undefined : FDXNotificationPriorityFromJSON(json['priority']),
        'publisher': json['publisher'] == null ? undefined : FDXPartyFromJSON(json['publisher']),
        'subscriber': json['subscriber'] == null ? undefined : FDXPartyFromJSON(json['subscriber']),
        'notificationPayload': FDXNotificationPayloadFromJSON(json['notificationPayload']),
        'url': json['url'] == null ? undefined : FDXHateoasLinkFromJSON(json['url']),
    };
}

export function FDXNotificationToJSON(value?: FDXNotification | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'notificationId': value['notificationId'],
        'type': FDXNotificationTypeToJSON(value['type']),
        'sentOn': ((value['sentOn']).toISOString()),
        'category': FDXNotificationCategoryToJSON(value['category']),
        'severity': FDXNotificationSeverityToJSON(value['severity']),
        'priority': FDXNotificationPriorityToJSON(value['priority']),
        'publisher': FDXPartyToJSON(value['publisher']),
        'subscriber': FDXPartyToJSON(value['subscriber']),
        'notificationPayload': FDXNotificationPayloadToJSON(value['notificationPayload']),
        'url': FDXHateoasLinkToJSON(value['url']),
    };
}

