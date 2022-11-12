/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, SliderField, SwitchField } from "@aws-amplify/ui-react";
export default function MapControlView(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="-5px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "MapControlView")}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 210")}
      >
        <SwitchField
          display="flex"
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 8px 8px 8px"
          label="Farm Info"
          size="small"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="start"
          {...getOverrideProps(overrides, "SwitchField35273116")}
        ></SwitchField>
        <SwitchField
          display="flex"
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 8px 8px 8px"
          label="Pictures"
          size="small"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="start"
          {...getOverrideProps(overrides, "SwitchField35273122")}
        ></SwitchField>
        <SwitchField
          display="flex"
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 8px 8px 8px"
          label="Yearly"
          size="small"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="start"
          {...getOverrideProps(overrides, "SwitchField35283174")}
        ></SwitchField>
      </Flex>
      <SliderField
        display="flex"
        gap="-15px"
        direction="column"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Year"
        defaultValue="50"
        isDisabled={true}
        labelHidden={false}
        isValueHidden={false}
        size="small"
        {...getOverrideProps(overrides, "SliderField")}
      ></SliderField>
    </Flex>
  );
}
