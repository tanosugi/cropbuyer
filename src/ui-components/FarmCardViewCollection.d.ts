/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FarmCardViewProps } from "./FarmCardView";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FarmCardViewCollectionOverridesProps = {
    FarmCardViewCollection?: PrimitiveOverrideProps<CollectionProps>;
    FarmCardView?: FarmCardViewProps;
} & EscapeHatchProps;
export declare type FarmCardViewCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FarmCardViewProps;
} & {
    overrides?: FarmCardViewCollectionOverridesProps | undefined | null;
}>;
export default function FarmCardViewCollection(props: FarmCardViewCollectionProps): React.ReactElement;
