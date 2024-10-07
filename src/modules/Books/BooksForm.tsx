import { useFormik } from "formik";
import { observer } from "mobx-react";
import { initialValues, validationSchema } from "./BooksForm.const";
import { usersController } from "../User/User.ctrl";
import { BooksFormSubmit } from "./BooksForm.ctrl";

export const BooksForm = observer(() => {
  const { userName } = usersController;
  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      BooksFormSubmit(userName, values);
      formik.resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.name && <div>{formik.errors.name}</div>}
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <br />
        <input
          type="text"
          name="author"
          value={formik.values.author}
          onChange={formik.handleChange}
        />
        <br />

        {formik.errors.author && <div>{formik.errors.author}</div>}
      </div>
      <button
        type="submit"
        disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
      >
        Submit
      </button>
    </form>
  );
});
