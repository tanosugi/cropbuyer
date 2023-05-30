/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Grower } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenueViewOverridesProps = {
    MenueView?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4334743079"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 56"?: PrimitiveOverrideProps<FlexProps>;
    "close-circle"?: PrimitiveOverrideProps<FlexProps>;
    Vector35393166?: PrimitiveOverrideProps<IconProps>;
    "Frame 38"?: PrimitiveOverrideProps<FlexProps>;
    home?: PrimitiveOverrideProps<ViewProps>;
    Vector34743065?: PrimitiveOverrideProps<IconProps>;
    Button34743054?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 39"?: PrimitiveOverrideProps<FlexProps>;
    map?: PrimitiveOverrideProps<ViewProps>;
    Vector34743067?: PrimitiveOverrideProps<IconProps>;
    Button34743042?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 40"?: PrimitiveOverrideProps<FlexProps>;
    "account-group"?: PrimitiveOverrideProps<ViewProps>;
    Vector34743069?: PrimitiveOverrideProps<IconProps>;
    Button34743046?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 41"?: PrimitiveOverrideProps<FlexProps>;
    corn?: PrimitiveOverrideProps<ViewProps>;
    Vector34743071?: PrimitiveOverrideProps<IconProps>;
    Button34743050?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 4335393153"?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ViewProps>;
    Vector35393163?: PrimitiveOverrideProps<IconProps>;
    Button35393156?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 42"?: PrimitiveOverrideProps<FlexProps>;
    logout?: PrimitiveOverrideProps<ViewProps>;
    Vector34743073?: PrimitiveOverrideProps<IconProps>;
    Button34743060?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MenueViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    grower?: Grower;
} & {
    overrides?: MenueViewOverridesProps | undefined | null;
}>;
export default function MenueView(props: MenueViewProps): React.ReactElement;
