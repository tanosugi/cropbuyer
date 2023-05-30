/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, SliderFieldProps, SwitchFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MapControlViewOverridesProps = {
    MapControlView?: PrimitiveOverrideProps<FlexProps>;
    FarmInfoSwitchView?: PrimitiveOverrideProps<FlexProps>;
    SwitchField35313346?: PrimitiveOverrideProps<SwitchFieldProps>;
    SwitchField35313347?: PrimitiveOverrideProps<SwitchFieldProps>;
    SwitchField35313348?: PrimitiveOverrideProps<SwitchFieldProps>;
    SliderField?: PrimitiveOverrideProps<SliderFieldProps>;
} & EscapeHatchProps;
export declare type MapControlViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MapControlViewOverridesProps | undefined | null;
}>;
export default function MapControlView(props: MapControlViewProps): React.ReactElement;
