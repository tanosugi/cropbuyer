/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Record } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, RatingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecordCardViewOverridesProps = {
    RecordCardView?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 13"?: PrimitiveOverrideProps<FlexProps>;
    "Farm Name in 2022"?: PrimitiveOverrideProps<TextProps>;
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"?: PrimitiveOverrideProps<TextProps>;
    "Frame 65"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 63"?: PrimitiveOverrideProps<FlexProps>;
    "Yeild: XX%"?: PrimitiveOverrideProps<TextProps>;
    "Volume: XXMT"?: PrimitiveOverrideProps<TextProps>;
    "Frame 64"?: PrimitiveOverrideProps<FlexProps>;
    "Crop: soy"?: PrimitiveOverrideProps<TextProps>;
    "Farmer: mike"?: PrimitiveOverrideProps<TextProps>;
    "Frame 67"?: PrimitiveOverrideProps<FlexProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    status?: PrimitiveOverrideProps<TextProps>;
    "Frame 66"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 8"?: PrimitiveOverrideProps<FlexProps>;
    delete34943255?: PrimitiveOverrideProps<ViewProps>;
    Vector34943256?: PrimitiveOverrideProps<IconProps>;
    delete34943257?: PrimitiveOverrideProps<TextProps>;
    "Frame 7"?: PrimitiveOverrideProps<FlexProps>;
    pencil?: PrimitiveOverrideProps<ViewProps>;
    Vector34943260?: PrimitiveOverrideProps<IconProps>;
    edit?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RecordCardViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    record?: Record;
} & {
    overrides?: RecordCardViewOverridesProps | undefined | null;
}>;
export default function RecordCardView(props: RecordCardViewProps): React.ReactElement;
