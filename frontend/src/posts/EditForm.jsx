import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Dashboard from "../layouts/Dashboard";
import { getPostAsync, updatePostsAsync } from "../redux/post/postSlice";
import { selectUser } from "../redux/user/userSlice";
import './style.css'
import UploadPostImg from "./UploadPostImg";
import validationSchema from "./Validations";
import Loading from "../layouts/Loading"

function EditForm(props) {

    const usr = JSON.parse(localStorage.getItem("user_data"));
    const user = useSelector(selectUser);
    const post = useSelector(state => state.posts.currentPost)
    const { postId } = useParams()
    const dispacth = useDispatch();

    const imgSlc = useSelector(state => state.images)
    const { handleChange, handleBlur, values, errors, touched } =
        useFormik({
            initialValues: {
                title: post.title,
                content: post.content,
            }, validationSchema,
        });

    const handleSubmit = (e) => {
        e.preventDefault()
        dispacth(updatePostsAsync({
            id: postId,
            title: values.title,
            content: values.content,
        }
        ))
    }
    useEffect( () => {
         dispacth(getPostAsync({ postId: postId }))
    },[dispacth])    
    return (
        <div>
            <div className='edit-form'>
                <form onSubmit={handleSubmit} >
                    <div>
                    </div>
                    <UploadPostImg id={post.image.ID} btntext="Fotoğrafı değiştir" />
                    {imgSlc.isLoading && <Loading />}
                    <input
                        placeholder="Başlık"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.title && touched.title && (
                        <div className="error">{errors.title}</div>
                    )}
                    <textarea
                        placeholder="İçerik"
                        name="content"
                        value={values.content}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.content && touched.content && (
                        <div className="error">{errors.content}</div>
                    )}
                    <button id="update-post-submit" disabled={values.content && values.title && errors ? false : true} type='submit' >Kaydet</button>
                </form>
            </div>
        </div>
    )
}

export default React.memo(EditForm)