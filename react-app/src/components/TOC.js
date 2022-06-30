import React, { Component } from "react";

class TOC extends Component {
  render() {
    console.log("TOC render");
    let lists = [];
    let data = this.props.data;

    let i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          {/* <a href={"/content/" + data[i].id}>{data[i].title}</a> */}
          <a
            href={"/content/" + data[i].id}
            //data[i].id를 가져와야 하지만 온체인지 객체에는 지정된 변수를 넣을 수 없어 따로 만듦
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              // e.target(); // 현재 타켓된 객체정보 가져옴
              this.props.onChange(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }

    return (
      <nav>
        <ul /*onClick={function(e){e.preventDefault(); this.props.onChange();}.bind(this)}*/
        >
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;
