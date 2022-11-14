/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function NavbarView(props) {
  const { overrides, ...rest } = props;
  const frameTwoOnClick = useNavigateAction({ type: "url", url: "/" });
  return (
    <Flex
      gap="168px"
      direction="row"
      width="320px"
      height="27px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(214,245,219,1)"
      margin="0"
      {...rest}
      {...getOverrideProps(overrides, "NavbarView")}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="27px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        onClick={() => {
          frameTwoOnClick();
        }}
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <View
          width="27px"
          height="27px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "barley")}
        >
          <Icon
            width="12.38px"
            height="24.51px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 12.375,
              height: 24.513763427734375,
            }}
            paths={[
              {
                d: "M0.93375 19.26C-1.10039e-07 17.955 1.38324e-21 16.4475 1.38324e-21 14.9513C1.87875 16.0763 3.74625 17.2012 4.69125 18.5175L5.0625 19.1475L5.0625 16.5825C3.375 15.57 1.7775 14.535 0.93375 13.3538C-1.10039e-07 12.0487 1.38324e-21 10.5413 1.38324e-21 9.045C1.87875 10.17 3.74625 11.295 4.69125 12.6112L5.0625 13.2638L5.0625 10.6762C3.375 9.66375 1.7775 8.62875 0.93375 7.4475C-1.10039e-07 6.1425 1.38324e-21 4.635 1.38324e-21 3.13875C1.87875 4.26375 3.74625 5.38875 4.69125 6.705C4.80375 6.8625 4.905 7.03125 4.995 7.21125C4.80375 6.51375 4.68 5.86125 4.66875 5.18625C4.6575 3.4875 5.4 1.74375 6.1425 0C6.91875 1.665 7.695 3.34125 7.70625 5.04C7.7175 5.74875 7.59375 6.46875 7.39125 7.1775C7.48125 7.02 7.57125 6.8625 7.68375 6.705C8.62875 5.38875 10.4963 4.26375 12.375 3.13875C12.375 4.635 12.375 6.1425 11.4412 7.4475C10.5975 8.62875 9 9.66375 7.3125 10.6762L7.3125 13.2638L7.68375 12.6112C8.62875 11.295 10.4963 10.17 12.375 9.045C12.375 10.5413 12.375 12.0487 11.4412 13.3538C10.5975 14.535 9 15.57 7.3125 16.5825L7.3125 19.1475L7.68375 18.5175C8.62875 17.2012 10.4963 16.0763 12.375 14.9513C12.375 16.4475 12.375 17.955 11.4412 19.26C10.5975 20.4412 9 21.4763 7.3125 22.4888L7.3125 24.5138L5.0625 24.5138L5.0625 22.4888C3.375 21.4763 1.7775 20.4412 0.93375 19.26Z",
                fill: "rgba(46,72,50,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="5.04%"
            bottom="4.17%"
            left="27.08%"
            right="27.08%"
            {...getOverrideProps(overrides, "Vector34583151")}
          ></Icon>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(46,72,50,1)"
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
          children="Crop Buyer"
          {...getOverrideProps(overrides, "Crop Buyer")}
        ></Text>
      </Flex>
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
        {...getOverrideProps(overrides, "menu")}
      >
        <Icon
          width="18px"
          height="12px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 12 }}
          paths={[
            {
              d: "M0 0L18 0L18 2L0 2L0 0ZM0 5L18 5L18 7L0 7L0 5ZM0 10L18 10L18 12L0 12L0 10Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="25%"
          bottom="25%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(overrides, "Vector34692815")}
        ></Icon>
      </View>
    </Flex>
  );
}
