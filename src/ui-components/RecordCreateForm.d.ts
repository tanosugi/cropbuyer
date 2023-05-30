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
export declare type RecordCreateFormInputValues = {
    year?: number;
    cropName?: string;
    statusRating?: number;
    yield?: number;
    volume?: number;
    farmName?: string;
    image_url?: string;
    memo?: string;
};
export declare type RecordCreateFormValidationValues = {
    year?: ValidationFunction<number>;
    cropName?: ValidationFunction<string>;
    statusRating?: ValidationFunction<number>;
    yield?: ValidationFunction<number>;
    volume?: ValidationFunction<number>;
    farmName?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    memo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecordCreateFormOverridesProps = {
    RecordCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    cropName?: PrimitiveOverrideProps<TextFieldProps>;
    statusRating?: PrimitiveOverrideProps<TextFieldProps>;
    yield?: PrimitiveOverrideProps<TextFieldProps>;
    volume?: PrimitiveOverrideProps<TextFieldProps>;
    farmName?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    memo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecordCreateFormProps = React.PropsWithChildren<{
    overrides?: RecordCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RecordCreateFormInputValues) => RecordCreateFormInputValues;
    onSuccess?: (fields: RecordCreateFormInputValues) => void;
    onError?: (fields: RecordCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecordCreateFormInputValues) => RecordCreateFormInputValues;
    onValidate?: RecordCreateFormValidationValues;
} & React.CSSProperties>;
export default function RecordCreateForm(props: RecordCreateFormProps): React.ReactElement;
