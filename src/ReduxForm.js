import React from "react";
import Input from "./Input";
import { reduxForm, Field } from "redux-form";

const renderInput = ({ input, meta }) => (
  <Input {...input} type="text" errorMessage={meta.touched && meta.error} />
);
export const renderSelect = ({
  input,
  label,
  meta: { touched, error },
  children
}) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <div
        className={
          "select " + (touched ? (error ? "is-danger" : "is-success") : "")
        }
      >
        <select {...input}>{children}</select>
        {touched && error && <p className="help is-danger">{error}</p>}
      </div>
    </div>
  </div>
);

const onSubmit = values => {
  alert(JSON.stringify(values));
};

const required = v => {
  const errors = {};
  if (!v.clubName) {
    errors.clubName = "Required";
  }
  if (!v || v === "") {
    return "This field is required!";
  }
  return errors;
};
const requiredSelect = v => {
  if (!v || v === "") {
    return "This field is required!";
  }
  return undefined;
};
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const ReduxForm = ({ handleSubmit, valid }) => (
  <div>
    <h2>Redux Form</h2>

    <form onSubmit={handleSubmit}>
      <Field
        name="clubName"
        type="text"
        component={renderField}
        label="Club Name"
      />
      {/* <label>Gender:</label>
      <Field name="sex" component={renderSelect} validate={requiredSelect}>
        <option></option>
        <option name="male">Male</option>
        <option name="female">Female</option>
      </Field>
      <Field
        component={props => {
          return (
            <div class="input-row">
              <input type="text" {...props} />
              {props.touched && props.error && (
                <span className="error">{props.error}</span>
              )}
            </div>
          );
        }}
      />
      <Field
        name="customer-id"
        component={renderInput}
        validate={required}
      ></Field>{" "}
      */}
      <button disabled={!valid} type="submit">
        Submit
      </button>
    </form>
  </div>
);

export default reduxForm({
  form: "My-Customer-registration-form",
  onSubmit,
  required
})(ReduxForm);
