import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import "./style.css"
import imageSlice, { updateImageAsync } from '../redux/Image/imageSlice';
function UpdateImage(props) {
    const dispact = useDispatch();

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    
    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        await dispact(updateImageAsync({ id: props.id, data: formData }));
        console.log(formData)
        setFile()
        setFileName("")
    }
    return (
        
        <div className='update-img'>
            <p className='file-name' >{fileName}</p>
            <div>
            <input id = "file-input"type="file" accept=".jpg, .png, .jpeg, .gif," onChange={saveFile} />
            <button className='file-btn' onClick={()=>document.getElementById("file-input").click()} >Fotoğraf Seç</button>
            </div>
            <div>
            </div>
            <button className='file-btn' onClick={uploadFile}>{props.btntext}</button>
        </div>
    )
}

export default React.memo(UpdateImage)