/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Crop } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CropCardViewOverridesProps = {
    CropCardView?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Crop Name"?: PrimitiveOverrideProps<TextProps>;
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"?: PrimitiveOverrideProps<TextProps>;
    "Frame 37"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 8"?: PrimitiveOverrideProps<FlexProps>;
    delete34823334?: PrimitiveOverrideProps<ViewProps>;
    Vector34823335?: PrimitiveOverrideProps<IconProps>;
    delete34823336?: PrimitiveOverrideProps<TextProps>;
    "Frame 36"?: PrimitiveOverrideProps<FlexProps>;
    pencil?: PrimitiveOverrideProps<ViewProps>;
    Vector34823339?: PrimitiveOverrideProps<IconProps>;
    edit?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CropCardViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    crop?: Crop;
} & {
    overrides?: CropCardViewOverridesProps | undefined | null;
}>;
export default function CropCardView(props: CropCardViewProps): React.ReactElement;
