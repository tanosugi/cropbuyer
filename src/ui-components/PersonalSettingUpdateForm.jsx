/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PersonalSetting } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PersonalSettingUpdateForm(props) {
  const {
    id: idProp,
    personalSetting: personalSettingModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    mapLat: "",
    mapLng: "",
    mapZoom: "",
    mapTilt: "",
    mapRotate: "",
  };
  const [mapLat, setMapLat] = React.useState(initialValues.mapLat);
  const [mapLng, setMapLng] = React.useState(initialValues.mapLng);
  const [mapZoom, setMapZoom] = React.useState(initialValues.mapZoom);
  const [mapTilt, setMapTilt] = React.useState(initialValues.mapTilt);
  const [mapRotate, setMapRotate] = React.useState(initialValues.mapRotate);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = personalSettingRecord
      ? { ...initialValues, ...personalSettingRecord }
      : initialValues;
    setMapLat(cleanValues.mapLat);
    setMapLng(cleanValues.mapLng);
    setMapZoom(cleanValues.mapZoom);
    setMapTilt(cleanValues.mapTilt);
    setMapRotate(cleanValues.mapRotate);
    setErrors({});
  };
  const [personalSettingRecord, setPersonalSettingRecord] = React.useState(
    personalSettingModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PersonalSetting, idProp)
        : personalSettingModelProp;
      setPersonalSettingRecord(record);
    };
    queryData();
  }, [idProp, personalSettingModelProp]);
  React.useEffect(resetStateValues, [personalSettingRecord]);
  const validations = {
    mapLat: [],
    mapLng: [],
    mapZoom: [],
    mapTilt: [],
    mapRotate: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          mapLat,
          mapLng,
          mapZoom,
          mapTilt,
          mapRotate,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            PersonalSetting.copyOf(personalSettingRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PersonalSettingUpdateForm")}
      {...rest}
    >
      <TextField
        label="Map lat"
        isRequired={false}
        isReadOnly={false}
        value={mapLat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mapLat: value,
              mapLng,
              mapZoom,
              mapTilt,
              mapRotate,
            };
            const result = onChange(modelFields);
            value = result?.mapLat ?? value;
          }
          if (errors.mapLat?.hasError) {
            runValidationTasks("mapLat", value);
          }
          setMapLat(value);
        }}
        onBlur={() => runValidationTasks("mapLat", mapLat)}
        errorMessage={errors.mapLat?.errorMessage}
        hasError={errors.mapLat?.hasError}
        {...getOverrideProps(overrides, "mapLat")}
      ></TextField>
      <TextField
        label="Map lng"
        isRequired={false}
        isReadOnly={false}
        value={mapLng}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mapLat,
              mapLng: value,
              mapZoom,
              mapTilt,
              mapRotate,
            };
            const result = onChange(modelFields);
            value = result?.mapLng ?? value;
          }
          if (errors.mapLng?.hasError) {
            runValidationTasks("mapLng", value);
          }
          setMapLng(value);
        }}
        onBlur={() => runValidationTasks("mapLng", mapLng)}
        errorMessage={errors.mapLng?.errorMessage}
        hasError={errors.mapLng?.hasError}
        {...getOverrideProps(overrides, "mapLng")}
      ></TextField>
      <TextField
        label="Map zoom"
        isRequired={false}
        isReadOnly={false}
        value={mapZoom}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mapLat,
              mapLng,
              mapZoom: value,
              mapTilt,
              mapRotate,
            };
            const result = onChange(modelFields);
            value = result?.mapZoom ?? value;
          }
          if (errors.mapZoom?.hasError) {
            runValidationTasks("mapZoom", value);
          }
          setMapZoom(value);
        }}
        onBlur={() => runValidationTasks("mapZoom", mapZoom)}
        errorMessage={errors.mapZoom?.errorMessage}
        hasError={errors.mapZoom?.hasError}
        {...getOverrideProps(overrides, "mapZoom")}
      ></TextField>
      <TextField
        label="Map tilt"
        isRequired={false}
        isReadOnly={false}
        value={mapTilt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mapLat,
              mapLng,
              mapZoom,
              mapTilt: value,
              mapRotate,
            };
            const result = onChange(modelFields);
            value = result?.mapTilt ?? value;
          }
          if (errors.mapTilt?.hasError) {
            runValidationTasks("mapTilt", value);
          }
          setMapTilt(value);
        }}
        onBlur={() => runValidationTasks("mapTilt", mapTilt)}
        errorMessage={errors.mapTilt?.errorMessage}
        hasError={errors.mapTilt?.hasError}
        {...getOverrideProps(overrides, "mapTilt")}
      ></TextField>
      <TextField
        label="Map rotate"
        isRequired={false}
        isReadOnly={false}
        value={mapRotate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              mapLat,
              mapLng,
              mapZoom,
              mapTilt,
              mapRotate: value,
            };
            const result = onChange(modelFields);
            value = result?.mapRotate ?? value;
          }
          if (errors.mapRotate?.hasError) {
            runValidationTasks("mapRotate", value);
          }
          setMapRotate(value);
        }}
        onBlur={() => runValidationTasks("mapRotate", mapRotate)}
        errorMessage={errors.mapRotate?.errorMessage}
        hasError={errors.mapRotate?.hasError}
        {...getOverrideProps(overrides, "mapRotate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || personalSettingModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || personalSettingModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
