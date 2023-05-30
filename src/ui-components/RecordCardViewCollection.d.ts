/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RecordCardViewProps } from "./RecordCardView";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecordCardViewCollectionOverridesProps = {
    RecordCardViewCollection?: PrimitiveOverrideProps<CollectionProps>;
    RecordCardView?: RecordCardViewProps;
} & EscapeHatchProps;
export declare type RecordCardViewCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => RecordCardViewProps;
} & {
    overrides?: RecordCardViewCollectionOverridesProps | undefined | null;
}>;
export default function RecordCardViewCollection(props: RecordCardViewCollectionProps): React.ReactElement;
