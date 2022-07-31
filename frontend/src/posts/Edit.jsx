import React, { useState } from 'react';
import { EditorState } from 'draft-js'
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { addPostsAsync } from '../redux/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from 'react-draft-wysiwyg';
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

function Edit() {
  const editorState = EditorState.createEmpty();
  const currentUser = useSelector((state) => state.users.CurrentUser);
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
          userId: userId, photoId: 1, title:
            values.title,
          content: values.content
        }));

        console.log(values)
      }

    });



  return (
    <div className='edit-form'>
      <form onSubmit={handleSubmit} >
        <label htmlFor="title">Title</label>
        
        <input
          placeholder="Başlık"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label htmlFor="title">Content</label>
        <input
          placeholder="İçerik"
          name="content"
          value={values.content}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default Edit