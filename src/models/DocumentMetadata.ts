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
import type { DocType } from './DocType';
import {
    DocTypeFromJSON,
    DocTypeFromJSONTyped,
    DocTypeToJSON,
} from './DocType';

/**
 * An object representing metadata from the end user's uploaded document.
 * @export
 * @interface DocumentMetadata
 */
export interface DocumentMetadata {
    [key: string]: any | any;
    /**
     * The name of the document.
     * @type {string}
     * @memberof DocumentMetadata
     */
    name?: string;
    /**
     * The processing status of the document.
     * 
     * `PROCESSING_COMPLETE`: The document was successfully processed.
     * 
     * `DOCUMENT_ERROR`: The document could not be processed. Possible causes include: The document was an unacceptable document type such as an offer letter or bank statement, the document image was cropped or blurry, or the document was corrupted.
     * 
     * `UNKNOWN` or `null`: An internal error occurred. If this happens repeatedly, contact support or your Plaid account manager.
     * @type {string}
     * @memberof DocumentMetadata
     */
    status?: string;
    /**
     * An identifier of the document that is also present in the paystub response.
     * @type {string}
     * @memberof DocumentMetadata
     */
    doc_id?: string;
    /**
     * 
     * @type {DocType}
     * @memberof DocumentMetadata
     */
    doc_type?: DocType;
}

/**
 * Check if a given object implements the DocumentMetadata interface.
 */
export function instanceOfDocumentMetadata(value: object): boolean {
    return true;
}

export function DocumentMetadataFromJSON(json: any): DocumentMetadata {
    return DocumentMetadataFromJSONTyped(json, false);
}

export function DocumentMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentMetadata {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'name': json['name'] == null ? undefined : json['name'],
        'status': json['status'] == null ? undefined : json['status'],
        'doc_id': json['doc_id'] == null ? undefined : json['doc_id'],
        'doc_type': json['doc_type'] == null ? undefined : DocTypeFromJSON(json['doc_type']),
    };
}

export function DocumentMetadataToJSON(value?: DocumentMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'name': value['name'],
        'status': value['status'],
        'doc_id': value['doc_id'],
        'doc_type': DocTypeToJSON(value['doc_type']),
    };
}
