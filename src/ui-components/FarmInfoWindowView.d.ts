/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Farm } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, RatingProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FarmInfoWindowViewOverridesProps = {
    FarmInfoWindowView?: PrimitiveOverrideProps<FlexProps>;
    "Farm Name"?: PrimitiveOverrideProps<TextProps>;
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"?: PrimitiveOverrideProps<TextProps>;
    "Frame 29"?: PrimitiveOverrideProps<FlexProps>;
    "Area : 350 hectare"?: PrimitiveOverrideProps<TextProps>;
    "Frame 24"?: PrimitiveOverrideProps<FlexProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
} & EscapeHatchProps;
export declare type FarmInfoWindowViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    farm?: Farm;
} & {
    overrides?: FarmInfoWindowViewOverridesProps | undefined | null;
}>;
export default function FarmInfoWindowView(props: FarmInfoWindowViewProps): React.ReactElement;
