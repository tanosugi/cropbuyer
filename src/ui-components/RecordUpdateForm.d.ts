/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Record } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RecordUpdateFormInputValues = {
    year?: number;
    cropName?: string;
    statusRating?: number;
    yield?: number;
    volume?: number;
    farmName?: string;
    image_url?: string;
    memo?: string;
};
export declare type RecordUpdateFormValidationValues = {
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
export declare type RecordUpdateFormOverridesProps = {
    RecordUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    cropName?: PrimitiveOverrideProps<TextFieldProps>;
    statusRating?: PrimitiveOverrideProps<TextFieldProps>;
    yield?: PrimitiveOverrideProps<TextFieldProps>;
    volume?: PrimitiveOverrideProps<TextFieldProps>;
    farmName?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    memo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecordUpdateFormProps = React.PropsWithChildren<{
    overrides?: RecordUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    record?: Record;
    onSubmit?: (fields: RecordUpdateFormInputValues) => RecordUpdateFormInputValues;
    onSuccess?: (fields: RecordUpdateFormInputValues) => void;
    onError?: (fields: RecordUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecordUpdateFormInputValues) => RecordUpdateFormInputValues;
    onValidate?: RecordUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RecordUpdateForm(props: RecordUpdateFormProps): React.ReactElement;
