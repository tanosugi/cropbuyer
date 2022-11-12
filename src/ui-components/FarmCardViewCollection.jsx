/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { Farm } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import FarmCardView from "./FarmCardView";
import { Collection } from "@aws-amplify/ui-react";
export default function FarmCardViewCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.updatedAt(SortDirection.ASCENDING) };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Farm,
    pagination: itemsPagination,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "FarmCardViewCollection")}
    >
      {(item, index) => (
        <FarmCardView
          farm={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></FarmCardView>
      )}
    </Collection>
  );
}
