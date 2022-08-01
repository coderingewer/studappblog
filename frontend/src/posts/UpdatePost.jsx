import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import UpdateImage from "../image/UpdateImage";
import Dashboard from "../layouts/Dashboard";
import { updatePostsAsync } from "../redux/post/postSlice";
import { editUserAsync, getUserAsync, selectUser } from "../redux/user/userSlice";
import './style.css'


function UpdatePost() {
    const usr = JSON.parse(localStorage.getItem("user_data"));
    const user = useSelector(selectUser);
    const {postId} =  useParams()
    const dispacth = useDispatch();
    const {handleChange, handleBlur, values, errors, touched } =
        useFormik({
            initialValues: {
                title: "",
                content: "",
            },
        });

    const submitPost = (e) => {
        e.preventDefault()
        dispacth(updatePostsAsync({
            id: postId,
            title: values.title,
            content: values.content,
        }
        ))  
    }
    return (
        <div>
            <Dashboard />
            <div className="signup-form"  >
                <div className="signup-title" >
                    <h1 >Düzenle</h1>
                </div>
                <div className="signup-inputs" >

                    <form onSubmit={submitPost}>
                        <input
                            placeholder="title"
                            name="title"
                            value={values.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                       

                        <input
                            placeholder="Adı"
                            name="content"
                            value={values.content}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        
                        
                        <button onSubmit={submitPost} type="submit">Kaydet</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default  UpdatePost

