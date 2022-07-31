import { useFormik } from "formik";
import './style.css'

import validationSchema from "./Validation";

function Login() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
        useFormik({
            initialValues: {
                email: "",
                password: "",
            },
            onSubmit: (values) => {
                console.log(values);
            },
            validationSchema,
        });

    return (
        <div className="signup-form"  >
            <div className="signup-title" >
                <h1 >Giriş yap</h1>
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
                    placeholder="Şifre"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                        <div className="error">{errors.password}</div>
                    )}



                    <button type="submit">Kayıt Ol</button>
                </form>
            </div>
        </div>
    );
}

export default Login;

