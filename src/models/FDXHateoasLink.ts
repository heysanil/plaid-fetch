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
import type { FDXContentTypes } from './FDXContentTypes';
import {
    FDXContentTypesFromJSON,
    FDXContentTypesFromJSONTyped,
    FDXContentTypesToJSON,
} from './FDXContentTypes';
import type { FDXHateoasLinkAction } from './FDXHateoasLinkAction';
import {
    FDXHateoasLinkActionFromJSON,
    FDXHateoasLinkActionFromJSONTyped,
    FDXHateoasLinkActionToJSON,
} from './FDXHateoasLinkAction';

/**
 * REST application constraint (Hypermedia As The Engine Of Application State)
 * @export
 * @interface FDXHateoasLink
 */
export interface FDXHateoasLink {
    /**
     * URL to invoke the action on the resource
     * @type {string}
     * @memberof FDXHateoasLink
     */
    href: string;
    /**
     * 
     * @type {FDXHateoasLinkAction}
     * @memberof FDXHateoasLink
     */
    action?: FDXHateoasLinkAction;
    /**
     * Relation of this link to its containing entity, as defined by and with many example relation values at [IETF RFC5988](https://datatracker.ietf.org/doc/html/rfc5988)
     * @type {string}
     * @memberof FDXHateoasLink
     */
    rel?: string;
    /**
     * Content-types that can be used in the Accept header
     * @type {Array<FDXContentTypes>}
     * @memberof FDXHateoasLink
     */
    types?: Array<FDXContentTypes>;
}

/**
 * Check if a given object implements the FDXHateoasLink interface.
 */
export function instanceOfFDXHateoasLink(value: object): boolean {
    if (!('href' in value)) return false;
    return true;
}

export function FDXHateoasLinkFromJSON(json: any): FDXHateoasLink {
    return FDXHateoasLinkFromJSONTyped(json, false);
}

export function FDXHateoasLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): FDXHateoasLink {
    if (json == null) {
        return json;
    }
    return {
        
        'href': json['href'],
        'action': json['action'] == null ? undefined : FDXHateoasLinkActionFromJSON(json['action']),
        'rel': json['rel'] == null ? undefined : json['rel'],
        'types': json['types'] == null ? undefined : ((json['types'] as Array<any>).map(FDXContentTypesFromJSON)),
    };
}

export function FDXHateoasLinkToJSON(value?: FDXHateoasLink | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'href': value['href'],
        'action': FDXHateoasLinkActionToJSON(value['action']),
        'rel': value['rel'],
        'types': value['types'] == null ? undefined : ((value['types'] as Array<any>).map(FDXContentTypesToJSON)),
    };
}
