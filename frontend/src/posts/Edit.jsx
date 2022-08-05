import React, { useState } from 'react';
import { EditorState } from 'draft-js'
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import postSlice, { addPostsAsync } from '../redux/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from 'react-draft-wysiwyg';
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { Navigate } from 'react-router';
import Dashboard from '../layouts/Dashboard';
import UpdateImage from '../image/UpdateImage';

function Edit() {
  const actions = useSelector(state => state.posts)
  const editorState = EditorState.createEmpty();
  const currentUser = useSelector((state) => state.users.CurrentUser);
  const id = localStorage.getItem("currentPostID");

  const userId = currentUser.id;
  const [content, setContent] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setContent(editorState);
  }
  const dispatch = useDispatch()

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        title: "",
        content: "",
      },

      onSubmit: async (e) => {
        await dispatch(addPostsAsync({
          userId: userId,
          title: values.title,
          content: values.content
        }));
      }

    });

  return (
    <div className='add-post' >
      <Dashboard text="Gönderi  Oluştur" />
      <div className='edit-form'>
        <form onSubmit={handleSubmit} >
          <div className='form-inputs' >
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
          </div>
          <button id="update-post-submit" disabled={values.content && values.title ? false : true} type='submit' >Paylaş</button>
        </form>
        <div className='upload-img' >
          {actions.posted && <UpdateImage btntext="Fotoğraf Yükle" id={id} />}
        </div>
      </div>
    </div>
  )
}
export default React.memo(Edit)