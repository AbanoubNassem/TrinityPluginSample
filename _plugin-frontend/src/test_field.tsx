import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { useState } from "react";
import FieldProps from "trinity-types/types/Props/Fields/FieldProps";
import TrinityField from "trinity-types/types/Models/Fields/TrinityField";

const TestField = ({
  component,
  formData,
  setFieldValue,
  errors,
  localize,
}: FieldProps<TrinityField>) => {
  const [value, setValue] = useState(formData[component.columnName] ?? "");
  return (
    <>
      <InputText
        id={component.columnName}
        name={component.columnName}
        type={component.inputType}
        required={component.isRequired}
        placeholder={localize("field_text")}
        className={classNames({ "p-invalid": errors[component.columnName] })}
        tooltip={component.tooltip}
        tooltipOptions={{ event: "focus", position: "top" }}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setFieldValue(component.columnName, event.target.value);
        }}
      />
    </>
  );
};

export default TestField;
