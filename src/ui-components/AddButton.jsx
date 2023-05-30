/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function AddButton(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AddButton")}
      {...rest}
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
        className="custom-btn"
        {...getOverrideProps(overrides, "plus-circle")}
      >
        <Icon
          width="20px"
          height="20px"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
          paths={[
            {
              d: "M15 11L11 11L11 15L9 15L9 11L5 11L5 9L9 9L9 5L11 5L11 9L15 9M10 0C8.68678 -6.66134e-16 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 1.77636e-15 7.34784 0 10C2.22045e-15 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 1.33227e-15 10 0L10 0Z",
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
          bottom="8.33%"
          left="8.33%"
          right="8.33%"
          {...getOverrideProps(overrides, "Vector")}
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
        children="add"
        {...getOverrideProps(overrides, "add")}
      ></Text>
    </Flex>
  );
}
