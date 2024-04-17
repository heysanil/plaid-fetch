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
import type { LinkSessionExitMetadata } from './LinkSessionExitMetadata';
import {
    LinkSessionExitMetadataFromJSON,
    LinkSessionExitMetadataFromJSONTyped,
    LinkSessionExitMetadataToJSON,
} from './LinkSessionExitMetadata';
import type { PlaidError } from './PlaidError';
import {
    PlaidErrorFromJSON,
    PlaidErrorFromJSONTyped,
    PlaidErrorToJSON,
} from './PlaidError';

/**
 * An object representing an [onExit](https://plaid.com/docs/link/web/#onexit) callback from Link.
 * @export
 * @interface LinkSessionExit
 */
export interface LinkSessionExit {
    [key: string]: any | any;
    /**
     * 
     * @type {PlaidError}
     * @memberof LinkSessionExit
     */
    error: PlaidError | null;
    /**
     * 
     * @type {LinkSessionExitMetadata}
     * @memberof LinkSessionExit
     */
    metadata: LinkSessionExitMetadata | null;
}

/**
 * Check if a given object implements the LinkSessionExit interface.
 */
export function instanceOfLinkSessionExit(value: object): boolean {
    if (!('error' in value)) return false;
    if (!('metadata' in value)) return false;
    return true;
}

export function LinkSessionExitFromJSON(json: any): LinkSessionExit {
    return LinkSessionExitFromJSONTyped(json, false);
}

export function LinkSessionExitFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkSessionExit {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'error': PlaidErrorFromJSON(json['error']),
        'metadata': LinkSessionExitMetadataFromJSON(json['metadata']),
    };
}

export function LinkSessionExitToJSON(value?: LinkSessionExit | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'error': PlaidErrorToJSON(value['error']),
        'metadata': LinkSessionExitMetadataToJSON(value['metadata']),
    };
}
