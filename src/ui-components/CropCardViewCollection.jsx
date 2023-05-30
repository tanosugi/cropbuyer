/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Crop } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CropCardView from "./CropCardView";
import { Collection } from "@aws-amplify/ui-react";
export default function CropCardViewCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = {
    sort: (s) => s.updatedAt(SortDirection.DESCENDING),
  };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Crop,
    pagination: itemsPagination,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      itemsPerPage={5}
      direction="column"
      justifyContent="center"
      items={items || []}
      {...getOverrideProps(overrides, "CropCardViewCollection")}
      {...rest}
    >
      {(item, index) => (
        <CropCardView
          crop={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CropCardView>
      )}
    </Collection>
  );
}
