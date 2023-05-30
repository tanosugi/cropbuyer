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
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
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
export default function EditGrowerView(props) {
  const { grower, overrides, ...rest } = props;
  const [
    textFieldThreeFourFourEightTwoSevenFourZeroValue,
    setTextFieldThreeFourFourEightTwoSevenFourZeroValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourFourEightTwoSevenFourOneValue,
    setTextFieldThreeFourFourEightTwoSevenFourOneValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourFiveFiveTwoSevenOneTwoValue,
    setTextFieldThreeFourFiveFiveTwoSevenOneTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourFiveFiveTwoSevenOneNineValue,
    setTextFieldThreeFourFiveFiveTwoSevenOneNineValue,
  ] = useStateMutationAction("");
  const [textAreaFieldValue, setTextAreaFieldValue] =
    useStateMutationAction("");
  const [
    textFieldThreeFourEightNineThreeOneOneZeroValue,
    setTextFieldThreeFourEightNineThreeOneOneZeroValue,
  ] = useStateMutationAction("");
  const buttonThreeFourSixEightTwoSevenThreeFourOnClick =
    useDataStoreCreateAction({
      model: Grower,
      fields: {
        name: textFieldThreeFourFourEightTwoSevenFourZeroValue,
        email: textFieldThreeFourFourEightTwoSevenFourOneValue,
        phone: textFieldThreeFourFiveFiveTwoSevenOneTwoValue,
        address: textFieldThreeFourFiveFiveTwoSevenOneNineValue,
        description: textAreaFieldValue,
        image_url: textFieldThreeFourEightNineThreeOneOneZeroValue,
      },
      schema: schema,
    });
  const buttonThreeFourSixEightTwoSevenThreeEightOnClick =
    useDataStoreUpdateAction({
      model: Grower,
      id: grower?.id,
      fields: {
        name: textFieldThreeFourFourEightTwoSevenFourZeroValue,
        email: textFieldThreeFourFourEightTwoSevenFourOneValue,
        phone: textFieldThreeFourFiveFiveTwoSevenOneTwoValue,
        address: textFieldThreeFourFiveFiveTwoSevenOneNineValue,
        description: textAreaFieldValue,
        image_url: textFieldThreeFourEightNineThreeOneOneZeroValue,
      },
      schema: schema,
    });
  useEffect(() => {
    if (
      textFieldThreeFourFourEightTwoSevenFourZeroValue === "" &&
      grower !== undefined &&
      grower?.name !== undefined
    )
      setTextFieldThreeFourFourEightTwoSevenFourZeroValue(grower?.name);
  }, [grower]);
  useEffect(() => {
    if (
      textFieldThreeFourFourEightTwoSevenFourOneValue === "" &&
      grower !== undefined &&
      grower?.email !== undefined
    )
      setTextFieldThreeFourFourEightTwoSevenFourOneValue(grower?.email);
  }, [grower]);
  useEffect(() => {
    if (
      textFieldThreeFourFiveFiveTwoSevenOneTwoValue === "" &&
      grower !== undefined &&
      grower?.phone !== undefined
    )
      setTextFieldThreeFourFiveFiveTwoSevenOneTwoValue(grower?.phone);
  }, [grower]);
  useEffect(() => {
    if (
      textFieldThreeFourFiveFiveTwoSevenOneNineValue === "" &&
      grower !== undefined &&
      grower?.address !== undefined
    )
      setTextFieldThreeFourFiveFiveTwoSevenOneNineValue(grower?.address);
  }, [grower]);
  useEffect(() => {
    if (
      textAreaFieldValue === "" &&
      grower !== undefined &&
      grower?.description !== undefined
    )
      setTextAreaFieldValue(grower?.description);
  }, [grower]);
  useEffect(() => {
    if (
      textFieldThreeFourEightNineThreeOneOneZeroValue === "" &&
      grower !== undefined &&
      grower?.image_url !== undefined
    )
      setTextFieldThreeFourEightNineThreeOneOneZeroValue(grower?.image_url);
  }, [grower]);
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
      {...getOverrideProps(overrides, "EditGrowerView")}
      {...rest}
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
            left="calc(50% - 46px - 17px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit Grower"
            {...getOverrideProps(overrides, "Edit Grower")}
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
          {...getOverrideProps(overrides, "Divider34482735")}
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
            placeholder="John Doe"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourFourEightTwoSevenFourZeroValue}
            onChange={(event) => {
              setTextFieldThreeFourFourEightTwoSevenFourZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34482740")}
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
            label="Email"
            placeholder="john.doe@awsamplify.com"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourFourEightTwoSevenFourOneValue}
            onChange={(event) => {
              setTextFieldThreeFourFourEightTwoSevenFourOneValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34482741")}
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
            label="Phone"
            placeholder="+81-1234-5678"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourFiveFiveTwoSevenOneTwoValue}
            onChange={(event) => {
              setTextFieldThreeFourFiveFiveTwoSevenOneTwoValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34552712")}
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
            label="Address"
            placeholder="X-X-X Koen Minami, Akita-shi, Akita-ken 010-0976 Japan"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourFiveFiveTwoSevenOneNineValue}
            onChange={(event) => {
              setTextFieldThreeFourFiveFiveTwoSevenOneNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34552719")}
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
            label="Image URL"
            placeholder="https://unsplash.com/xxx"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourEightNineThreeOneOneZeroValue}
            onChange={(event) => {
              setTextFieldThreeFourEightNineThreeOneOneZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34893110")}
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
          {...getOverrideProps(overrides, "Divider34482743")}
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
              buttonThreeFourSixEightTwoSevenThreeFourOnClick();
            }}
            {...getOverrideProps(overrides, "Button34682734")}
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
              buttonThreeFourSixEightTwoSevenThreeEightOnClick();
            }}
            {...getOverrideProps(overrides, "Button34682738")}
          ></Button>
        </View>
      </Flex>
    </Flex>
  );
}
