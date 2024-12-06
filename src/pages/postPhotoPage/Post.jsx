import axios from 'axios';
import React, { useState } from 'react'
import { useAuthContext } from '../../contexts/Auth';
import AvatarEditor from 'react-avatar-editor';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import { Toaster, toast } from 'react-hot-toast'
import Loader from '../../components/loader/Loader';
export default function Post() {
    const [photoDetails, setPhotoDetails] = useState({
        title: "",
        description: "",
    });
    const { user, showLoader, setShowLoader } = useAuthContext();
    const [file, setFile] = useState();

    const navigate = useNavigate()

    const handleUpload = async () => {
        setShowLoader(true)
        const accessToken = Cookies.get('accessToken');
        console.log(accessToken)
        if (accessToken) {

            const formData = new FormData();
            formData.append('file', file);
            formData.append('userId', user?._id);
            formData.append('title', photoDetails.title);
            formData.append('description', photoDetails.description);

            axios.post('http://localhost:8000/api/v1/photos/post-photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `${accessToken}`
                }
            })
                .then(
                    (res) => {
                        setShowLoader(false)
                        toast.success(res.data.message)
                        setFile(null)
                        setPhotoDetails({})
                    }
                )
        }
        else {
            toast.error("Sign up or Log in")
        }


    }

    let editorRef;
    return (
        <>
            <div className="relative container top-20 mx-auto px-4">

                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Create a Pin</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {!file ? <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-8 rounded-lg">
                            <i className="fas fa-cloud-upload-alt text-6xl text-gray-400 mb-4"></i>
                            <input type="file"
                                required
                                onChange={(e) => setFile(e.target.files[0])}
                                className="hidden" id="file-upload" />
                            <label htmlFor="file-upload" className="bg-red-600 text-white px-4 py-2 rounded-full cursor-pointer">Click to upload</label>
                        </div> : <div className='flex items-center justify-center gap-4'> <AvatarEditor
                            ref={(ref) => (editorRef = ref)}
                            image={file}
                            width={250}
                            height={250}
                            color={[255, 255, 255, 0.6]}
                        />
                            <button onClick={() => setFile(null)}><CloseIcon /></button>
                        </div>
                        }
                        <div>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
                                <input type="text" id="title" name='tittle'
                                    required
                                    onChange={(e) => setPhotoDetails({ ...photoDetails, title: e.target.value })}
                                    value={photoDetails?.title}
                                    className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-red-600" placeholder="Add your title" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
                                <textarea id="description"
                                    required
                                    onChange={(e) => setPhotoDetails({ ...photoDetails, description: e.target.value })}
                                    name='description'
                                    value={photoDetails?.description}
                                    className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-red-600" rows="4" placeholder="Tell everyone what your Pin is about"></textarea>
                            </div>
                            <button onClick={handleUpload} className="relative bg-red-600 text-white px-4 py-1 rounded-full w-full h-10">{
                            showLoader? <Loader/> : 'Save'
                        }</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
