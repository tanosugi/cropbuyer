/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Record } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RecordCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    year: "",
    cropName: "",
    statusRating: "",
    yield: "",
    volume: "",
    farmName: "",
    image_url: "",
    memo: "",
  };
  const [year, setYear] = React.useState(initialValues.year);
  const [cropName, setCropName] = React.useState(initialValues.cropName);
  const [statusRating, setStatusRating] = React.useState(
    initialValues.statusRating
  );
  const [yield1, setYield1] = React.useState(initialValues.yield);
  const [volume, setVolume] = React.useState(initialValues.volume);
  const [farmName, setFarmName] = React.useState(initialValues.farmName);
  const [image_url, setImage_url] = React.useState(initialValues.image_url);
  const [memo, setMemo] = React.useState(initialValues.memo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setYear(initialValues.year);
    setCropName(initialValues.cropName);
    setStatusRating(initialValues.statusRating);
    setYield1(initialValues.yield);
    setVolume(initialValues.volume);
    setFarmName(initialValues.farmName);
    setImage_url(initialValues.image_url);
    setMemo(initialValues.memo);
    setErrors({});
  };
  const validations = {
    year: [],
    cropName: [],
    statusRating: [],
    yield: [],
    volume: [],
    farmName: [],
    image_url: [],
    memo: [],
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
          year,
          cropName,
          statusRating,
          yield: yield1,
          volume,
          farmName,
          image_url,
          memo,
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
          await DataStore.save(new Record(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RecordCreateForm")}
      {...rest}
    >
      <TextField
        label="Year"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={year}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              year: value,
              cropName,
              statusRating,
              yield: yield1,
              volume,
              farmName,
              image_url,
              memo,
            };
            const result = onChange(modelFields);
            value = result?.year ?? value;
          }
          if (errors.year?.hasError) {
            runValidationTasks("year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("year", year)}
        errorMessage={errors.year?.errorMessage}
        hasError={errors.year?.hasError}
        {...getOverrideProps(overrides, "year")}
      ></TextField>
      <TextField
        label="Crop name"
        isRequired={false}
        isReadOnly={false}
        value={cropName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              year,
              cropName: value,
              statusRating,
              yield: yield1,
              volume,
              farmName,
              image_url,
              memo,
            };
            const result = onChange(modelFields);
            value = result?.cropName ?? value;
          }
          if (errors.cropName?.hasError) {
            runValidationTasks("cropName", value);
          }
          setCropName(value);
        }}
        onBlur={() => runValidationTasks("cropName", cropName)}
        errorMessage={errors.cropName?.errorMessage}
        hasError={errors.cropName?.hasError}
        {...getOverrideProps(overrides, "cropName")}
      ></TextField>
      <TextField
        label="Status rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={statusRating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              year,
              cropName,
              statusRating: value,
              yield: yield1,
              volume,
              farmName,
              image_url,
              memo,
            };
            const result = onChange(modelFields);
            value = result?.statusRating ?? value;
          }
          if (errors.statusRating?.hasError) {
            runValidationTasks("statusRating", value);
          }
          setStatusRating(value);
        }}
        onBlur={() => runValidationTasks("statusRating", statusRating)}
        errorMessage={errors.statusRating?.errorMessage}
        hasError={errors.statusRating?.hasError}
        {...getOverrideProps(overrides, "statusRating")}
      ></TextField>
      <TextField
        label="Yield"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={yield1}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              year,
              cropName,
              statusRating,
              yield: value,
              volume,
              farmName,
              image_url,
              memo,
            };
            const result = onChange(modelFields);
            value = result?.yield ?? value;
          }
          if (errors.yield?.hasError) {
            runValidationTasks("yield", value);
          }
          setYield1(value);
        }}
        onBlur={() => runValidationTasks("yield", yield1)}
        errorMessage={errors.yield?.errorMessage}
        hasError={errors.yield?.hasError}
        {...getOverrideProps(overrides, "yield")}
      ></TextField>
      <TextField
        label="Volume"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={volume}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              year,
              cropName,
              statusRating,
              yield: yield1,
              volume: value,
              farmName,
              image_url,
              memo,
            };
            const result = onChange(modelFields);
            value = result?.volume ?? value;
          }
          if (errors.volume?.hasError) {
            runValidationTasks("volume", value);
          }
          setVolume(value);
        }}
        onBlur={() => runValidationTasks("volume", volume)}
        errorMessage={errors.volume?.errorMessage}
        hasError={errors.volume?.hasError}
        {...getOverrideProps(overrides, "volume")}
      ></TextField>
      <TextField
        label="Farm name"
        isRequired={false}
        isReadOnly={false}
        value={farmName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              year,
              cropName,
              statusRating,
              yield: yield1,
              volume,
              farmName: value,
              image_url,
              memo,
            };
            const result = onChange(modelFields);
            value = result?.farmName ?? value;
          }
          if (errors.farmName?.hasError) {
            runValidationTasks("farmName", value);
          }
          setFarmName(value);
        }}
        onBlur={() => runValidationTasks("farmName", farmName)}
        errorMessage={errors.farmName?.errorMessage}
        hasError={errors.farmName?.hasError}
        {...getOverrideProps(overrides, "farmName")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={image_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              year,
              cropName,
              statusRating,
              yield: yield1,
              volume,
              farmName,
              image_url: value,
              memo,
            };
            const result = onChange(modelFields);
            value = result?.image_url ?? value;
          }
          if (errors.image_url?.hasError) {
            runValidationTasks("image_url", value);
          }
          setImage_url(value);
        }}
        onBlur={() => runValidationTasks("image_url", image_url)}
        errorMessage={errors.image_url?.errorMessage}
        hasError={errors.image_url?.hasError}
        {...getOverrideProps(overrides, "image_url")}
      ></TextField>
      <TextField
        label="Memo"
        isRequired={false}
        isReadOnly={false}
        value={memo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              year,
              cropName,
              statusRating,
              yield: yield1,
              volume,
              farmName,
              image_url,
              memo: value,
            };
            const result = onChange(modelFields);
            value = result?.memo ?? value;
          }
          if (errors.memo?.hasError) {
            runValidationTasks("memo", value);
          }
          setMemo(value);
        }}
        onBlur={() => runValidationTasks("memo", memo)}
        errorMessage={errors.memo?.errorMessage}
        hasError={errors.memo?.hasError}
        {...getOverrideProps(overrides, "memo")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
