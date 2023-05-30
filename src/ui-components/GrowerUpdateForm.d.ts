/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Grower } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GrowerUpdateFormInputValues = {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    image_url?: string;
    description?: string;
    s3Key?: string;
};
export declare type GrowerUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    s3Key?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GrowerUpdateFormOverridesProps = {
    GrowerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    s3Key?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GrowerUpdateFormProps = React.PropsWithChildren<{
    overrides?: GrowerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    grower?: Grower;
    onSubmit?: (fields: GrowerUpdateFormInputValues) => GrowerUpdateFormInputValues;
    onSuccess?: (fields: GrowerUpdateFormInputValues) => void;
    onError?: (fields: GrowerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GrowerUpdateFormInputValues) => GrowerUpdateFormInputValues;
    onValidate?: GrowerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GrowerUpdateForm(props: GrowerUpdateFormProps): React.ReactElement;
