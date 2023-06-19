import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  social: {
    facebook: "",
    twitter: ""
  },
  phoneNumbers: ["", ""],
  phNumbers: [""]
};

const savedValues = {
  name: "jyoti",
  email: "j@gmail.com",
  channel: "jyoti",
  social: {
    facebook: "",
    twitter: ""
  },
  phoneNumbers: ["", ""],
  phNumbers: [""]
};

const onSubmit = (values, onSubmitProps) => {
  // console.log("hello");
  console.log("form data", values);
  console.log("onSubmitProps", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Format").required("Required"),
  channel: Yup.string().required("Required")
});

// Reset Form Data - 1. resetting the form data with a reset button.
//                   2. after form submission - we can use onSubmitProps
//                      on onSubmit props - onSubmitProps.resetForm().

const ResetFormData = () => {
  const [formValues, setFormValues] = useState();

  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
      // validateOnMount
      enableReinitialize
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <label htmlFor="name">Name </label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component={TextError} />

            <br />

            <label htmlFor="email"> Email </label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />

            <br />

            <label htmlFor="channel">Channel </label>
            <Field type="text" id="channel" name="channel" />
            <ErrorMessage name="channel">
              {(errorMsg) => <div style={{ color: "red" }}>{errorMsg}</div>}
            </ErrorMessage>

            <br />

            <label htmlFor="facebook">facebook </label>
            <Field type="text" id="facebook" name="social.facebook" />
            {/* <ErrorMessage name="social.facebook" /> */}

            <br />

            <label htmlFor="twitter">twitter</label>
            <Field type="text" id="facebook" name="social.twitter" />

            <br />

            <label htmlFor="primaryPh">Primary Phone No</label>
            <Field type="text" id="primaryPh" name="phoneNumbers[0]" />

            <br />

            <label htmlFor="secondaryPh">Secondary Phone No</label>
            <Field type="text" id="secondaryPhh" name="phoneNumbers[1]" />

            <br />

            <label>List of phone numbers</label>
            <FieldArray name="phNumbers">
              {(fieldArrayProps) => {
                // console.log("fieldArrayProps", fieldArrayProps);
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { phNumbers } = values;
                return (
                  <div>
                    {phNumbers.map((phNumber, index) => (
                      <div key={index}>
                        <Field name={`phNumbers[${index}]`} />
                        <button onClick={() => push("")}>+</button>
                        {index > 0 && (
                          <button onClick={() => remove(index)}>-</button>
                        )}
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>

            <br />

            <button type="button" onClick={() => setFormValues(savedValues)}>
              Load Saved Data
            </button>
            <button type="reset">Reset</button>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default ResetFormData;
