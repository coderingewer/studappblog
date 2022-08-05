import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../layouts/Dashboard";
import { loginAsync } from "../redux/user/userSlice";
import './style.css'
import { Navigate, Route } from 'react-router'

import validationSchema from "./Validation";

function Login() {
    const userSlice = useSelector((state) => state.users)
    const logined = localStorage.getItem("logined")
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

    const dispatch = useDispatch()
    

    const submitUser = async (e) => {
       await dispatch(loginAsync({ email: values.email, password: values.password }))
        console.log(userSlice.isLoggined)
    }
    return (
        <div>
            <Dashboard />
            {logined && <Navigate to="/" replace={true} />}
            <div className="signup-form"  >
                <div className="signup-title" >
                    <h1 >Giriş yap</h1>
                </div>
                <div className="signup-inputs" >
                    <form onSubmit={submitUser}>
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
                        type="password"
                            placeholder="Şifre"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && touched.password && (
                            <div className="error">{errors.password}</div>
                        )}
                        <button type="submit" onSubmit={submitUser}>Giriş yap</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

