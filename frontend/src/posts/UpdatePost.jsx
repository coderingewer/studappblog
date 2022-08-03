import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Dashboard from "../layouts/Dashboard";
import { getPostAsync, updatePostsAsync } from "../redux/post/postSlice";
import { selectUser } from "../redux/user/userSlice";
import './style.css'
import validationSchema from "./Validations";
import EditForm from "./EditForm";
import { render } from "react-dom";


function UpdatePost() {
    const { postId } = useParams()
    const dispacth = useDispatch();
    
    return (
        <div>
            <Dashboard text="Gönderiyi Düzenle" />
            <EditForm />    
        </div>
    );
}

export default UpdatePost

