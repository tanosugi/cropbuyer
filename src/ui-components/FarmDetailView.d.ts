/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Farm } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type FarmDetailViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    farm?: Farm;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function FarmDetailView(props: FarmDetailViewProps): React.ReactElement;
