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
import { Record } from "../models";
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
export default function EditRecordView(props) {
  const { record, overrides, ...rest } = props;
  const [
    textFieldThreeFourSevenZeroFourFiveNineThreeValue,
    setTextFieldThreeFourSevenZeroFourFiveNineThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourNineThreeThreeOneFourEightValue,
    setTextFieldThreeFourNineThreeThreeOneFourEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourNineThreeThreeOneFiveFiveValue,
    setTextFieldThreeFourNineThreeThreeOneFiveFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourSevenZeroFourFiveNineFourValue,
    setTextFieldThreeFourSevenZeroFourFiveNineFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourSevenZeroFourFiveNineFiveValue,
    setTextFieldThreeFourSevenZeroFourFiveNineFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourNineThreeThreeOneEightThreeValue,
    setTextFieldThreeFourNineThreeThreeOneEightThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourEightNineThreeOneTwoFourValue,
    setTextFieldThreeFourEightNineThreeOneTwoFourValue,
  ] = useStateMutationAction("");
  const [textAreaFieldValue, setTextAreaFieldValue] =
    useStateMutationAction("");
  const buttonThreeFourSevenZeroFourSixZeroZeroOnClick =
    useDataStoreCreateAction({
      fields: {
        year: textFieldThreeFourSevenZeroFourFiveNineThreeValue,
        cropName: textFieldThreeFourNineThreeThreeOneFourEightValue,
        statusRating: textFieldThreeFourNineThreeThreeOneFiveFiveValue,
        yield: textFieldThreeFourSevenZeroFourFiveNineFourValue,
        volume: textFieldThreeFourSevenZeroFourFiveNineFiveValue,
        farmName: textFieldThreeFourNineThreeThreeOneEightThreeValue,
        image_url: textFieldThreeFourEightNineThreeOneTwoFourValue,
        memo: textAreaFieldValue,
      },
      model: Record,
      schema: schema,
    });
  const buttonThreeFourSevenZeroFourSixZeroOneOnClick =
    useDataStoreUpdateAction({
      fields: {
        year: textFieldThreeFourSevenZeroFourFiveNineThreeValue,
        cropName: textFieldThreeFourNineThreeThreeOneFourEightValue,
        statusRating: textFieldThreeFourNineThreeThreeOneFiveFiveValue,
        yield: textFieldThreeFourSevenZeroFourFiveNineFourValue,
        volume: textFieldThreeFourSevenZeroFourFiveNineFiveValue,
        farmName: textFieldThreeFourNineThreeThreeOneEightThreeValue,
        image_url: textFieldThreeFourEightNineThreeOneTwoFourValue,
        memo: textAreaFieldValue,
      },
      id: record?.id,
      model: Record,
      schema: schema,
    });
  useEffect(() => {
    if (
      textFieldThreeFourSevenZeroFourFiveNineThreeValue === "" &&
      record !== undefined &&
      record?.year !== undefined
    )
      setTextFieldThreeFourSevenZeroFourFiveNineThreeValue(record?.year);
  }, [record]);
  useEffect(() => {
    if (
      textFieldThreeFourNineThreeThreeOneFourEightValue === "" &&
      record !== undefined &&
      record?.cropName !== undefined
    )
      setTextFieldThreeFourNineThreeThreeOneFourEightValue(record?.cropName);
  }, [record]);
  useEffect(() => {
    if (
      textFieldThreeFourNineThreeThreeOneFiveFiveValue === "" &&
      record !== undefined &&
      record?.statusRating !== undefined
    )
      setTextFieldThreeFourNineThreeThreeOneFiveFiveValue(record?.statusRating);
  }, [record]);
  useEffect(() => {
    if (
      textFieldThreeFourSevenZeroFourFiveNineFourValue === "" &&
      record !== undefined &&
      record?.yield !== undefined
    )
      setTextFieldThreeFourSevenZeroFourFiveNineFourValue(record?.yield);
  }, [record]);
  useEffect(() => {
    if (
      textFieldThreeFourSevenZeroFourFiveNineFiveValue === "" &&
      record !== undefined &&
      record?.volume !== undefined
    )
      setTextFieldThreeFourSevenZeroFourFiveNineFiveValue(record?.volume);
  }, [record]);
  useEffect(() => {
    if (
      textFieldThreeFourNineThreeThreeOneEightThreeValue === "" &&
      record !== undefined &&
      record?.farmName !== undefined
    )
      setTextFieldThreeFourNineThreeThreeOneEightThreeValue(record?.farmName);
  }, [record]);
  useEffect(() => {
    if (
      textFieldThreeFourEightNineThreeOneTwoFourValue === "" &&
      record !== undefined &&
      record?.image_url !== undefined
    )
      setTextFieldThreeFourEightNineThreeOneTwoFourValue(record?.image_url);
  }, [record]);
  useEffect(() => {
    if (
      textAreaFieldValue === "" &&
      record !== undefined &&
      record?.memo !== undefined
    )
      setTextAreaFieldValue(record?.memo);
  }, [record]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="272px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "EditRecordView")}
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
            left="calc(50% - 45px - 18px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit Record"
            {...getOverrideProps(overrides, "Edit Record")}
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
          {...getOverrideProps(overrides, "Divider34704591")}
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
            label="Year"
            placeholder="202X"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourSevenZeroFourFiveNineThreeValue}
            onChange={(event) => {
              setTextFieldThreeFourSevenZeroFourFiveNineThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34704593")}
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
            label="Crop"
            placeholder="soy"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourNineThreeThreeOneFourEightValue}
            onChange={(event) => {
              setTextFieldThreeFourNineThreeThreeOneFourEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34933148")}
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
            label="Status Rating (1:bad - 5 : good)"
            placeholder="1-5"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourNineThreeThreeOneFiveFiveValue}
            onChange={(event) => {
              setTextFieldThreeFourNineThreeThreeOneFiveFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34933155")}
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
            label="Yield (MT per hectare)"
            placeholder="1234"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourSevenZeroFourFiveNineFourValue}
            onChange={(event) => {
              setTextFieldThreeFourSevenZeroFourFiveNineFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34704594")}
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
            label="Volume (MT)"
            placeholder="1234"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourSevenZeroFourFiveNineFiveValue}
            onChange={(event) => {
              setTextFieldThreeFourSevenZeroFourFiveNineFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34704595")}
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
            label="Farm Name"
            placeholder="1234"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourNineThreeThreeOneEightThreeValue}
            onChange={(event) => {
              setTextFieldThreeFourNineThreeThreeOneEightThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34933183")}
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
            value={textFieldThreeFourEightNineThreeOneTwoFourValue}
            onChange={(event) => {
              setTextFieldThreeFourEightNineThreeOneTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34893124")}
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
            label="Memo"
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
          {...getOverrideProps(overrides, "Divider34704598")}
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
              buttonThreeFourSevenZeroFourSixZeroZeroOnClick();
            }}
            {...getOverrideProps(overrides, "Button34704600")}
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
              buttonThreeFourSevenZeroFourSixZeroOneOnClick();
            }}
            {...getOverrideProps(overrides, "Button34704601")}
          ></Button>
        </View>
      </Flex>
    </Flex>
  );
}
