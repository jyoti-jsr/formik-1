import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: ""
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

const YoutubeForm = () => {
  //  1.onBlur={formik.handleBlur}
  //  2.onChange={formik.handleChange}
  //  3.value={formik.values.email}
  //  these line of code is continuesly repeated for every input filed.
  //  we can replace the above 3 lines of code with a single function call ...formik.getFiledProps('name')
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate
  });

  // console.log(formik.values);
  console.log("formik errors", formik.errors);
  console.log("Visited", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          id="name"
          name="name"
          {...formik.getFieldProps("name")}
        />
        {formik.errors.name && formik.touched.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}
        <br />

        <label htmlFor="email"> Email </label>
        <input
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.errors.email && formik.touched.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
        <br />

        <label htmlFor="channel">Channel </label>
        <input
          type="text"
          id="channel"
          name="channel"
          {...formik.getFieldProps("channel")}
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
