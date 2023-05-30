/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CropCardViewProps } from "./CropCardView";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CropCardViewCollectionOverridesProps = {
    CropCardViewCollection?: PrimitiveOverrideProps<CollectionProps>;
    CropCardView?: CropCardViewProps;
} & EscapeHatchProps;
export declare type CropCardViewCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CropCardViewProps;
} & {
    overrides?: CropCardViewCollectionOverridesProps | undefined | null;
}>;
export default function CropCardViewCollection(props: CropCardViewCollectionProps): React.ReactElement;
