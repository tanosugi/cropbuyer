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
export declare type CropCreateFormInputValues = {
    name?: string;
    image_url?: string;
    description?: string;
    polygonColor?: string;
};
export declare type CropCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    polygonColor?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CropCreateFormOverridesProps = {
    CropCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    polygonColor?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CropCreateFormProps = React.PropsWithChildren<{
    overrides?: CropCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CropCreateFormInputValues) => CropCreateFormInputValues;
    onSuccess?: (fields: CropCreateFormInputValues) => void;
    onError?: (fields: CropCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CropCreateFormInputValues) => CropCreateFormInputValues;
    onValidate?: CropCreateFormValidationValues;
} & React.CSSProperties>;
export default function CropCreateForm(props: CropCreateFormProps): React.ReactElement;
