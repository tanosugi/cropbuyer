/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Grower } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GrowerDetailViewOverridesProps = {
    GrowerDetailView?: PrimitiveOverrideProps<FlexProps>;
    "Frame 56"?: PrimitiveOverrideProps<FlexProps>;
    "close-circle"?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Frame 62"?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    GrowerDetailView34863286?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13"?: PrimitiveOverrideProps<FlexProps>;
    "Full Name"?: PrimitiveOverrideProps<TextProps>;
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type GrowerDetailViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    grower?: Grower;
} & {
    overrides?: GrowerDetailViewOverridesProps | undefined | null;
}>;
export default function GrowerDetailView(props: GrowerDetailViewProps): React.ReactElement;
