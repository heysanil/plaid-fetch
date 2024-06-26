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
 * Types of consent activities
 * @export
 */
export const ActivityType = {
    Unknown: 'UNKNOWN',
    ItemCreate: 'ITEM_CREATE',
    ItemImport: 'ITEM_IMPORT',
    ItemUpdate: 'ITEM_UPDATE',
    ItemUnlink: 'ITEM_UNLINK',
    PortalUnlink: 'PORTAL_UNLINK',
    PortalItemsDelete: 'PORTAL_ITEMS_DELETE',
    ItemRemove: 'ITEM_REMOVE',
    InvariantCheckerDeletion: 'INVARIANT_CHECKER_DELETION',
    ScopesUpdate: 'SCOPES_UPDATE'
} as const;
export type ActivityType = typeof ActivityType[keyof typeof ActivityType];


export function ActivityTypeFromJSON(json: any): ActivityType {
    return ActivityTypeFromJSONTyped(json, false);
}

export function ActivityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityType {
    return json as ActivityType;
}

export function ActivityTypeToJSON(value?: ActivityType | null): any {
    return value as any;
}

