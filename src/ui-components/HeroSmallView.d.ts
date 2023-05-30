/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroSmallViewOverridesProps = {
    HeroSmallView?: PrimitiveOverrideProps<ViewProps>;
    HeroMessage?: PrimitiveOverrideProps<FlexProps>;
    "Crop Buyer"?: PrimitiveOverrideProps<TextProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    "Web App for Crop Buyer\u2019s Farm Management"?: PrimitiveOverrideProps<TextProps>;
    "Users can plot farms as polygons with some info, upload pictures with GPS data, and see them on the map."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "unsplash:PdO-fDWXQ5I"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type HeroSmallViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeroSmallViewOverridesProps | undefined | null;
}>;
export default function HeroSmallView(props: HeroSmallViewProps): React.ReactElement;
