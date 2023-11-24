import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Link } from 'react-router-dom'




const UploadFiles = () => {
    const onDrop = useCallback(acceptedFiles => {

    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <div className='w-screen h-screen flex flex-col gap-6 justify-center items-center'>
            <p className='font-bold font-mono'> Upload the X-Rays to automatically label them and get diagnosis instantly ! </p>
            <div {...getRootProps()} className='border border-dashed border-black rounded-xl h-44 w-72'>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p className='m-5'>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
            <Link to = "/">Return to home</Link>
        </div>

    )
}

export default UploadFiles