import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { uploadImageAsync } from '../redux/Image/imageSlice';

function UploadImage() {
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
        await dispact(uploadImageAsync(formData));
        console.log(formData)
    };
    return (
        <div>
            <br /><br /><br /><br /><br />
            <input type="file" onChange={saveFile} />
            <button onClick={uploadFile}>Upload</button>
        </div>
    )
}

export default UploadImage