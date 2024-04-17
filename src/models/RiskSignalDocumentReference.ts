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
import type { RiskSignalDocumentStatus } from './RiskSignalDocumentStatus';
import {
    RiskSignalDocumentStatusFromJSON,
    RiskSignalDocumentStatusFromJSONTyped,
    RiskSignalDocumentStatusToJSON,
} from './RiskSignalDocumentStatus';

/**
 * Object containing metadata for the document
 * @export
 * @interface RiskSignalDocumentReference
 */
export interface RiskSignalDocumentReference {
    [key: string]: any | any;
    /**
     * An identifier of the document referenced by the document metadata.
     * @type {string}
     * @memberof RiskSignalDocumentReference
     */
    document_id?: string;
    /**
     * The name of the document
     * @type {string}
     * @memberof RiskSignalDocumentReference
     */
    document_name?: string;
    /**
     * 
     * @type {RiskSignalDocumentStatus}
     * @memberof RiskSignalDocumentReference
     */
    status?: RiskSignalDocumentStatus;
}

/**
 * Check if a given object implements the RiskSignalDocumentReference interface.
 */
export function instanceOfRiskSignalDocumentReference(value: object): boolean {
    return true;
}

export function RiskSignalDocumentReferenceFromJSON(json: any): RiskSignalDocumentReference {
    return RiskSignalDocumentReferenceFromJSONTyped(json, false);
}

export function RiskSignalDocumentReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): RiskSignalDocumentReference {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'document_id': json['document_id'] == null ? undefined : json['document_id'],
        'document_name': json['document_name'] == null ? undefined : json['document_name'],
        'status': json['status'] == null ? undefined : RiskSignalDocumentStatusFromJSON(json['status']),
    };
}

export function RiskSignalDocumentReferenceToJSON(value?: RiskSignalDocumentReference | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'document_id': value['document_id'],
        'document_name': value['document_name'],
        'status': RiskSignalDocumentStatusToJSON(value['status']),
    };
}
