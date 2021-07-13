import React from 'react'

export default function Home() {
  return (
    <div className="Home">
      <div className="allPage">
        <div className="container">
          <h2 className="title">Random Team Generator</h2>
          <textarea
            name=""
            id="myInput"
            cols="30"
            rows="10"
            placeholder="Put the name, split it with one comma and one white space (, )"
          ></textarea
          ><br />
          <input type="number" placeholder="Group Amount" id="numberTeam" />
          <br />
          <button
            type="button"
            id="buttons"
            onclick="getInputValue()"
            value="Submit"
          >
            Shuffle
          </button>
        </div>
        <div className="hidden teams">
          <h2 className="hidden">Group List</h2>
          <div id="output" className="output"></div>
          <button id="reset" className="hidden">Restart</button>
        </div>
      </div>
    </div>
  )
}
