/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Grower } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function GrowerCardView(props) {
  const { grower, overrides, ...rest } = props;
  const frameOneZeroOnClick = useNavigateAction({
    type: "url",
    url: `${"mailto:"}${grower?.email}`,
  });
  const frameNineOnClick = useNavigateAction({
    type: "url",
    url: `${"tel:"}${grower?.phone}`,
  });
  const frameEightOnClick = useDataStoreDeleteAction({
    model: Grower,
    id: grower?.id,
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
      {...getOverrideProps(overrides, "GrowerCardView")}
      {...rest}
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
        src={grower?.image_url}
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
          children={grower?.name}
          {...getOverrideProps(overrides, "Full Name")}
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
          children={grower?.description}
          {...getOverrideProps(
            overrides,
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          )}
        ></Text>
        <Flex
          gap="6px"
          direction="row"
          width="182px"
          height="unset"
          justifyContent="space-between"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 33")}
        >
          <Flex
            gap="0"
            direction="column"
            width="24px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            className="custom-btn"
            {...getOverrideProps(overrides, "Frame 32")}
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
              {...getOverrideProps(overrides, "list-box-outline")}
            >
              <Icon
                width="18px"
                height="18px"
                viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
                paths={[
                  {
                    d: "M8 12L14 12L14 14L8 14L8 12ZM6 4L4 4L4 6L6 6L6 4ZM8 10L14 10L14 8L8 8L8 10ZM8 6L14 6L14 4L8 4L8 6ZM6 8L4 8L4 10L6 10L6 8ZM18 2L18 16C18 17.1 17.1 18 16 18L2 18C0.9 18 0 17.1 0 16L0 2C0 0.9 0.9 0 2 0L16 0C17.1 0 18 0.9 18 2ZM16 2L2 2L2 16L16 16L16 2ZM6 12L4 12L4 14L6 14L6 12Z",
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
                left="12.5%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector34793089")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="6px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="6px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0px"
              width="22px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="farm&#xA;list"
              {...getOverrideProps(overrides, "farm list")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="26px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            className="custom-btn"
            onClick={() => {
              frameOneZeroOnClick();
            }}
            {...getOverrideProps(overrides, "Frame 10")}
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
              {...getOverrideProps(overrides, "email34793092")}
            >
              <Icon
                width="20px"
                height="16px"
                viewBox={{ minX: 0, minY: 0, width: 20, height: 16 }}
                paths={[
                  {
                    d: "M18 4L10 9L2 4L2 2L10 7L18 2M18 0L2 0C0.89 0 0 0.89 0 2L0 14C4.44089e-16 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16L18 16C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14L20 2C20 0.89 19.1 0 18 0Z",
                    fill: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="16.67%"
                bottom="16.67%"
                left="8.33%"
                right="8.33%"
                {...getOverrideProps(overrides, "Vector34793093")}
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
              children="email"
              {...getOverrideProps(overrides, "email34793094")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="31px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            className="custom-btn"
            onClick={() => {
              frameNineOnClick();
            }}
            {...getOverrideProps(overrides, "Frame 9")}
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
              {...getOverrideProps(overrides, "phone34793096")}
            >
              <Icon
                width="18px"
                height="18px"
                viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
                paths={[
                  {
                    d: "M3.62 7.79C5.06 10.62 7.38 12.94 10.21 14.38L12.41 12.18C12.69 11.9 13.08 11.82 13.43 11.93C14.55 12.3 15.75 12.5 17 12.5C17.2652 12.5 17.5196 12.6054 17.7071 12.7929C17.8946 12.9804 18 13.2348 18 13.5L18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C12.4913 18 8.1673 16.2089 4.97918 13.0208C1.79107 9.8327 8.88178e-16 5.50868 0 1C-8.88178e-16 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 4.44089e-16 1 0L4.5 0C4.76522 4.44089e-16 5.01957 0.105357 5.20711 0.292893C5.39464 0.48043 5.5 0.734784 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z",
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
                left="12.5%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector34793097")}
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
              children="phone"
              {...getOverrideProps(overrides, "phone34793098")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="31px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            className="custom-btn"
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
              {...getOverrideProps(overrides, "delete34793100")}
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
                {...getOverrideProps(overrides, "Vector34793101")}
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
              {...getOverrideProps(overrides, "delete34793102")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="24px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            className="custom-btn"
            {...getOverrideProps(overrides, "Frame 7")}
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
                {...getOverrideProps(overrides, "Vector34793105")}
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
