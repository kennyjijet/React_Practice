import React, { Component } from "react";
import Scroller from "react-scroll-collapse";
import ReactDOM from "react-dom";
import { Button, Collapse } from "react-bootstrap";

import "./myCss.css";

import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import { Provider } from "react-redux";

var data = [
  { name: "Jhon", age: 28, city: "HO" },
  { name: "Onhj", age: 82, city: "HN" },
  { name: "Nohj", age: 41, city: "IT" }
];

class MyClass extends Component {
  constructor(props) {
    super(props);
    this.initialTotal = 10;
    this.currentTotal = 10;
    this.state = {
      data: "Jordan Belfort",
      showdata: this.displayData,
      postVal: ""
    };
    super();
    this.displayData = [];
    this.appendData = this.appendData.bind(this);
    this.clearDiv = this.clearDiv.bind(this);
  }

  componentDidMount() {
    this.initialFunction();
  }

  componentWillMount() {
    //console.log("First this called");
    this.setState({
      data: "Test"
    });
  }

  /*
  getData() {
    setTimeout(() => {
      console.log("Our data is fetched");
      this.state({
        data: "Hello WallStreet"
      });
    }, 1000);
  }
  */

  initialFunction() {
    console.log("run it!!!");
    //alert("run it!!!");
  }

  BasicExample() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/react">React</Link>
            </li>
            <li>
              <Link to="/about"> FAQ </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr />
        </div>
      </Router>
    );
  }

  displayData = [];
  state = {
    showdata: this.displayData,
    postVal: ""
  };

  appendData() {
    this.displayData.push(
      <div id="display-data">
        <pre>Test</pre>
      </div>
    );
    this.setState({
      showdata: this.displayData,
      postVal: ""
    });
  }

  clearDiv() {
    alert(this.displayData.length);
    document.getElementById("display-data-Container").innerHTML = "";
  }
  GenerateDiv() {
    //alert("test");
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById("root"));
  }

  render() {
    this.currentTotal += 1;
    let names = ["Jake", "Jon", "Thruster"];
    var peopleToReturn = [];
    const peopleList = () => {
      for (let i = 0; i < names.length; i++) {
        peopleToReturn.push(<li>{names[i]}</li>);
      }
      return peopleToReturn;
    };
    //return <ol>{peopleList()}</ol>;
    //<div>{this.state.data}</div>
    var buttonStyle = {
      margin: "10px 10px 10px 0"
    };
    const { isOpened, onHeightReady, expandCollapse } = this.props;
    return (
      <div>
        {this.state.data}
        <ol className="menu">{peopleList()}</ol>
        <div className="classCss1">
          <div className="divScroll" />
          <div className="divScroll" />
          <div className="divScroll" />
          <div className="divScroll" />
          <div className="divScroll" />
          <div className="divScroll" />
          <div className="divScroll" />
          <div className="divScroll" />
          <div className="divScroll" />
        </div>
        <button
          className="btn btn-default"
          style={buttonStyle}
          onClick={this.appendData}
        >
          Append
        </button>

        <input
          type="submit"
          className="button"
          onClick={this.clearDiv}
          value="Clear"
        />

        <div id="display-data-Container">{this.displayData}</div>
      </div>
    );
  }
}
export default MyClass;
