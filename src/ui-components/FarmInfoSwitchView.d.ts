/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, SwitchFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FarmInfoSwitchViewOverridesProps = {
    FarmInfoSwitchView?: PrimitiveOverrideProps<FlexProps>;
    SwitchField35313213?: PrimitiveOverrideProps<SwitchFieldProps>;
    SwitchField35313257?: PrimitiveOverrideProps<SwitchFieldProps>;
    SwitchField35313263?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type FarmInfoSwitchViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FarmInfoSwitchViewOverridesProps | undefined | null;
}>;
export default function FarmInfoSwitchView(props: FarmInfoSwitchViewProps): React.ReactElement;
