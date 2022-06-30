// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import TOC from "./components/TOC";
import Contents from "./components/Contents";
import Subject from "./components/Subject";
import Control from "./components/Control";

class App extends Component {
  //생성자 추가
  constructor(props) {
    super(props);
    //this는 App
    this.state = {
      mode: "read",
      selected_content_id: 2,
      subject: { title: "WEB", sub: "World Wide Web" },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for imformation" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  render() {
    console.log("App render");
    let _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      // 리엑트에서 리턴구문안에 쓸때
      // 하나의 태그로만 감싸야한다
      <div>
        {/* <header>
          <h1><a href='/' onClick={function(e){
            e.preventDefault();
            this.setState({mode : 'welcome'});
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            // 상위 컨퍼넌트에서 하위 컨퍼넌트의 정보를 전달할때
            this.setState({ mode: "welcome" });
          }.bind(this)}
        />

        {/* data는 임의로 정의해준 변수 */}
        <TOC
          data={this.state.contents}
          onChange={function (id) {
            // 하위 컨퍼넌트에서 상위 컨퍼넌트의 정보를 전달할때
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
        />

        <Control
          onChangeMode={function (_mode) {
            this.setState({
              mode: _mode,
            });
          }.bind(this)}
        />
        <Contents title={_title} desc={_desc} />
      </div>
    );
  }
}

//외부에서 쓸 수 있게 권한 허용
export default App;

//렌더링이 왜 이렇게 되는 이유 잘 알고 있기
