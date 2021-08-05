import React, { useState } from 'react'

export default function RakedTeams() {
  const [state, setState] = useState({
    players: "",
    teamPlayers: [{
      playerName: "eddie",
      playerRanking: "10"
    },
    {
      playerName: "juan",
      playerRanking: "10"
    }],
    lineUp: [],
    groupSize: ""
  })

  const [message, setMessage] = useState(null)


  console.log(state)


  function handleRandomTeamGenerator(event) {
    console.log('entro en player arr : ', event);
    let split = state.players.split(',')
    let totalSize = state.groupSize;

    let shuffle = split.sort(() => Math.random() - 0.5);
    console.log(shuffle);

    function chunk(array, size) {
      if (array.length <= size) {
        return [array];
      }

      return [array.slice(0, size), ...chunk(array.slice(size), size)];
    }


    var team = chunk(shuffle, totalSize);

    console.log('THE TEAM : ', team)

    setState({ ...state, lineUp: team });

  }
  function handleInputChange(event) {
    console.log('EVENT : ', event.target.value)

    setState({
      ...state,
      [event.target.name]: event.target.value,
    })


  }

  function handlePlayerAdd(event) {

    let player = {
      playerRank: state.playerRank,
      playerName: state.playerName
    }

    console.log('THE EVENT : ----', event);
    console.log('CURRENT PLAYER BEING ADDED :', player)



  }


  return (
    // <div className="Home">

    <div className="container mt-5">
      <div id="formContainer">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-white pb-5">Add players and their rankings</h3>
          </div>
        </div>


        {state.teamPlayers.map(player => {
          return (
            <div className="row">
              <div className="col-md-6">
                <p className="text-white borderOutline">{player.playerName}</p>
              </div>
              <div className="col-md-6">
                <p className="text-white borderOutline">{player.playerRanking}</p>
              </div>
            </div>
          )
        })}



        <div className="row">
          <div className="col-md-6">
            <input type="text" name="playerName" value={state.playerName} className="form-control" placeholder="Player Name" onChange={handleInputChange} aria-label="First name" />
          </div>
          <div class="col-md-6">

            <select id="inputRank" name="playerRank" class="form-select" onChange={handleInputChange}>
              <option selected>Player Rank</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>


            </select>



          </div>
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <button
                type="button"
                onClick={handlePlayerAdd}
                value="Add Another Player"
                className="btn btn-light mt-2"
              >
                Add Another Player
              </button>
            </div>
          </div>

        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <button
              type="button"
              id="teamButton"
              onClick={handleRandomTeamGenerator}
              value="Submit"
              className="btn btn-dark"
            >
              Make Teams
            </button>
          </div>
        </div>


      </div>
    </div >
  )
}
