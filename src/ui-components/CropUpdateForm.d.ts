/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Crop } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CropUpdateFormInputValues = {
    name?: string;
    image_url?: string;
    description?: string;
    polygonColor?: string;
};
export declare type CropUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    polygonColor?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CropUpdateFormOverridesProps = {
    CropUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    polygonColor?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CropUpdateFormProps = React.PropsWithChildren<{
    overrides?: CropUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    crop?: Crop;
    onSubmit?: (fields: CropUpdateFormInputValues) => CropUpdateFormInputValues;
    onSuccess?: (fields: CropUpdateFormInputValues) => void;
    onError?: (fields: CropUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CropUpdateFormInputValues) => CropUpdateFormInputValues;
    onValidate?: CropUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CropUpdateForm(props: CropUpdateFormProps): React.ReactElement;
