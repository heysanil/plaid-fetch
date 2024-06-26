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
 * The status of a transfer. Returned only when [Transfer UI](/docs/transfer/using-transfer-ui) is implemented.
 * 
 * - `COMPLETE` – The transfer was completed.
 * - `INCOMPLETE` – The transfer could not be completed. For help, see [Troubleshooting transfers](/docs/transfer/using-transfer-ui#troubleshooting-transfers).
 * @export
 */
export const LinkSessionSuccessMetadataTransferStatus = {
    Complete: 'COMPLETE',
    Incomplete: 'INCOMPLETE'
} as const;
export type LinkSessionSuccessMetadataTransferStatus = typeof LinkSessionSuccessMetadataTransferStatus[keyof typeof LinkSessionSuccessMetadataTransferStatus];


export function LinkSessionSuccessMetadataTransferStatusFromJSON(json: any): LinkSessionSuccessMetadataTransferStatus {
    return LinkSessionSuccessMetadataTransferStatusFromJSONTyped(json, false);
}

export function LinkSessionSuccessMetadataTransferStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkSessionSuccessMetadataTransferStatus {
    return json as LinkSessionSuccessMetadataTransferStatus;
}

export function LinkSessionSuccessMetadataTransferStatusToJSON(value?: LinkSessionSuccessMetadataTransferStatus | null): any {
    return value as any;
}

