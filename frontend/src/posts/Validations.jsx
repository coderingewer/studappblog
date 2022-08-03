import * as yup from "yup";

const validations = yup.object().shape({
	title: yup
		.string()
		.required("Zorunlu alan."),
	content: yup
		.string()
		.required("Zorunlu alan.")
        .min(100,"En az 100 karakter" ),
});

export default validations;