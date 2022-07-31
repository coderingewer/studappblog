import { useFormik } from "formik";
import './style.css'

import validationSchema from "./Validation";

function Signup() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
        useFormik({
            initialValues: {
                email: "",
                username: "",
                name: "",
                password: "",
                passwordConfirm: "",
            },
            onSubmit: (values) => {
                console.log(values);
            },
            validationSchema,
        });

    return (
        <div className="signup-form"  >
            <div className="signup-title" >
                <h1 >Kayıt ol</h1>
            </div>
            <div className="signup-inputs" >

                <form onSubmit={handleSubmit}>
                    <input
                    placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                        <div className="error">{errors.email}</div>
                    )}

                    <input
                    placeholder="Adı"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    {errors.name && touched.name && (
                        <div className="error">{errors.name}</div>
                    )}


                    <input
                    placeholder="Kullanıcı Adı"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.username && touched.username && (
                        <div className="error">{errors.username}</div>
                    )}


                    <input
                    placeholder="Şifre"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                        <div className="error">{errors.password}</div>
                    )}


                    <input
                    placeholder="Şifre tekrar"
                        name="passwordConfirm"
                        value={values.passwordConfirm}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.passwordConfirm && touched.passwordConfirm && (
                        <div className="error">{errors.passwordConfirm}</div>
                    )}


                    <button type="submit">Kayıt Ol</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;

