import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
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

const onSubmit = (values) => {
  // console.log("hello");
  console.log("form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Format").required("Required"),
  channel: Yup.string().required("Required")
});

// 1.Formik - this component is replace for useFormik hook,
// the agruments passed to the useFormik hook will be passed to the
// Formik component as props. we need to wrap our intire form with Formik.

// Form
// Field
// Error Messeges

const Dynamic_FormControls = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
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

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default Dynamic_FormControls;
