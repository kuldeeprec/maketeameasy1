import { React, useState } from 'react'
import './maketeam.css'

const MakeTeam = () => {

  const [pin, setPin] = useState()
  const [playPlace, setPlayPlace] = useState([]);
  const [service, setService] = useState(false);
  const checkArea = async () => {
    let pins = await fetch(`https://api.postalpincode.in/pincode/${pin}`)
    let pinJson = await pins.json()
    //  console.log(pinJson,"pinJson");
    let location
    Object.entries(pinJson).forEach(([key, value]) => {
      location = value;
      // console.log(location,"location");
    })
    let loc;
    Object.entries(location).forEach(([key, value]) => {
      if (key === "PostOffice") {
        loc = value;
        // console.log(value);
      }
    })
    let place = [];
    for (let i = 0; i < loc.length; i++) {
      // place = loc[i].Name;
      place.push(loc[i].Name)
      // console.log(loc[i].Name)
    }
    setPlayPlace(place);
    setService(true);
  }


  const onChangePin = (e) => {
    setPin(e.target.value)
  }

  const [playPlayers, setPlayPlayers] = useState([]);

  const searchPlayer = async (event) => {
    let grname = event.target.value;
    const response = await fetch(
      `http://localhost:5000/api/searchplayer/getplayer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ groundname: grname, groundpin: pin })
      }
    );
    const json = await response.json();
    setPlayPlayers(json)
    console.log(json);
    Object.entries(json).forEach(([key, value]) => {
      console.log(value.name);
    })
  }

  return (
    <div>
      <div className="my-1">
        <div className="row">
          <div className="col-sm text-center" style={{
            backgroundImage: `url(../img/world_map_hd.jpg)`
          }}>
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-center mb-4 text-blue-300 my-5" style={{ "color": "#3F51B5" }}><u>Find Players</u></h1>
              <h3 className="font-normal mt-2 text-center text-blue-300 font-weight-bold my-5" style={{ "color": "#3F51B5" }}><u>Find players by filling this form. </u></h3>

              <input onChange={onChangePin} type="text" name="" placeholder="Enter Your Pincode" id="" className="border-b-2 p-4" /><br />
              <button type="submit" onClick={checkArea} className="w-30 my-3 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700">
                Search
              </button>
            </div>
            <div className="row">
              {playPlace.map(place => <button type="button" key={place} onClick={searchPlayer} value={place} className="btn btn-primary my-2"><h5>{place}</h5></button>)}
            </div>

          </div>
          <div className="col-sm" id="plDetail">
            <div
              className="100 items-center justify-center leading-7 space-y-8 p-8 h-full">
              {playPlayers.map(players => <div>
                <div className="row">
                  <div className="col-md-2">
                    <img style={{ width: "60px", height: "60px" }} className="rounded-circle my-2" alt="avatar1" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" />
                  </div>
                  <div className="col-md-2 my-3">
                    <p style={{ fontSize: "15x", fontWeight: "bold" }}>{players.name}</p>
                  </div>
                </div>
                <p>Make Change in thought, life automatically will Change . . .</p>
                <img src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80/200x100/d4d4d4/000000" alt="" className="" />
                <div className="row">
                  <div className="col-md-3 my-2">
                    <button type="button" className="btn btn-primary my-2" style={{ width: "150px" }}>Add Friend +</button>
                  </div>
                  <div className="col my-3">
                    <form>
                      <div className="row">
                        <div className="col-md-4">
                          <input style={{ width: "150px" }} type="text" className="form-control" placeholder="Message" />
                        </div>
                        <div className="col-md-4">
                          <input style={{ width: "150px" }} type="text" className="form-control" placeholder="DD-MM-YYYY" />
                        </div>
                        <div className="col-md-4">
                          <button type="button" className="btn btn-primary" style={{ width: "150px" }}>Send</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>)}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MakeTeam
