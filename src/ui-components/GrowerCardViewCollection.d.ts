/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GrowerCardViewProps } from "./GrowerCardView";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GrowerCardViewCollectionOverridesProps = {
    GrowerCardViewCollection?: PrimitiveOverrideProps<CollectionProps>;
    GrowerCardView?: GrowerCardViewProps;
} & EscapeHatchProps;
export declare type GrowerCardViewCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => GrowerCardViewProps;
} & {
    overrides?: GrowerCardViewCollectionOverridesProps | undefined | null;
}>;
export default function GrowerCardViewCollection(props: GrowerCardViewCollectionProps): React.ReactElement;
