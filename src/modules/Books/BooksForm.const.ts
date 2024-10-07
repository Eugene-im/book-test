import * as Yup from "yup";

export const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    author: Yup.string().required("Author is required"),
});

export const initialValues = {
    name: "",
    author: "",
};