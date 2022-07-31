import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import Dashboard from "../layouts/Dashboard";
import { editUserAsync, registerAsync, selectUser } from "../redux/user/userSlice";
import './style.css'

import validationSchema from "./Validation";

function EditUser() {
    const user = useSelector(selectUser) ;
    const updated = useSelector((state) => state.users.isUpdated) ;
    const dispacth = useDispatch();
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
        useFormik({
            initialValues: {
                email: user.email,
                username: user.username,
                name: user.name,
                password:  user.password,
                passwordConfirm: user.password,
            },
            onSubmit: async (values) => {
                await dispacth(editUserAsync({
                    id: user.ID,
                    email: values.email,
                    username: values.username,
                    name: values.name,
                    password: values.password
                }
                ))
            },
            validationSchema,
        });
    return (
        <div>
            <Dashboard />
            { updated && <Navigate to = "/profile" replace={false} />}
            <div className="signup-form"  >
                <div className="signup-title" >
                    <h1 >Düzenle</h1>
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
                        <button type="submit">Kaydet</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditUser;

