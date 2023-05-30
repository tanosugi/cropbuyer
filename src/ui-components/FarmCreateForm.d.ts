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
export declare type FarmCreateFormInputValues = {
    name?: string;
    growerName?: string;
    area?: string;
    latestStatus?: number;
    polygonString?: string;
    description?: string;
};
export declare type FarmCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    growerName?: ValidationFunction<string>;
    area?: ValidationFunction<string>;
    latestStatus?: ValidationFunction<number>;
    polygonString?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FarmCreateFormOverridesProps = {
    FarmCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    growerName?: PrimitiveOverrideProps<TextFieldProps>;
    area?: PrimitiveOverrideProps<TextFieldProps>;
    latestStatus?: PrimitiveOverrideProps<TextFieldProps>;
    polygonString?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FarmCreateFormProps = React.PropsWithChildren<{
    overrides?: FarmCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FarmCreateFormInputValues) => FarmCreateFormInputValues;
    onSuccess?: (fields: FarmCreateFormInputValues) => void;
    onError?: (fields: FarmCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FarmCreateFormInputValues) => FarmCreateFormInputValues;
    onValidate?: FarmCreateFormValidationValues;
} & React.CSSProperties>;
export default function FarmCreateForm(props: FarmCreateFormProps): React.ReactElement;
