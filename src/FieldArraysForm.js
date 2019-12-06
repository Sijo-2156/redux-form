import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <React.Fragment>
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
      </div>
    </div>
    {touched && error && <span>{error}</span>}
  </React.Fragment>
);

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting, valid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="clubName"
        type="text"
        component={renderField}
        label="Club Name"
      />

      <div>
        <button type="submit" disabled={!valid}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "fieldArrays", // a unique identifier for this form
  validate
})(FieldArraysForm);
