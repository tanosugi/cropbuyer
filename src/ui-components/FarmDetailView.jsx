/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Rating, Text, View } from "@aws-amplify/ui-react";
export default function FarmDetailView(props) {
  const { farm, rectangle2, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="319px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="5px 5px 5px 5px"
      {...getOverrideProps(overrides, "FarmDetailView")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="309px"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 56")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="2px 2px 2px 2px"
          className="custom-btn"
          {...getOverrideProps(overrides, "close-circle")}
        >
          <Icon
            width="20px"
            height="20px"
            viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
            paths={[
              {
                d: "M10 0C15.53 0 20 4.47 20 10C20 15.53 15.53 20 10 20C4.47 20 0 15.53 0 10C0 4.47 4.47 0 10 0ZM13.59 5L10 8.59L6.41 5L5 6.41L8.59 10L5 13.59L6.41 15L10 11.41L13.59 15L15 13.59L11.41 10L15 6.41L13.59 5Z",
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
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "FarmCardView")}
      >
        <Flex
          gap="5px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "GrowerCardView")}
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
            children={rectangle2}
            {...getOverrideProps(overrides, "Rectangle 2")}
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
            {...getOverrideProps(overrides, "Frame 13")}
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
                children="Area : 350 hectare&#xD;"
                {...getOverrideProps(overrides, "Area : 350 hectare")}
              ></Text>
            </Flex>
            <Flex
              gap="17px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 28")}
            >
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
                  width="102px"
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
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
