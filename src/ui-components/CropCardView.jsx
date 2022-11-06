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
} from "@aws-amplify/ui-react/internal";
import { Crop } from "../models";
import { schema } from "../models/schema";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CropCardView(props) {
  const { crop, overrides, ...rest } = props;
  const frameEightOnClick = useDataStoreDeleteAction({
    id: crop?.id,
    model: Crop,
    schema: schema,
  });
  return (
    <Flex
      gap="5px"
      direction="row"
      width="318px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="5px 5px 5px 5px"
      backgroundColor="rgba(250,250,250,1)"
      {...rest}
      {...getOverrideProps(overrides, "CropCardView")}
    >
      <Image
        width="unset"
        height="111px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        borderRadius="90px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={crop?.image_url}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="6px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Card Area")}
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
          children={crop?.name}
          {...getOverrideProps(overrides, "Crop Name")}
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
          children={crop?.description}
          {...getOverrideProps(
            overrides,
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          )}
        ></Text>
        <Flex
          gap="7px"
          direction="row"
          width="unset"
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
              {...getOverrideProps(overrides, "delete34823334")}
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
                {...getOverrideProps(overrides, "Vector34823335")}
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
              {...getOverrideProps(overrides, "delete34823336")}
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
                  width: 18.00244140625,
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
                {...getOverrideProps(overrides, "Vector34823339")}
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
