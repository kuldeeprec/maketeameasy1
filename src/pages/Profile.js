import React from 'react'

const Profile = () => {
    return (
        <div>
            <div className="row" style={{ height: "700px" }}>
                <div className="col-md-3 card" style={{}}>
                    <div className="card-body" style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <u><h3>My Profile</h3></u>
                        <div className="row">
                            <div className="col  my-3">
                                <img style={{ width: "100px", height: "100px" }} className="rounded-circle" alt="avatar1" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" />
                            </div>
                            <div className="col-md-7 my-5">
                                <form>
                                    <div class="form-group">
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <hr />
                        <h4 className="my-3" style={{color: "blue"}}> Amit Yadav </h4>
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
                                    Amit Yadav
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col">
                                    Email
                                </div>
                                <div className="col">
                                    faizabadamit26@gmail.com
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col">
                                    district
                                </div>
                                <div className="col-md-1 my-2">
                                    Ayodhya
                                </div>
                                <div className="col">
                                    <button type="button" className="btn btn-danger" style={{ width: "70px" }}>Edit</button>
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col">
                                    Pincode
                                </div>
                                <div className="col">
                                    224182
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col">
                                    Ground
                                </div>
                                <div className="col">
                                    Raunahi
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