/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Grower } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditGrowerViewOverridesProps = {
    EditGrowerView?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<ViewProps>;
    "Edit Grower"?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Divider34482735?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField34482740?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34482741?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34552712?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34552719?: PrimitiveOverrideProps<TextFieldProps>;
    TextField34893110?: PrimitiveOverrideProps<TextFieldProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Divider34482743?: PrimitiveOverrideProps<DividerProps>;
    "Frame 1"?: PrimitiveOverrideProps<ViewProps>;
    Button34682734?: PrimitiveOverrideProps<ButtonProps>;
    Button34682738?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type EditGrowerViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    grower?: Grower;
} & {
    overrides?: EditGrowerViewOverridesProps | undefined | null;
}>;
export default function EditGrowerView(props: EditGrowerViewProps): React.ReactElement;
