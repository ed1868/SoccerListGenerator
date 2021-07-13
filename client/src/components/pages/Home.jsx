import React, { useState } from 'react'

export default function Home() {
  const [state, setState] = useState({
    players: "Put the name, split it with one comma and one white space (, )",
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

    setState({ ...state, lineUp: team });

  }
  function handleInputChange(event) {
    console.log('EVENT : ', event.target.value)

    setState({
      ...state,
      [event.target.name]: event.target.value,
    })


  }

  // function handleClick(e) {
  //   e.preventDefault()
  //   console.log(state.name, state.description)
  //   let data = {
  //     name: state.name,
  //     capitals: state.capitals,
  //     area: state.area,
  //     description: state.description,
  //   }
  //   api
  //     .addCountry(data)
  //     .then(result => {
  //       console.log('SUCCESS!')
  //       setState({
  //         name: '',
  //         capitals: '',
  //         area: '',
  //         description: '',
  //       })
  //       setMessage(`Your country '${state.name}' has been created`)
  //       setTimeout(() => {
  //         setMessage(null)
  //       }, 2000)
  //     })
  //     .catch(err => setState({ message: err.toString() }))
  // }
  return (
    <div className="Home">
      <div className="allPage">
        <div className="container">
          <h2 className="title">Random Team Generator</h2>

          {state.lineUp.map(team => {

            return (
              <div className="row">
                <div className="col-md-12">
                  Team : {team}
                </div>
              </div>
            )
          })}
          <textarea
            name="players"
            value={state.players}
            id="myInput"
            cols="30"
            rows="10"
            onChange={handleInputChange}
            placeholder="Put the name, split it with one comma and one white space (, )"
          ></textarea
          ><br />
          <input type="number" name="groupSize" placeholder="Group Amount" value={state.groupSize} onChange={handleInputChange} id="numberTeam" />
          <br />
          <button
            type="button"
            id="buttons"
            onClick={handleRandomTeamGenerator}
            value="Submit"
          >
            Shuffle
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
