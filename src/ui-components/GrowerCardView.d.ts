/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Grower } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GrowerCardViewOverridesProps = {
    GrowerCardView?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 13"?: PrimitiveOverrideProps<FlexProps>;
    "Full Name"?: PrimitiveOverrideProps<TextProps>;
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"?: PrimitiveOverrideProps<TextProps>;
    "Frame 33"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32"?: PrimitiveOverrideProps<FlexProps>;
    "list-box-outline"?: PrimitiveOverrideProps<ViewProps>;
    Vector34793089?: PrimitiveOverrideProps<IconProps>;
    "farm list"?: PrimitiveOverrideProps<TextProps>;
    "Frame 10"?: PrimitiveOverrideProps<FlexProps>;
    email34793092?: PrimitiveOverrideProps<ViewProps>;
    Vector34793093?: PrimitiveOverrideProps<IconProps>;
    email34793094?: PrimitiveOverrideProps<TextProps>;
    "Frame 9"?: PrimitiveOverrideProps<FlexProps>;
    phone34793096?: PrimitiveOverrideProps<ViewProps>;
    Vector34793097?: PrimitiveOverrideProps<IconProps>;
    phone34793098?: PrimitiveOverrideProps<TextProps>;
    "Frame 8"?: PrimitiveOverrideProps<FlexProps>;
    delete34793100?: PrimitiveOverrideProps<ViewProps>;
    Vector34793101?: PrimitiveOverrideProps<IconProps>;
    delete34793102?: PrimitiveOverrideProps<TextProps>;
    "Frame 7"?: PrimitiveOverrideProps<FlexProps>;
    pencil?: PrimitiveOverrideProps<ViewProps>;
    Vector34793105?: PrimitiveOverrideProps<IconProps>;
    edit?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type GrowerCardViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    grower?: Grower;
} & {
    overrides?: GrowerCardViewOverridesProps | undefined | null;
}>;
export default function GrowerCardView(props: GrowerCardViewProps): React.ReactElement;
