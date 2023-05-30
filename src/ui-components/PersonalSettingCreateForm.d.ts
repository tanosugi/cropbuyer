/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PersonalSettingCreateFormInputValues = {
    mapLat?: string;
    mapLng?: string;
    mapZoom?: string;
    mapTilt?: string;
    mapRotate?: string;
};
export declare type PersonalSettingCreateFormValidationValues = {
    mapLat?: ValidationFunction<string>;
    mapLng?: ValidationFunction<string>;
    mapZoom?: ValidationFunction<string>;
    mapTilt?: ValidationFunction<string>;
    mapRotate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonalSettingCreateFormOverridesProps = {
    PersonalSettingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    mapLat?: PrimitiveOverrideProps<TextFieldProps>;
    mapLng?: PrimitiveOverrideProps<TextFieldProps>;
    mapZoom?: PrimitiveOverrideProps<TextFieldProps>;
    mapTilt?: PrimitiveOverrideProps<TextFieldProps>;
    mapRotate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PersonalSettingCreateFormProps = React.PropsWithChildren<{
    overrides?: PersonalSettingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PersonalSettingCreateFormInputValues) => PersonalSettingCreateFormInputValues;
    onSuccess?: (fields: PersonalSettingCreateFormInputValues) => void;
    onError?: (fields: PersonalSettingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PersonalSettingCreateFormInputValues) => PersonalSettingCreateFormInputValues;
    onValidate?: PersonalSettingCreateFormValidationValues;
} & React.CSSProperties>;
export default function PersonalSettingCreateForm(props: PersonalSettingCreateFormProps): React.ReactElement;
