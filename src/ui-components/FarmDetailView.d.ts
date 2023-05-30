/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Farm } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, RatingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FarmDetailViewOverridesProps = {
    FarmDetailView?: PrimitiveOverrideProps<FlexProps>;
    "Frame 56"?: PrimitiveOverrideProps<FlexProps>;
    "close-circle"?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    FarmCardView?: PrimitiveOverrideProps<FlexProps>;
    GrowerCardView?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 13"?: PrimitiveOverrideProps<FlexProps>;
    "Farm Name"?: PrimitiveOverrideProps<TextProps>;
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"?: PrimitiveOverrideProps<TextProps>;
    "Frame 29"?: PrimitiveOverrideProps<FlexProps>;
    "Area : 350 hectare"?: PrimitiveOverrideProps<TextProps>;
    "Frame 28"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 24"?: PrimitiveOverrideProps<FlexProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    "latest status"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FarmDetailViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    farm?: Farm;
    rectangle2?: React.ReactNode;
} & {
    overrides?: FarmDetailViewOverridesProps | undefined | null;
}>;
export default function FarmDetailView(props: FarmDetailViewProps): React.ReactElement;
