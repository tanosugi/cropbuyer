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
export declare type FarmCardViewOverridesProps = {
    FarmCardView?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 44"?: PrimitiveOverrideProps<FlexProps>;
    "Farm Name"?: PrimitiveOverrideProps<TextProps>;
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"?: PrimitiveOverrideProps<TextProps>;
    "Frame 29"?: PrimitiveOverrideProps<FlexProps>;
    "Area : 350 hectare"?: PrimitiveOverrideProps<TextProps>;
    "Frame 24"?: PrimitiveOverrideProps<FlexProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    "latest status"?: PrimitiveOverrideProps<TextProps>;
    "Frame 37"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 35"?: PrimitiveOverrideProps<FlexProps>;
    "map-marker-radius"?: PrimitiveOverrideProps<ViewProps>;
    Vector34743174?: PrimitiveOverrideProps<IconProps>;
    "show map"?: PrimitiveOverrideProps<TextProps>;
    "Frame 25"?: PrimitiveOverrideProps<FlexProps>;
    Vector34743177?: PrimitiveOverrideProps<IconProps>;
    "record list"?: PrimitiveOverrideProps<TextProps>;
    "Frame 8"?: PrimitiveOverrideProps<FlexProps>;
    delete34743180?: PrimitiveOverrideProps<ViewProps>;
    Vector34743181?: PrimitiveOverrideProps<IconProps>;
    delete34743182?: PrimitiveOverrideProps<TextProps>;
    "Frame 36"?: PrimitiveOverrideProps<FlexProps>;
    pencil?: PrimitiveOverrideProps<ViewProps>;
    Vector34743185?: PrimitiveOverrideProps<IconProps>;
    edit?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FarmCardViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    farm?: Farm;
    rectangle1?: React.ReactNode;
} & {
    overrides?: FarmCardViewOverridesProps | undefined | null;
}>;
export default function FarmCardView(props: FarmCardViewProps): React.ReactElement;
