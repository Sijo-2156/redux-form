import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import "./App.css";

let SignInForm = props => {
  const { handleSubmit, error } = props;
  console.log("props", props);
  console.log("props.error", error);
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="field">
        <div className="control">
          <Field
            name="firstName"
            component={renderError}
            type="text"
            label="First Name"
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <Field
            name="lastName"
            component={renderField}
            type="text"
            label="Last Name"
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <Field
            name="email"
            component={renderField}
            type="email"
            label="Email Address"
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <Field name="age" component={renderField} type="number" label="Age" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">Proficiency</label>
          <div className="select">
            <Field className="input" name="proficiency" component="select">
              <option />
              <option value="beginner">Beginner Dev</option>
              <option value="intermediate">Intermediate Dev</option>
              <option value="expert">Expert Dev</option>
            </Field>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">Gender</label>
          <label className="radio">
            <Field name="gender" component="input" type="radio" value="male" />{" "}
            Male
          </label>
          <label className="radio">
            <Field
              name="gender"
              component="input"
              type="radio"
              value="female"
            />{" "}
            Female
          </label>
        </div>
      </div>

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

      <div className="field">
        <div className="control">
          <label className="checkbox">
            <Field
              name="saveDetails"
              id="saveDetails"
              component="input"
              type="checkbox"
            />
            Save Details
          </label>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">Message</label>
          <Field className="textarea" name="message" component="textarea" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </div>
    </form>
  );
};

const validate = val => {
  const errors = {};
  if (!val.firstName) {
    console.log("First Name is required");
    errors.firstName = "First Name is required";
  }
  if (!val.lastName) {
    console.log("Last Name is required");
    errors.lastName = "First Name is required";
  }
  if (!val.email) {
    console.log("email is required");
    errors.email = "Required";
  } else if (!/^.+@.+$/i.test(val.email)) {
    console.log("email is invalid");
    errors.email = "Invalid email address";
  }
  if (!val.age) {
    errors.age = "Required";
  } else if (isNaN(Number(val.age))) {
    errors.age = "Must be a number";
  } else if (Number(val.age) < 18) {
    errors.age = "Sorry, you must be at least 18 years old";
  }
  return errors;
};
const renderError = props =>
  props.touched && props.error ? <span>{props.error}</span> : false;
console.log("======= renderError", renderError);
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div className="control">
      <label className="field">{label}</label>
      <input className="input" {...input} placeholder={label} type={type} />
    </div>
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);
SignInForm.propTypes = {
  fields: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
};
SignInForm = reduxForm({
  form: "signIn",
  validate
})(SignInForm);

class App extends Component {
  handleSignIn = values => {
    console.log(values);
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <p className="App-intro">Contact Form</p>
          <SignInForm onSubmit={this.handleSignIn} />
        </div>
      </div>
    );
  }
}

export default App;
