/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Farm } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FarmUpdateFormInputValues = {
    name?: string;
    growerName?: string;
    area?: string;
    latestStatus?: number;
    polygonString?: string;
    description?: string;
};
export declare type FarmUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    growerName?: ValidationFunction<string>;
    area?: ValidationFunction<string>;
    latestStatus?: ValidationFunction<number>;
    polygonString?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FarmUpdateFormOverridesProps = {
    FarmUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    growerName?: PrimitiveOverrideProps<TextFieldProps>;
    area?: PrimitiveOverrideProps<TextFieldProps>;
    latestStatus?: PrimitiveOverrideProps<TextFieldProps>;
    polygonString?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FarmUpdateFormProps = React.PropsWithChildren<{
    overrides?: FarmUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    farm?: Farm;
    onSubmit?: (fields: FarmUpdateFormInputValues) => FarmUpdateFormInputValues;
    onSuccess?: (fields: FarmUpdateFormInputValues) => void;
    onError?: (fields: FarmUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FarmUpdateFormInputValues) => FarmUpdateFormInputValues;
    onValidate?: FarmUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FarmUpdateForm(props: FarmUpdateFormProps): React.ReactElement;
