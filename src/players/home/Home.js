import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './home.css'
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Home = () => {

    const [pendPlayer, setPendPlayer] = useState([]);
    const fetchNoti_friend = async (event) => {
        let p2 = localStorage.getItem('user_id');
        const response = await fetch(
            `http://localhost:5000/api/playing_live/fetchsendnotification`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: p2 })
            }
        );
        const json = await response.json();
        setPendPlayer(json)
        // console.log(json);
    }
    const [acceptPlayer, setAcceptPlayer] = useState([]);
    const fetchAccep_friend = async (event) => {
        let p2 = localStorage.getItem('user_id');
        const response = await fetch(
            `http://localhost:5000/api/playing_live/fetchaccept_reci_notification`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: p2 })
            }
        );
        const json = await response.json();
        setPendPlayer(json)
        // console.log(json);
    }

    const acc_playing_friend = async (event) => {
        let p1 = event.target.value;
        console.log(event.target.value, "p1");
        let p2 = localStorage.getItem('user_id');
        const response = await fetch(
            `http://localhost:5000/api/playing_live/acceptpendsendnotification`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ send_id: p1, reci_id: p2 })
            }
        );
        const json = await response.json();
        console.log(json);
    }

    useEffect(() => {
        fetchNoti_friend();
        fetchAccep_friend();
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col">

                    <aside id="sticky-div1" className="w-64" aria-label="Sidebar">
                        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/profile" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                        <span className="ml-3" style={{ fontWeight: "bold" }}>My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/videohome" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap" style={{ fontWeight: "bold" }}>Video</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/maketeam" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap" style={{ fontWeight: "bold" }}>MakeTeam</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/friendrequest" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap" style={{ fontWeight: "bold" }}>Friend Request</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/shophome" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap" style={{ fontWeight: "bold" }}>Products</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/friends" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap" style={{ fontWeight: "bold" }}>Friends</span>
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap" style={{ fontWeight: "bold" }}>Messenger</span>
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="/news" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap" style={{fontWeight: "bold"}}>News</span>
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </aside>

                </div>
                <div className="col">
                    <div
                        className="100 items-center justify-center leading-7 space-y-8 p-8 h-full">
                        <div>
                            <div className="row">
                                <div className="col-md-2">
                                    <img style={{ width: "60px", height: "60px" }} className="rounded-circle my-2" alt="avatar1" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" />
                                </div>
                                <div className="col-md-2 my-3">
                                    <p style={{ fontSize: "15x", fontWeight: "bold" }}>Aiswariya Roy</p>
                                </div>
                            </div>
                            <p>Make Change in thought, life automatically will Change . . .</p>
                            <img src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80/200x100/d4d4d4/000000" alt="" className="" />
                            <div className="row">
                                <div className="col-md-6">
                                    <button type="button" className="btn btn-primary my-2" style={{ width: "100px" }}>Like</button>
                                </div>
                                <div className="col-md-6">
                                    <button type="button" className="btn btn-primary my-2" style={{ width: "100px" }}>Comment</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-md-2">
                                    <img style={{ width: "60px", height: "60px" }} className="rounded-circle my-2" alt="avatar1" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" />
                                </div>
                                <div className="col-md-2 my-3">
                                    <p style={{ fontSize: "15x", fontWeight: "bold" }}>Aiswariya Roy</p>
                                </div>
                            </div>
                            <p>Make Change in thought, life automatically will Change . . .</p>
                            <img src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80/200x100/d4d4d4/000000" alt="" className="" />
                            <div className="row">
                                <div className="col-md-6">
                                    <button type="button" className="btn btn-primary my-2" style={{ width: "100px" }}>Like</button>
                                </div>
                                <div className="col-md-6">
                                    <button type="button" className="btn btn-primary my-2" style={{ width: "100px" }}>Comment</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-md-2">
                                    <img style={{ width: "60px", height: "60px" }} className="rounded-circle my-2" alt="avatar1" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" />
                                </div>
                                <div className="col-md-2 my-3">
                                    <p style={{ fontSize: "15x", fontWeight: "bold" }}>Aiswariya Roy</p>
                                </div>
                            </div>
                            <p>Make Change in thought, life automatically will Change . . .</p>
                            <img src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80/200x100/d4d4d4/000000" alt="" className="" />
                            <div className="row">
                                <div className="col-md-6">
                                    <button type="button" className="btn btn-primary my-2" style={{ width: "100px" }}>Like</button>
                                </div>
                                <div className="col-md-6">
                                    <button type="button" className="btn btn-primary my-2" style={{ width: "100px" }}>Comment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <aside id="sticky-div2" className="w-64" aria-label="Sidebar">
                        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Pending Request</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pendPlayer.length!==0 ? (
                                        pendPlayer.map(players =>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td onClick={acc_playing_friend}>        
                                                <span className="flex-1 ml-3 whitespace-nowrap" style={{ fontWeight: "bold" }}>{players.name}</span>
                                            </td>
                                            <td><span className="inline-flex justify-center items-center"><Link href='#'><BsFillCheckCircleFill style={{ fontSize: "30px" }} /></Link></span></td>
                                        </tr>
                                    )
                                    )
                                    :
                                    (<p>No Pending Player</p>)}
                                </tbody>
                            </table>

                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">Accepted Request</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {acceptPlayer.length!==0 ? (acceptPlayer.map(players1 =>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td><span className="flex-1 ml-3 whitespace-nowrap" style={{ fontWeight: "bold" }}>{players1.name}</span></td>
                                        <td><span className="inline-flex justify-center items-center"><button type="button" className="btn btn-danger my-2" style={{ width: "80px" }}>Decline</button></span></td>
                                    </tr>)
                                ) : 
                                (<p>No Accepted Player</p>)}
                                </tbody>
                            </table>
                            {/* {pendPlayer.map(players =>
                                <ul className="space-y-2">
                                    <li onClick={acc_playing_friend}>
                                        <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <span className="flex-1 ml-3 whitespace-nowrap" style={{ fontWeight: "bold" }}>{players.name}</span>
                                            <span className="inline-flex justify-center items-center"><Link href='#'><BsFillCheckCircleFill style={{ fontSize: "30px" }} /></Link></span>
                                        </div>
                                    </li>
                                </ul>
                            )} */}
                            {/* <h3 className="flex-1 ml-3 whitespace-nowrap mx-5 text-blue-600">Accepted Request</h3>
                            {acceptPlayer.map(players1 =>
                                <ul className="space-y-2">
                                    <li>
                                        <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <span className="flex-1 ml-3 whitespace-nowrap" style={{ fontWeight: "bold" }}>{players1.name}</span>
                                            <span className="inline-flex justify-center items-center"><button type="button" className="btn btn-danger my-2" style={{ width: "80px" }}>Decline</button></span>
                                        </div>
                                    </li>
                                </ul>
                            )} */}
                        </div>
                    </aside>
                </div>
            </div >
        </div >
    )
}

export default Home