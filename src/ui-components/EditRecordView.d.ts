/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Record } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditRecordViewOverridesProps = {
    EditRecordView?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<ViewProps>;
    "Edit Record"?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Divider34704591?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField34704593?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34933148?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34933155?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34704594?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34704595?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34933183?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34893124?: PrimitiveOverrideProps<TextFieldProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Divider34704598?: PrimitiveOverrideProps<DividerProps>;
    "Frame 1"?: PrimitiveOverrideProps<ViewProps>;
    Button34704600?: PrimitiveOverrideProps<ButtonProps>;
    Button34704601?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type EditRecordViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    record?: Record;
} & {
    overrides?: EditRecordViewOverridesProps | undefined | null;
}>;
export default function EditRecordView(props: EditRecordViewProps): React.ReactElement;
