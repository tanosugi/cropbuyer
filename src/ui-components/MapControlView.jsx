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
      gap="0"
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
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "FarmInfoSwitchView")}
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
          padding="0px 4px 0px 4px"
          label="Farm Info."
          size="default"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="start"
          {...getOverrideProps(overrides, "SwitchField35313346")}
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
          padding="0px 4px 0px 4px"
          label="Pictures"
          size="default"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="start"
          {...getOverrideProps(overrides, "SwitchField35313347")}
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
          padding="0px 4px 0px 4px"
          label="Yearly"
          size="default"
          defaultChecked={false}
          isDisabled={false}
          labelPosition="start"
          {...getOverrideProps(overrides, "SwitchField35313348")}
        ></SwitchField>
      </Flex>
      <SliderField
        display="flex"
        gap="0"
        direction="column"
        width="280px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Year   "
        defaultValue="XXXX"
        isDisabled={false}
        labelHidden={false}
        isValueHidden={false}
        size="Default"
        {...getOverrideProps(overrides, "SliderField")}
      ></SliderField>
    </Flex>
  );
}
