/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Farm } from "../models";
import { schema } from "../models/schema";
import { Flex, Icon, Rating, Text, View } from "@aws-amplify/ui-react";
export default function FarmCardView(props) {
  const { farm, rectangle1, overrides, ...rest } = props;
  const frameTwoFiveOnClick = useNavigateAction({
    type: "url",
    url: `${"../record-list/"}${farm?.id}`,
  });
  const frameEightOnClick = useDataStoreDeleteAction({
    id: farm?.id,
    model: Farm,
    schema: schema,
  });
  return (
    <Flex
      gap="5px"
      direction="row"
      width="319px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="5px 5px 5px 5px"
      backgroundColor="rgba(250,250,250,1)"
      {...rest}
      {...getOverrideProps(overrides, "FarmCardView")}
    >
      <View
        width="112px"
        height="112px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        children={rectangle1}
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 44")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={farm?.name}
          {...getOverrideProps(overrides, "Farm Name")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="12px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
          width="192px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={farm?.description}
          {...getOverrideProps(
            overrides,
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          )}
        ></Text>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="3px 0px 3px 0px"
          {...getOverrideProps(overrides, "Frame 29")}
        >
          <Text
            fontFamily="Inter"
            fontSize="10px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="12px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Area : "}${farm?.area}${" hectare"}`}
            {...getOverrideProps(overrides, "Area : 350 hectare")}
          ></Text>
        </Flex>
        <Flex
          gap="-4px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 24")}
        >
          <Rating
            display="flex"
            gap="8px"
            direction="row"
            width="137px"
            height="unset"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            size="default"
            value={farm?.latestStatus}
            {...getOverrideProps(overrides, "Rating")}
          ></Rating>
          <Text
            fontFamily="Inter"
            fontSize="6px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="12px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="latest status"
            {...getOverrideProps(overrides, "latest status")}
          ></Text>
        </Flex>
        <Flex
          gap="11px"
          direction="row"
          width="192px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 37")}
        >
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 35")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "map-marker-radius")}
            >
              <Icon
                width="16px"
                height="21px"
                viewBox={{ minX: 0, minY: 0, width: 16, height: 21 }}
                paths={[
                  {
                    d: "M8 0C11.31 0 14 2.66 14 5.95C14 10.41 8 17 8 17C8 17 2 10.41 2 5.95C2 2.66 4.69 0 8 0ZM8 4C7.46957 4 6.96086 4.21071 6.58579 4.58579C6.21071 4.96086 6 5.46957 6 6C6 6.53043 6.21071 7.03914 6.58579 7.41421C6.96086 7.78929 7.46957 8 8 8C8.53043 8 9.03914 7.78929 9.41421 7.41421C9.78929 7.03914 10 6.53043 10 6C10 5.46957 9.78929 4.96086 9.41421 4.58579C9.03914 4.21071 8.53043 4 8 4ZM16 17C16 19.21 12.42 21 8 21C3.58 21 0 19.21 0 17C0 15.71 1.22 14.56 3.11 13.83L3.75 14.74C2.67 15.19 2 15.81 2 16.5C2 17.88 4.69 19 8 19C11.31 19 14 17.88 14 16.5C14 15.81 13.33 15.19 12.25 14.74L12.89 13.83C14.78 14.56 16 15.71 16 17Z",
                    fill: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="8.33%"
                bottom="4.17%"
                left="16.67%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector34743174")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="6px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="12px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="show map"
              {...getOverrideProps(overrides, "show map")}
            ></Text>
          </Flex>
          <Flex
            gap="3px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            onClick={() => {
              frameTwoFiveOnClick();
            }}
            {...getOverrideProps(overrides, "Frame 25")}
          >
            <Icon
              width="18px"
              height="18px"
              viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
              paths={[
                {
                  d: "M12 0L2 0C1.46957 4.44089e-16 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 4.44089e-16 1.46957 0 2L0 16C4.44089e-16 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18L16 18C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16L18 6L12 0ZM16 16L2 16L2 2L11 2L11 7L16 7M14 11L4 11L4 9L14 9M11 14L4 14L4 12L11 12",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector34743177")}
            ></Icon>
            <Text
              fontFamily="Inter"
              fontSize="6px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="12px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="record list"
              {...getOverrideProps(overrides, "record list")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            onClick={() => {
              frameEightOnClick();
            }}
            {...getOverrideProps(overrides, "Frame 8")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "delete34743180")}
            >
              <Icon
                width="14px"
                height="18px"
                viewBox={{ minX: 0, minY: 0, width: 14, height: 18 }}
                paths={[
                  {
                    d: "M14 1L10.5 1L9.5 0L4.5 0L3.5 1L0 1L0 3L14 3M1 16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18L11 18C11.5304 18 12.0391 17.7893 12.4142 17.4142C12.7893 17.0391 13 16.5304 13 16L13 4L1 4L1 16Z",
                    fill: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="12.5%"
                bottom="12.5%"
                left="20.83%"
                right="20.83%"
                {...getOverrideProps(overrides, "Vector34743181")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="6px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="12px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="delete"
              {...getOverrideProps(overrides, "delete34743182")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 36")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "pencil")}
            >
              <Icon
                width="18px"
                height="18px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 18.00250244140625,
                  height: 18.00250244140625,
                }}
                paths={[
                  {
                    d: "M17.71 4.0425C18.1 3.6525 18.1 3.0025 17.71 2.6325L15.37 0.2925C15 -0.0975 14.35 -0.0975 13.96 0.2925L12.12 2.1225L15.87 5.8725M0 14.2525L0 18.0025L3.75 18.0025L14.81 6.9325L11.06 3.1825L0 14.2525Z",
                    fill: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="12.49%"
                bottom="12.5%"
                left="12.5%"
                right="12.49%"
                {...getOverrideProps(overrides, "Vector34743185")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="6px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="12px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="edit"
              {...getOverrideProps(overrides, "edit")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
