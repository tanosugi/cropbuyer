/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Farm } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function FarmUpdateForm(props) {
  const {
    id: idProp,
    farm: farmModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    growerName: "",
    area: "",
    latestStatus: "",
    polygonString: "",
    description: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [growerName, setGrowerName] = React.useState(initialValues.growerName);
  const [area, setArea] = React.useState(initialValues.area);
  const [latestStatus, setLatestStatus] = React.useState(
    initialValues.latestStatus
  );
  const [polygonString, setPolygonString] = React.useState(
    initialValues.polygonString
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = farmRecord
      ? { ...initialValues, ...farmRecord }
      : initialValues;
    setName(cleanValues.name);
    setGrowerName(cleanValues.growerName);
    setArea(cleanValues.area);
    setLatestStatus(cleanValues.latestStatus);
    setPolygonString(cleanValues.polygonString);
    setDescription(cleanValues.description);
    setErrors({});
  };
  const [farmRecord, setFarmRecord] = React.useState(farmModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Farm, idProp)
        : farmModelProp;
      setFarmRecord(record);
    };
    queryData();
  }, [idProp, farmModelProp]);
  React.useEffect(resetStateValues, [farmRecord]);
  const validations = {
    name: [],
    growerName: [],
    area: [],
    latestStatus: [],
    polygonString: [],
    description: [],
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
          name,
          growerName,
          area,
          latestStatus,
          polygonString,
          description,
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
            Farm.copyOf(farmRecord, (updated) => {
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
      {...getOverrideProps(overrides, "FarmUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              growerName,
              area,
              latestStatus,
              polygonString,
              description,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Grower name"
        isRequired={false}
        isReadOnly={false}
        value={growerName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              growerName: value,
              area,
              latestStatus,
              polygonString,
              description,
            };
            const result = onChange(modelFields);
            value = result?.growerName ?? value;
          }
          if (errors.growerName?.hasError) {
            runValidationTasks("growerName", value);
          }
          setGrowerName(value);
        }}
        onBlur={() => runValidationTasks("growerName", growerName)}
        errorMessage={errors.growerName?.errorMessage}
        hasError={errors.growerName?.hasError}
        {...getOverrideProps(overrides, "growerName")}
      ></TextField>
      <TextField
        label="Area"
        isRequired={false}
        isReadOnly={false}
        value={area}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              growerName,
              area: value,
              latestStatus,
              polygonString,
              description,
            };
            const result = onChange(modelFields);
            value = result?.area ?? value;
          }
          if (errors.area?.hasError) {
            runValidationTasks("area", value);
          }
          setArea(value);
        }}
        onBlur={() => runValidationTasks("area", area)}
        errorMessage={errors.area?.errorMessage}
        hasError={errors.area?.hasError}
        {...getOverrideProps(overrides, "area")}
      ></TextField>
      <TextField
        label="Latest status"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={latestStatus}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              growerName,
              area,
              latestStatus: value,
              polygonString,
              description,
            };
            const result = onChange(modelFields);
            value = result?.latestStatus ?? value;
          }
          if (errors.latestStatus?.hasError) {
            runValidationTasks("latestStatus", value);
          }
          setLatestStatus(value);
        }}
        onBlur={() => runValidationTasks("latestStatus", latestStatus)}
        errorMessage={errors.latestStatus?.errorMessage}
        hasError={errors.latestStatus?.hasError}
        {...getOverrideProps(overrides, "latestStatus")}
      ></TextField>
      <TextField
        label="Polygon string"
        isRequired={false}
        isReadOnly={false}
        value={polygonString}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              growerName,
              area,
              latestStatus,
              polygonString: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.polygonString ?? value;
          }
          if (errors.polygonString?.hasError) {
            runValidationTasks("polygonString", value);
          }
          setPolygonString(value);
        }}
        onBlur={() => runValidationTasks("polygonString", polygonString)}
        errorMessage={errors.polygonString?.errorMessage}
        hasError={errors.polygonString?.hasError}
        {...getOverrideProps(overrides, "polygonString")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              growerName,
              area,
              latestStatus,
              polygonString,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
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
          isDisabled={!(idProp || farmModelProp)}
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
              !(idProp || farmModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
