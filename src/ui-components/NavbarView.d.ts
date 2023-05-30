/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavbarViewOverridesProps = {
    NavbarView?: PrimitiveOverrideProps<FlexProps>;
    "Frame 2"?: PrimitiveOverrideProps<FlexProps>;
    barley?: PrimitiveOverrideProps<ViewProps>;
    Vector34583151?: PrimitiveOverrideProps<IconProps>;
    "Crop Buyer"?: PrimitiveOverrideProps<TextProps>;
    menu?: PrimitiveOverrideProps<ViewProps>;
    Vector34692815?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NavbarViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavbarViewOverridesProps | undefined | null;
}>;
export default function NavbarView(props: NavbarViewProps): React.ReactElement;
