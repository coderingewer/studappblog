import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { updatePostImgsAsync } from '../redux/post/postSlice';
import "./style.css"
function UpdatePosImage() {
    const dispact = useDispatch();

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const { postId } = useParams()

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        await dispact(updatePostImgsAsync({ id: postId, data:formData }));
        console.log(formData)
        setFile()
        setFileName("")
    }
    return (

        <div className='update-img'>
            <p className='file-name' >{fileName}</p>
            <div>
                <input id="file-input" type="file" accept=".jpg, .png, .jpeg, .gif," onChange={saveFile} />
                <button className='file-btn' onClick={() => document.getElementById("file-input").click()} >Fotoğraf Seç</button>
            </div>
            <div>
            </div>
            <button className='file-btn' onClick={uploadFile}>Gönderiye fotoğraf ekle</button>
        </div>
    )
}

export default UpdatePosImage