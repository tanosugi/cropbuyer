/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Farm } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditFarmViewOverridesProps = {
    EditFarmView?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<ViewProps>;
    "Edit Farm"?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Divider35463343?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField35463345?: PrimitiveOverrideProps<TextFieldProps>;
    TextField35463346?: PrimitiveOverrideProps<TextFieldProps>;
    TextField35463347?: PrimitiveOverrideProps<TextFieldProps>;
    TextField35463348?: PrimitiveOverrideProps<TextFieldProps>;
    TextField35463349?: PrimitiveOverrideProps<TextFieldProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Divider35463351?: PrimitiveOverrideProps<DividerProps>;
    "Frame 1"?: PrimitiveOverrideProps<ViewProps>;
    Button35463353?: PrimitiveOverrideProps<ButtonProps>;
    Button35463354?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type EditFarmViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    farm?: Farm;
} & {
    overrides?: EditFarmViewOverridesProps | undefined | null;
}>;
export default function EditFarmView(props: EditFarmViewProps): React.ReactElement;
