/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, View } from "@aws-amplify/ui-react";
export default function MenueView(props) {
  const { grower, overrides, ...rest } = props;
  const frameThreeEightOnClick = useNavigateAction({ type: "url", url: "/" });
  const frameThreeNineOnClick = useNavigateAction({ type: "url", url: "/map" });
  const frameFourZeroOnClick = useNavigateAction({
    type: "url",
    url: "/growers",
  });
  const frameFourOneOnClick = useNavigateAction({ type: "url", url: "/crops" });
  const frameFourTwoOnClick = useAuthSignOutAction({ global: false });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(250,250,250,1)"
      {...rest}
      {...getOverrideProps(overrides, "MenueView")}
    >
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
        {...getOverrideProps(overrides, "Frame 43")}
      >
        <Flex
          gap="12px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            frameThreeEightOnClick();
          }}
          {...getOverrideProps(overrides, "Frame 38")}
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
            {...getOverrideProps(overrides, "home")}
          >
            <Icon
              width="20px"
              height="17px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 17 }}
              paths={[
                {
                  d: "M8 17L8 11L12 11L12 17L17 17L17 9L20 9L10 0L0 9L3 9L3 17L8 17Z",
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
              bottom="16.67%"
              left="8.33%"
              right="8.33%"
              {...getOverrideProps(overrides, "Vector34743065")}
            ></Icon>
          </View>
          <Button
            display="flex"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="8px 16px 8px 16px"
            size="large"
            isDisabled={false}
            variation="link"
            children="Home"
            {...getOverrideProps(overrides, "Button34743054")}
          ></Button>
        </Flex>
        <Flex
          gap="12px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            frameThreeNineOnClick();
          }}
          {...getOverrideProps(overrides, "Frame 39")}
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
            {...getOverrideProps(overrides, "map")}
          >
            <Icon
              width="18px"
              height="18px"
              viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
              paths={[
                {
                  d: "M12 16L6 13.89L6 2L12 4.11M17.5 0C17.44 0 17.39 0 17.34 0L12 2.1L6 0L0.36 1.9C0.15 1.97 0 2.15 0 2.38L0 17.5C0 17.6326 0.0526785 17.7598 0.146447 17.8536C0.240215 17.9473 0.367392 18 0.5 18C0.55 18 0.61 18 0.66 17.97L6 15.9L12 18L17.64 16.1C17.85 16 18 15.85 18 15.62L18 0.5C18 0.367392 17.9473 0.240215 17.8536 0.146447C17.7598 0.0526785 17.6326 0 17.5 0Z",
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
              {...getOverrideProps(overrides, "Vector34743067")}
            ></Icon>
          </View>
          <Button
            display="flex"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="8px 16px 8px 16px"
            size="large"
            isDisabled={false}
            variation="link"
            children="Map"
            {...getOverrideProps(overrides, "Button34743042")}
          ></Button>
        </Flex>
        <Flex
          gap="12px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            frameFourZeroOnClick();
          }}
          {...getOverrideProps(overrides, "Frame 40")}
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
            {...getOverrideProps(overrides, "account-group")}
          >
            <Icon
              width="24px"
              height="14.5px"
              viewBox={{ minX: 0, minY: 0, width: 24, height: 14.5 }}
              paths={[
                {
                  d: "M12 0C12.9283 8.88178e-16 13.8185 0.368749 14.4749 1.02513C15.1313 1.6815 15.5 2.57174 15.5 3.5C15.5 4.42826 15.1313 5.3185 14.4749 5.97487C13.8185 6.63125 12.9283 7 12 7C11.0717 7 10.1815 6.63125 9.52513 5.97487C8.86875 5.3185 8.5 4.42826 8.5 3.5C8.5 2.57174 8.86875 1.6815 9.52513 1.02513C10.1815 0.368749 11.0717 8.88178e-16 12 0M5 2.5C5.56 2.5 6.08 2.65 6.53 2.92C6.38 4.35 6.8 5.77 7.66 6.88C7.16 7.84 6.16 8.5 5 8.5C4.20435 8.5 3.44129 8.18393 2.87868 7.62132C2.31607 7.05871 2 6.29565 2 5.5C2 4.70435 2.31607 3.94129 2.87868 3.37868C3.44129 2.81607 4.20435 2.5 5 2.5M19 2.5C19.7956 2.5 20.5587 2.81607 21.1213 3.37868C21.6839 3.94129 22 4.70435 22 5.5C22 6.29565 21.6839 7.05871 21.1213 7.62132C20.5587 8.18393 19.7956 8.5 19 8.5C17.84 8.5 16.84 7.84 16.34 6.88C17.2 5.77 17.62 4.35 17.47 2.92C17.92 2.65 18.44 2.5 19 2.5ZM5.5 12.75C5.5 10.68 8.41 9 12 9C15.59 9 18.5 10.68 18.5 12.75L18.5 14.5L5.5 14.5L5.5 12.75ZM0 14.5L0 13C0 11.61 1.89 10.44 4.45 10.1C3.86 10.78 3.5 11.72 3.5 12.75L3.5 14.5L0 14.5ZM24 14.5L20.5 14.5L20.5 12.75C20.5 11.72 20.14 10.78 19.55 10.1C22.11 10.44 24 11.61 24 13L24 14.5Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="22.92%"
              bottom="16.67%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector34743069")}
            ></Icon>
          </View>
          <Button
            display="flex"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="8px 16px 8px 16px"
            size="large"
            isDisabled={false}
            variation="link"
            children="Growers"
            {...getOverrideProps(overrides, "Button34743046")}
          ></Button>
        </Flex>
        <Flex
          gap="12px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            frameFourOneOnClick();
          }}
          {...getOverrideProps(overrides, "Frame 41")}
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
            {...getOverrideProps(overrides, "corn")}
          >
            <Icon
              width="20px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
              paths={[
                {
                  d: "M9 10L6.82 10C7.62 10.5 8.35 11.07 9 11.68L9 10ZM5 9C5.27 3.88 7.37 0 10 0C12.66 0 14.77 3.94 15 9.12C16.5 8.43 18.17 8 20 8C14.25 10.57 16.25 20 10 20C4 20 5.93 10.57 0 8C1.82 8 3.5 8.4 5 9ZM9 9L9 7L6.24 7L6.03 9L9 9ZM9 6L9 4L7.05 4C6.8 4.6 6.6 5.27 6.43 6L9 6ZM9 3L9 1.3C8.45 1.63 7.95 2.22 7.5 3L9 3ZM10 1L10 3L11 3L11 4L10 4L10 6L12 6L12 7L10 7L10 9L13 9L13 10L10 10L10 12L12 12L12 13L10.23 13C11.42 14.45 12.15 16 12.32 17.23C13.31 15.56 13.96 12.84 14 9.76C13.94 5 12.13 1 10 1Z",
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
              left="0%"
              right="16.67%"
              {...getOverrideProps(overrides, "Vector34743071")}
            ></Icon>
          </View>
          <Button
            display="flex"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="8px 16px 8px 16px"
            size="large"
            isDisabled={false}
            variation="link"
            children="Crops"
            {...getOverrideProps(overrides, "Button34743050")}
          ></Button>
        </Flex>
        <Flex
          gap="12px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            frameFourTwoOnClick();
          }}
          {...getOverrideProps(overrides, "Frame 42")}
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
            {...getOverrideProps(overrides, "logout")}
          >
            <Icon
              width="18px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 18, height: 20 }}
              paths={[
                {
                  d: "M13 15L13 12L6 12L6 8L13 8L13 5L18 10L13 15ZM11 0C11.5304 4.44089e-16 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2L13 4L11 4L11 2L2 2L2 18L11 18L11 16L13 16L13 18C13 18.5304 12.7893 19.0391 12.4142 19.4142C12.0391 19.7893 11.5304 20 11 20L2 20C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 4.44089e-16 18.5304 0 18L0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 4.44089e-16 2 0L11 0Z",
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
              left="0%"
              right="25%"
              {...getOverrideProps(overrides, "Vector34743073")}
            ></Icon>
          </View>
          <Button
            display="flex"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="8px 16px 8px 16px"
            size="large"
            isDisabled={false}
            variation="link"
            children="Sign Out"
            {...getOverrideProps(overrides, "Button34743060")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
