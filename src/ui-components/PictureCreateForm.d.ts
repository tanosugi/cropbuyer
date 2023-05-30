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
export declare type PictureCreateFormInputValues = {
    s3KeyRaw?: string;
    s3KeyResized?: string;
    urlRaw?: string;
    urlResized?: string;
    lat?: number;
    lng?: number;
    createYear?: number;
    createDate?: string;
};
export declare type PictureCreateFormValidationValues = {
    s3KeyRaw?: ValidationFunction<string>;
    s3KeyResized?: ValidationFunction<string>;
    urlRaw?: ValidationFunction<string>;
    urlResized?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    lng?: ValidationFunction<number>;
    createYear?: ValidationFunction<number>;
    createDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PictureCreateFormOverridesProps = {
    PictureCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    s3KeyRaw?: PrimitiveOverrideProps<TextFieldProps>;
    s3KeyResized?: PrimitiveOverrideProps<TextFieldProps>;
    urlRaw?: PrimitiveOverrideProps<TextFieldProps>;
    urlResized?: PrimitiveOverrideProps<TextFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    lng?: PrimitiveOverrideProps<TextFieldProps>;
    createYear?: PrimitiveOverrideProps<TextFieldProps>;
    createDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PictureCreateFormProps = React.PropsWithChildren<{
    overrides?: PictureCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PictureCreateFormInputValues) => PictureCreateFormInputValues;
    onSuccess?: (fields: PictureCreateFormInputValues) => void;
    onError?: (fields: PictureCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PictureCreateFormInputValues) => PictureCreateFormInputValues;
    onValidate?: PictureCreateFormValidationValues;
} & React.CSSProperties>;
export default function PictureCreateForm(props: PictureCreateFormProps): React.ReactElement;
