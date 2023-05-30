/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Picture } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PictureUpdateForm(props) {
  const {
    id: idProp,
    picture: pictureModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    s3KeyRaw: "",
    s3KeyResized: "",
    urlRaw: "",
    urlResized: "",
    lat: "",
    lng: "",
    createYear: "",
    createDate: "",
  };
  const [s3KeyRaw, setS3KeyRaw] = React.useState(initialValues.s3KeyRaw);
  const [s3KeyResized, setS3KeyResized] = React.useState(
    initialValues.s3KeyResized
  );
  const [urlRaw, setUrlRaw] = React.useState(initialValues.urlRaw);
  const [urlResized, setUrlResized] = React.useState(initialValues.urlResized);
  const [lat, setLat] = React.useState(initialValues.lat);
  const [lng, setLng] = React.useState(initialValues.lng);
  const [createYear, setCreateYear] = React.useState(initialValues.createYear);
  const [createDate, setCreateDate] = React.useState(initialValues.createDate);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = pictureRecord
      ? { ...initialValues, ...pictureRecord }
      : initialValues;
    setS3KeyRaw(cleanValues.s3KeyRaw);
    setS3KeyResized(cleanValues.s3KeyResized);
    setUrlRaw(cleanValues.urlRaw);
    setUrlResized(cleanValues.urlResized);
    setLat(cleanValues.lat);
    setLng(cleanValues.lng);
    setCreateYear(cleanValues.createYear);
    setCreateDate(cleanValues.createDate);
    setErrors({});
  };
  const [pictureRecord, setPictureRecord] = React.useState(pictureModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Picture, idProp)
        : pictureModelProp;
      setPictureRecord(record);
    };
    queryData();
  }, [idProp, pictureModelProp]);
  React.useEffect(resetStateValues, [pictureRecord]);
  const validations = {
    s3KeyRaw: [],
    s3KeyResized: [],
    urlRaw: [],
    urlResized: [],
    lat: [],
    lng: [],
    createYear: [],
    createDate: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          s3KeyRaw,
          s3KeyResized,
          urlRaw,
          urlResized,
          lat,
          lng,
          createYear,
          createDate,
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
            Picture.copyOf(pictureRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PictureUpdateForm")}
      {...rest}
    >
      <TextField
        label="S3 key raw"
        isRequired={false}
        isReadOnly={false}
        value={s3KeyRaw}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              s3KeyRaw: value,
              s3KeyResized,
              urlRaw,
              urlResized,
              lat,
              lng,
              createYear,
              createDate,
            };
            const result = onChange(modelFields);
            value = result?.s3KeyRaw ?? value;
          }
          if (errors.s3KeyRaw?.hasError) {
            runValidationTasks("s3KeyRaw", value);
          }
          setS3KeyRaw(value);
        }}
        onBlur={() => runValidationTasks("s3KeyRaw", s3KeyRaw)}
        errorMessage={errors.s3KeyRaw?.errorMessage}
        hasError={errors.s3KeyRaw?.hasError}
        {...getOverrideProps(overrides, "s3KeyRaw")}
      ></TextField>
      <TextField
        label="S3 key resized"
        isRequired={false}
        isReadOnly={false}
        value={s3KeyResized}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              s3KeyRaw,
              s3KeyResized: value,
              urlRaw,
              urlResized,
              lat,
              lng,
              createYear,
              createDate,
            };
            const result = onChange(modelFields);
            value = result?.s3KeyResized ?? value;
          }
          if (errors.s3KeyResized?.hasError) {
            runValidationTasks("s3KeyResized", value);
          }
          setS3KeyResized(value);
        }}
        onBlur={() => runValidationTasks("s3KeyResized", s3KeyResized)}
        errorMessage={errors.s3KeyResized?.errorMessage}
        hasError={errors.s3KeyResized?.hasError}
        {...getOverrideProps(overrides, "s3KeyResized")}
      ></TextField>
      <TextField
        label="Url raw"
        isRequired={false}
        isReadOnly={false}
        value={urlRaw}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              s3KeyRaw,
              s3KeyResized,
              urlRaw: value,
              urlResized,
              lat,
              lng,
              createYear,
              createDate,
            };
            const result = onChange(modelFields);
            value = result?.urlRaw ?? value;
          }
          if (errors.urlRaw?.hasError) {
            runValidationTasks("urlRaw", value);
          }
          setUrlRaw(value);
        }}
        onBlur={() => runValidationTasks("urlRaw", urlRaw)}
        errorMessage={errors.urlRaw?.errorMessage}
        hasError={errors.urlRaw?.hasError}
        {...getOverrideProps(overrides, "urlRaw")}
      ></TextField>
      <TextField
        label="Url resized"
        isRequired={false}
        isReadOnly={false}
        value={urlResized}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              s3KeyRaw,
              s3KeyResized,
              urlRaw,
              urlResized: value,
              lat,
              lng,
              createYear,
              createDate,
            };
            const result = onChange(modelFields);
            value = result?.urlResized ?? value;
          }
          if (errors.urlResized?.hasError) {
            runValidationTasks("urlResized", value);
          }
          setUrlResized(value);
        }}
        onBlur={() => runValidationTasks("urlResized", urlResized)}
        errorMessage={errors.urlResized?.errorMessage}
        hasError={errors.urlResized?.hasError}
        {...getOverrideProps(overrides, "urlResized")}
      ></TextField>
      <TextField
        label="Lat"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={lat}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              s3KeyRaw,
              s3KeyResized,
              urlRaw,
              urlResized,
              lat: value,
              lng,
              createYear,
              createDate,
            };
            const result = onChange(modelFields);
            value = result?.lat ?? value;
          }
          if (errors.lat?.hasError) {
            runValidationTasks("lat", value);
          }
          setLat(value);
        }}
        onBlur={() => runValidationTasks("lat", lat)}
        errorMessage={errors.lat?.errorMessage}
        hasError={errors.lat?.hasError}
        {...getOverrideProps(overrides, "lat")}
      ></TextField>
      <TextField
        label="Lng"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={lng}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              s3KeyRaw,
              s3KeyResized,
              urlRaw,
              urlResized,
              lat,
              lng: value,
              createYear,
              createDate,
            };
            const result = onChange(modelFields);
            value = result?.lng ?? value;
          }
          if (errors.lng?.hasError) {
            runValidationTasks("lng", value);
          }
          setLng(value);
        }}
        onBlur={() => runValidationTasks("lng", lng)}
        errorMessage={errors.lng?.errorMessage}
        hasError={errors.lng?.hasError}
        {...getOverrideProps(overrides, "lng")}
      ></TextField>
      <TextField
        label="Create year"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={createYear}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              s3KeyRaw,
              s3KeyResized,
              urlRaw,
              urlResized,
              lat,
              lng,
              createYear: value,
              createDate,
            };
            const result = onChange(modelFields);
            value = result?.createYear ?? value;
          }
          if (errors.createYear?.hasError) {
            runValidationTasks("createYear", value);
          }
          setCreateYear(value);
        }}
        onBlur={() => runValidationTasks("createYear", createYear)}
        errorMessage={errors.createYear?.errorMessage}
        hasError={errors.createYear?.hasError}
        {...getOverrideProps(overrides, "createYear")}
      ></TextField>
      <TextField
        label="Create date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createDate && convertToLocal(new Date(createDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              s3KeyRaw,
              s3KeyResized,
              urlRaw,
              urlResized,
              lat,
              lng,
              createYear,
              createDate: value,
            };
            const result = onChange(modelFields);
            value = result?.createDate ?? value;
          }
          if (errors.createDate?.hasError) {
            runValidationTasks("createDate", value);
          }
          setCreateDate(value);
        }}
        onBlur={() => runValidationTasks("createDate", createDate)}
        errorMessage={errors.createDate?.errorMessage}
        hasError={errors.createDate?.hasError}
        {...getOverrideProps(overrides, "createDate")}
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
          isDisabled={!(idProp || pictureModelProp)}
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
              !(idProp || pictureModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
