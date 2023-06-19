import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: ""
};

const onSubmit = (values) => {
  // console.log("hello");
  console.log("form data", values);
};

const validate = (values) => {
  // values.name , values.email , values.channel
  // key of the errors object should be similar to that of values object.
  // error.name , error.email , error.channel
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)) {
    errors.email = "invalide emial format";
  }
  if (!values.channel) {
    errors.channel = "required";
  }
  return errors;
};

const YoutubeForm = () => {
  // initial values properties must match the name attribute of the form fields.
  // we need to add onChnage attribute and value attribute to the input filed.
  // we need to assign the formik.values to the value attribute and formik.handleChange to the onChange attribute.
  // we need to pass the formik.handleSubmit to the onSubmit prop in the form tag.
  // when we click on the submit button formik will automatically execute the onSubmit property.
  // For validation we need to pass the validate property to the useFormik hook.
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  // console.log(formik.values);
  console.log("formik errors", formik.errors);
  console.log("Visited", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          name="name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}
        <br />

        <label htmlFor="email"> Email </label>
        <input
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
        <br />

        <label htmlFor="channel">Channel </label>
        <input
          name="channel"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        {formik.errors.channel && formik.touched.channel ? (
          <div style={{ color: "red" }}>{formik.errors.channel}</div>
        ) : null}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default YoutubeForm;
