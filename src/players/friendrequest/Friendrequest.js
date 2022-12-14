import { React, useEffect, useState } from 'react'

const Friendrequest = () => {

    const addFriend = async (event) => {
        let p1 = event.target.value;
        let p2 = localStorage.getItem('user_id');
        console.log(p1, p2,"p2");
        const response = await fetch(
            `http://localhost:5000/api/friends/confirmfriend`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ reciever_id: p2, sender_id: p1 })
            }
        );
        const json = await response.json();
        console.log(json);
    }
    const [PendingFriend, setPendingFriend] = useState([])
    const FetchPendingFriend = async () => {
        const p = localStorage.getItem('user_id');
        console.log(p, "p");
        const response = await fetch(
            `http://localhost:5000/api/friends/fetchpendingfriend`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: p })
            }
        );
        const json = await response.json();
        setPendingFriend(json[0].pending_friends_reciever);
        console.log(json[0], "json");
    }

    useEffect(() => {
        FetchPendingFriend();
    }, []);

    return (
        <div className="container">
            <div className="row">
                {PendingFriend.map(players => <div className="col-md-3">
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -m-4 justify-center">
                                <div>
                                    <a className="block relative rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-cover object-center block" src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80/200x100/d4d4d4/000000" style={{ width: "250px", height: "350px" }} />
                                    </a>
                                    <div className="mt-4 text-center">
                                        <h2 className="text-gray-900 title-font text-lg font-medium">Somnath Yadav</h2>
                                        <span className="justify-center items-center mx-3"><button type="button" onClick={addFriend} value={players.friend_id} className="btn btn-primary" style={{ width: "100px" }}>Confirm</button></span>
                                        <span className="justify-center items-center"><button type="button" className="btn btn-primary my-2" style={{ width: "100px" }}>Delete</button></span>
                                        <div className="mt-1">
                                        </div>
                                        <div className="mt-1">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>)}
            </div>
        </div>
    )
}

export default Friendrequest