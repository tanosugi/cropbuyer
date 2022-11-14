/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Farm } from "../models";
import { schema } from "../models/schema";
import { useEffect } from "react";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function EditFarmView(props) {
  const { farm, overrides, ...rest } = props;
  const [
    textFieldThreeFiveFourSixThreeThreeFourFiveValue,
    setTextFieldThreeFiveFourSixThreeThreeFourFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveFourSixThreeThreeFourSixValue,
    setTextFieldThreeFiveFourSixThreeThreeFourSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveFourSixThreeThreeFourSevenValue,
    setTextFieldThreeFiveFourSixThreeThreeFourSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveFourSixThreeThreeFourEightValue,
    setTextFieldThreeFiveFourSixThreeThreeFourEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveFourSixThreeThreeFourNineValue,
    setTextFieldThreeFiveFourSixThreeThreeFourNineValue,
  ] = useStateMutationAction("");
  const [textAreaFieldValue, setTextAreaFieldValue] =
    useStateMutationAction("");
  const buttonThreeFiveFourSixThreeThreeFiveThreeOnClick =
    useDataStoreCreateAction({
      fields: {
        name: textFieldThreeFiveFourSixThreeThreeFourFiveValue,
        growerName: textFieldThreeFiveFourSixThreeThreeFourSixValue,
        area: textFieldThreeFiveFourSixThreeThreeFourSevenValue,
        latestStatus: textFieldThreeFiveFourSixThreeThreeFourEightValue,
        polygonString: textFieldThreeFiveFourSixThreeThreeFourNineValue,
        description: textAreaFieldValue,
      },
      model: Farm,
      schema: schema,
    });
  const buttonThreeFiveFourSixThreeThreeFiveFourOnClick =
    useDataStoreUpdateAction({
      fields: {
        name: textFieldThreeFiveFourSixThreeThreeFourFiveValue,
        growerName: textFieldThreeFiveFourSixThreeThreeFourSixValue,
        area: textFieldThreeFiveFourSixThreeThreeFourSevenValue,
        latestStatus: textFieldThreeFiveFourSixThreeThreeFourEightValue,
        polygonString: textFieldThreeFiveFourSixThreeThreeFourNineValue,
        description: textAreaFieldValue,
      },
      id: farm?.id,
      model: Farm,
      schema: schema,
    });
  useEffect(() => {
    if (
      textFieldThreeFiveFourSixThreeThreeFourFiveValue === "" &&
      farm !== undefined &&
      farm?.name !== undefined
    )
      setTextFieldThreeFiveFourSixThreeThreeFourFiveValue(farm?.name);
  }, [farm]);
  useEffect(() => {
    if (
      textFieldThreeFiveFourSixThreeThreeFourSixValue === "" &&
      farm !== undefined &&
      farm?.growerName !== undefined
    )
      setTextFieldThreeFiveFourSixThreeThreeFourSixValue(farm?.growerName);
  }, [farm]);
  useEffect(() => {
    if (
      textFieldThreeFiveFourSixThreeThreeFourSevenValue === "" &&
      farm !== undefined &&
      farm?.area !== undefined
    )
      setTextFieldThreeFiveFourSixThreeThreeFourSevenValue(farm?.area);
  }, [farm]);
  useEffect(() => {
    if (
      textFieldThreeFiveFourSixThreeThreeFourEightValue === "" &&
      farm !== undefined &&
      farm?.latestStatus !== undefined
    )
      setTextFieldThreeFiveFourSixThreeThreeFourEightValue(farm?.latestStatus);
  }, [farm]);
  useEffect(() => {
    if (
      textFieldThreeFiveFourSixThreeThreeFourNineValue === "" &&
      farm !== undefined &&
      farm?.polygonString !== undefined
    )
      setTextFieldThreeFiveFourSixThreeThreeFourNineValue(farm?.polygonString);
  }, [farm]);
  useEffect(() => {
    if (
      textAreaFieldValue === "" &&
      farm !== undefined &&
      farm?.description !== undefined
    )
      setTextAreaFieldValue(farm?.description);
  }, [farm]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="292px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "EditFarmView")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <View
          width="unset"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="calc(50% - 10px - 0px)"
            left="calc(50% - 37px - 26px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit Farm"
            {...getOverrideProps(overrides, "Edit Farm")}
          ></Text>
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="calc(50% - 12px - 0px)"
            right="0px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            className="custom-btn"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
        </View>
        <Divider
          width="unset"
          height="1px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider35463343")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Name"
            placeholder="Field 1"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFiveFourSixThreeThreeFourFiveValue}
            onChange={(event) => {
              setTextFieldThreeFiveFourSixThreeThreeFourFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField35463345")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Grower"
            placeholder="John Doe"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFiveFourSixThreeThreeFourSixValue}
            onChange={(event) => {
              setTextFieldThreeFiveFourSixThreeThreeFourSixValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField35463346")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Area (hectare)"
            placeholder="1234"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFiveFourSixThreeThreeFourSevenValue}
            onChange={(event) => {
              setTextFieldThreeFiveFourSixThreeThreeFourSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField35463347")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Latest Status Rating (1:bad - 5 : good)"
            placeholder="1-5"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFiveFourSixThreeThreeFourEightValue}
            onChange={(event) => {
              setTextFieldThreeFiveFourSixThreeThreeFourEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField35463348")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Polygon"
            placeholder="12.1313,43.3434;12.244,44.443;"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFiveFourSixThreeThreeFourNineValue}
            onChange={(event) => {
              setTextFieldThreeFiveFourSixThreeThreeFourNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField35463349")}
          ></TextField>
          <TextAreaField
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Description"
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textAreaFieldValue}
            onChange={(event) => {
              setTextAreaFieldValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextAreaField")}
          ></TextAreaField>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider35463351")}
        ></Divider>
        <View
          width="176px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 1")}
        >
          <Button
            display="flex"
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="0px"
            left="0px"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonThreeFiveFourSixThreeThreeFiveThreeOnClick();
            }}
            {...getOverrideProps(overrides, "Button35463353")}
          ></Button>
          <Button
            display="flex"
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="0px"
            left="87px"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Update"
            onClick={() => {
              buttonThreeFiveFourSixThreeThreeFiveFourOnClick();
            }}
            {...getOverrideProps(overrides, "Button35463354")}
          ></Button>
        </View>
      </Flex>
    </Flex>
  );
}
