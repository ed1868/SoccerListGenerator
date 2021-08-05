import React, { useState } from 'react'

export default function RakedTeams() {
  const [state, setState] = useState({
    players: "",
    teamPlayers: [{
      playerName: "eddie",
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


  return (
    <div className="Home">
      <div className="allPage">
        <div className="container">
          <h2 className="title">Random Team Generator</h2>

          {state.lineUp.map(team => {
            console.log('FRONT END TEAM: ', team.toStr)

            return (
              <div className="row">
                <div className="col-md-12">
                  Team : {team.join()}
                </div>
              </div>
            )
          })}
          <textarea
            name="players"
            placeholder="Put the name, split it with one comma(Eddie,Juan )"
            value={state.players}
            id="myInput"
            cols="30"
            rows="10"
            onChange={handleInputChange}

          ></textarea
          ><br />
          <input type="number" name="groupSize" placeholder="# per Team" value={state.groupSize} onChange={handleInputChange} id="numberTeam" />
          <br />
          <button
            type="button"
            id="buttons"
            onClick={handleRandomTeamGenerator}
            value="Submit"
          >
            Make Teams
          </button>
        </div>
        <div className="hidden teams">
          <h2 className="hidden">Team List</h2>
          <div id="output" className="output"></div>
          <button id="reset" className="hidden">Restart</button>
        </div>
      </div>
    </div>
  )
}
