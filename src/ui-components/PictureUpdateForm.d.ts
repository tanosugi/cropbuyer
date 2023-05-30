/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Picture } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PictureUpdateFormInputValues = {
    s3KeyRaw?: string;
    s3KeyResized?: string;
    urlRaw?: string;
    urlResized?: string;
    lat?: number;
    lng?: number;
    createYear?: number;
    createDate?: string;
};
export declare type PictureUpdateFormValidationValues = {
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
export declare type PictureUpdateFormOverridesProps = {
    PictureUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    s3KeyRaw?: PrimitiveOverrideProps<TextFieldProps>;
    s3KeyResized?: PrimitiveOverrideProps<TextFieldProps>;
    urlRaw?: PrimitiveOverrideProps<TextFieldProps>;
    urlResized?: PrimitiveOverrideProps<TextFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    lng?: PrimitiveOverrideProps<TextFieldProps>;
    createYear?: PrimitiveOverrideProps<TextFieldProps>;
    createDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PictureUpdateFormProps = React.PropsWithChildren<{
    overrides?: PictureUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    picture?: Picture;
    onSubmit?: (fields: PictureUpdateFormInputValues) => PictureUpdateFormInputValues;
    onSuccess?: (fields: PictureUpdateFormInputValues) => void;
    onError?: (fields: PictureUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PictureUpdateFormInputValues) => PictureUpdateFormInputValues;
    onValidate?: PictureUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PictureUpdateForm(props: PictureUpdateFormProps): React.ReactElement;
