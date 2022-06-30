import React, { Component } from "react";

class Subject extends Component {
  render() {
    console.log("Control render");
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("create");
            }.bind(this)}
          >
            create
          </a>
        </li>
        <li>
          <a href="/update">update</a>
        </li>
        <li>
          <input type="button" value="delete"></input>
        </li>
      </ul>
    );
  }
}

export default Subject;
