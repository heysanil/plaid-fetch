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
 * A globally unique and human readable ID type, specific to the country and document category. For more context on this field, see [Hybrid Input Validation](https://plaid.com/docs/identity-verification/hybrid-input-validation).
 * @export
 */
export const IDNumberType = {
    ArDni: 'ar_dni',
    AuDriversLicense: 'au_drivers_license',
    AuPassport: 'au_passport',
    BrCpf: 'br_cpf',
    CaSin: 'ca_sin',
    ClRun: 'cl_run',
    CnResidentCard: 'cn_resident_card',
    CoNit: 'co_nit',
    DkCpr: 'dk_cpr',
    EgNationalId: 'eg_national_id',
    EsDni: 'es_dni',
    EsNie: 'es_nie',
    HkHkid: 'hk_hkid',
    InPan: 'in_pan',
    ItCf: 'it_cf',
    JoCivilId: 'jo_civil_id',
    JpMyNumber: 'jp_my_number',
    KeHudumaNamba: 'ke_huduma_namba',
    KwCivilId: 'kw_civil_id',
    MxCurp: 'mx_curp',
    MxRfc: 'mx_rfc',
    MyNric: 'my_nric',
    NgNin: 'ng_nin',
    NzDriversLicense: 'nz_drivers_license',
    OmCivilId: 'om_civil_id',
    PhPsn: 'ph_psn',
    PlPesel: 'pl_pesel',
    RoCnp: 'ro_cnp',
    SaNationalId: 'sa_national_id',
    SePin: 'se_pin',
    SgNric: 'sg_nric',
    TrTcKimlik: 'tr_tc_kimlik',
    UsSsn: 'us_ssn',
    UsSsnLast4: 'us_ssn_last_4',
    ZaSmartId: 'za_smart_id'
} as const;
export type IDNumberType = typeof IDNumberType[keyof typeof IDNumberType];


export function IDNumberTypeFromJSON(json: any): IDNumberType {
    return IDNumberTypeFromJSONTyped(json, false);
}

export function IDNumberTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IDNumberType {
    return json as IDNumberType;
}

export function IDNumberTypeToJSON(value?: IDNumberType | null): any {
    return value as any;
}

