/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Record } from "../models";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type RecordCardViewProps = React.PropsWithChildren<Partial<FlexProps> & {
    record?: Record;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function RecordCardView(props: RecordCardViewProps): React.ReactElement;