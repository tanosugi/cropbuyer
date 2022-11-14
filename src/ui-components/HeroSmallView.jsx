/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function HeroSmallView(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="532px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HeroSmallView")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="320px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="2.26%"
        bottom="50.37%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "HeroMessage")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Crop Buyer"
          {...getOverrideProps(overrides, "Crop Buyer")}
        ></Text>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Message")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Web App for Crop Buyer’s Farm Management"
            {...getOverrideProps(
              overrides,
              "Web App for Crop Buyer\u2019s Farm Management"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Users can plot farms as polygons with some info, upload pictures with GPS data, and see them on the map."
            {...getOverrideProps(
              overrides,
              "Users can plot farms as polygons with some info, upload pictures with GPS data, and see them on the map."
            )}
          ></Text>
          <Button
            display="flex"
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Sign Up for Free"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
      <Image
        width="102.5%"
        height="40.98%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="58.83%"
        bottom="0.19%"
        left="-1.25%"
        right="-1.25%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="/hero-image.jpg"
        {...getOverrideProps(overrides, "unsplash:PdO-fDWXQ5I")}
      ></Image>
    </View>
  );
}
