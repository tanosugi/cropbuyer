/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Crop } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditCropViewOverridesProps = {
    EditCropView?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<ViewProps>;
    "Edit Crop"?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Divider34704536?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField34704538?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34704539?: PrimitiveOverrideProps<TextFieldProps>;
    TextField35403167?: PrimitiveOverrideProps<TextFieldProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Divider34704543?: PrimitiveOverrideProps<DividerProps>;
    "Frame 1"?: PrimitiveOverrideProps<ViewProps>;
    Button34704545?: PrimitiveOverrideProps<ButtonProps>;
    Button34704546?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type EditCropViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    crop?: Crop;
} & {
    overrides?: EditCropViewOverridesProps | undefined | null;
}>;
export default function EditCropView(props: EditCropViewProps): React.ReactElement;
