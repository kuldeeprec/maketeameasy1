import { React, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const FormData = require("form-data");

const Profile = () => {

    const [user, setUser] = useState({});
    const [img1, setImg1] = useState("");
    const [myimage, setMyimage] = useState({ profileImage: '', email: '' });
    const [mypost, setMypost] = useState({ postImage: '', email: '' });

    const fetch_user = async () => {
        let p2 = localStorage.getItem('user_id');
        console.log(p2)
        const response = await fetch(
            `http://localhost:5000/api/auth/finduser`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: p2 })
            }
        );
        const json = await response.json();
        setUser(json.user);
        setImg1(json.img1);
        console.log(json.img1,"img1");
        console.log(json.user,"user");
    }

    const uploadImage = async () => {
        const fl = myimage.profileImage;
        let p2 = localStorage.getItem('user_id');
        console.log(fl, "fl");
        const formdata = new FormData();
        formdata.append('myimage', myimage.profileImage, myimage.profileImage.name);
        formdata.append('email', p2);
        let url = 'http://localhost:5000/api/file/uploadimage';
        try {
            let response = await axios.post(url, formdata);
            toast.success("Inserted Successfully");
            // localStorage.removeItem('token');
            console.log(response);
        }
        catch (e) {
            toast.error("Something Went Wrong");
        }
    }

    const imageUpload = (e) => {
        console.log(e.target.files[0]);
        setMyimage({ ...myimage, profileImage: e.target.files[0] });
    }

    const uploadPost = async () => {
        const fl = mypost.postImage;
        let p2 = localStorage.getItem('user_id');
        console.log(fl, "fl");
        const formdata = new FormData();
        formdata.append('mypost', mypost.postImage, mypost.postImage.name);
        formdata.append('email', p2);
        let url = 'http://localhost:5000/api/file/uploadpost';
        try {
            let response = await axios.post(url, formdata);
            toast.success("Inserted Successfully");
            // localStorage.removeItem('token');
            console.log(response);
        }
        catch (e) {
            toast.error("Something Went Wrong");
        }
    }

    const postUpload = (e) => {
        console.log(e.target.files[0]);
        setMypost({ ...mypost, postImage: e.target.files[0] });
    }

    useEffect(() => {
        fetch_user();
    }, []);
    return (
        <div>
            <div className="row" style={{ height: "700px" }}>
                <div className="col-md-3 card" style={{}}>
                    <div className="card-body" style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <u><h3>My Profile</h3></u>
                        <div className="row">
                            <div className="col  my-3">
                                <img style={{ width: "100px", height: "100px"}} className="rounded-circle" alt="avatar1" src={`../../UserImages/${img1}`} />
                            </div>
                            <div className="col-md-7 my-5">
                                <form>
                                    <div className="form-group">
                                        <input onChange={imageUpload} type="file" className="form-control-file" name="myfile" id="myfile" />
                                        <button type="button" onClick={uploadImage} className="btn btn-primary my-3" style={{ width: "70px" }}>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <hr />
                        <h4 className="my-3" style={{ color: "blue" }}>{user.name}</h4>
                        <hr />
                        <div>
                            <div className="flex items-center justify-center w-full">
                                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click here to New Post</span></p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="post" onChange={postUpload} name="post" type="file" className="form-control-file" />
                                </label>
                            </div>
                            <button type="button" onClick={uploadPost} className="btn btn-primary" style={{ width: "95px", marginLeft: "100px" }}>Upload</button>
                        </div>
                    </div>
                </div>
                <div className="col card">
                    <div className="card-body" >
                        <u><h3 style={{ fontWeight: "bold" }}>About</h3></u>
                        <div className="container">
                            <div className="row my-5">
                                <div className="col">
                                    Name
                                </div>
                                <div className="col">
                                    {user.name}
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col">
                                    Email
                                </div>
                                <div className="col">
                                    {user.signupEmail}
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col">
                                    district
                                </div>
                                <div className="col">
                                {/* <div className="col-md-1 my-2"> */}
                                    {user.district}
                                </div>
                                {/* <div className="col">
                                    <button type="button" className="btn btn-danger" style={{ width: "70px" }}>Edit</button>
                                </div> */}
                            </div>
                            <div className="row my-5">
                                <div className="col">
                                    Pincode
                                </div>
                                <div className="col">
                                    {user.pincode}
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col">
                                    Ground
                                </div>
                                <div className="col">
                                    {user.place}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile