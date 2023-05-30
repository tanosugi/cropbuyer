/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Rating, Text } from "@aws-amplify/ui-react";
export default function FarmInfoWindowView(props) {
  const { farm, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="5px 0px 5px 0px"
      {...getOverrideProps(overrides, "FarmInfoWindowView")}
      {...rest}
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
          children={`${"Area :"}${farm?.area}${" hectare"}`}
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
      </Flex>
    </Flex>
  );
}
