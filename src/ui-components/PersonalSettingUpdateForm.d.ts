/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PersonalSetting } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PersonalSettingUpdateFormInputValues = {
    mapLat?: string;
    mapLng?: string;
    mapZoom?: string;
    mapTilt?: string;
    mapRotate?: string;
};
export declare type PersonalSettingUpdateFormValidationValues = {
    mapLat?: ValidationFunction<string>;
    mapLng?: ValidationFunction<string>;
    mapZoom?: ValidationFunction<string>;
    mapTilt?: ValidationFunction<string>;
    mapRotate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonalSettingUpdateFormOverridesProps = {
    PersonalSettingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    mapLat?: PrimitiveOverrideProps<TextFieldProps>;
    mapLng?: PrimitiveOverrideProps<TextFieldProps>;
    mapZoom?: PrimitiveOverrideProps<TextFieldProps>;
    mapTilt?: PrimitiveOverrideProps<TextFieldProps>;
    mapRotate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PersonalSettingUpdateFormProps = React.PropsWithChildren<{
    overrides?: PersonalSettingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    personalSetting?: PersonalSetting;
    onSubmit?: (fields: PersonalSettingUpdateFormInputValues) => PersonalSettingUpdateFormInputValues;
    onSuccess?: (fields: PersonalSettingUpdateFormInputValues) => void;
    onError?: (fields: PersonalSettingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PersonalSettingUpdateFormInputValues) => PersonalSettingUpdateFormInputValues;
    onValidate?: PersonalSettingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PersonalSettingUpdateForm(props: PersonalSettingUpdateFormProps): React.ReactElement;
