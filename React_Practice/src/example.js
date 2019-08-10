import React from "react";
import Collapse from "react-collapse";
import Scroller from "react-scroll-collapse";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import { Provider } from "react-redux";
import { Switch } from "react-router-dom";
//import BackgroundTask from "react-native-background-task";

//function onClick() {
//return alert("test");
//  return <Link to="/about">about</Link>;
//}

function onClick() {
  alert("What is all about?");
  //state.hideToolsTip = false;
}

function initialFunction() {
  alert("run it!!!");
  document.getElementById("MyHeader").style.display = "none";
}

var state = {
  hideToolsTip: false,
  value: ""
};

var divStyle = {
  color: "#333"
};

function BasicExample() {
  //const style = state.hideToolsTip ? { display: "none" } : {};

  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/gatherInformation" component={gatherInformation} />
    </BrowserRouter>

    /*
    <Switch>
        <Route path="/about" component={About} exact />
      </Switch>
      
    <Router>
      <div>
        <button onClick={onClick}>About</button>
      </div>
      <Route path="/about" component={About} />
    </Router>
    */
    /*
    <Router>
      <div>
        <p>Please choose a repository from the list below.</p>
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
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>

      <Router>
        <Route path="/about" component={About} />
      </Router>
    </Router>
    */
  );
}

function Home() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Nav} />
        <Route path="/about" component={About} />
        <Route path="/gatherInformation" component={gatherInformation} />
      </div>
    </Router>
  );
}

function About({ match }) {
  return (
    <Router>
      <div>
        <h2>About</h2>
      </div>
    </Router>
  );
}

function Nav({ match }) {
  const divStyle = {
    color: "red"
  };
  const bgDivStyle = {
    padding: 10,
    width: "100%",
    backgroundColor: "powderblue"
  };
  return (
    <div>
      <div style={bgDivStyle}>
        <p style={divStyle}>Please choose a repository from the list below.</p>
        <li>
          <Link to="/about" onClick={onClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/gatherInformation">gatherInformation</Link>
        </li>
      </div>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

var state = {
  Name: "",
  Age: 0,
  CustomerId: "",
  Description: ""
};

function handleChangeName(event) {
  state.Name = event.target.value;
}
function handleChangeAge(event) {
  state.Age = event.target.value;
}
function handleChangeCustomerId(event) {
  state.CustomerId = event.target.value;
}
function handleChangeDes(event) {
  state.Description = event.target.value;
}

function handleSubmit(event) {
  if (state.Name === null || state.Name === "") {
    alert("Please insert name!!");
  } else if (state.Age === null || state.Age === "") {
    alert("Please insert Age!!");
  } else if (state.CustomerId === null || state.CustomerId === "") {
    alert("Please insert CustomerId!!");
  } else if (state.Description === null || state.Description === "") {
    alert("Please insert Description!!");
  }

  //event.preventDefault();
  /*
  fetch("https://vpul1.sse.codesandbox.io/url_post", {
    method: "post",
    body: JSON.stringify(state)
  })
    .then(function(response) {
      //return response.json();
      alert(response.json());
      return response.json();
    })
    .then(function(data) {
      //ChromeSamples.log('Created Gist:', data.html_url);
      alert(data.html_url);
    });
    */
}

function gatherInformation({ match }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div
          style={{
            backgroundColor: "#d3d3d3",
            margin: 0,
            padding: "5px",
            textAlign: "center"
          }}
        >
          <label
            style={{ display: "inline-block", margin: "10px", width: "100px" }}
          >
            Name:{" "}
          </label>
          <input
            style={{ display: "inline-block", margin: "10px", width: "200px" }}
            type="text"
            name="name"
            onChange={handleChangeName}
          />
        </div>
        <div
          style={{
            backgroundColor: "#d3d3d3",
            margin: 0,
            padding: "5px",
            textAlign: "center"
          }}
        >
          <label
            style={{ display: "inline-block", margin: "10px", width: "100px" }}
          >
            Age:{" "}
          </label>
          <input
            style={{ display: "inline-block", margin: "10px", width: "200px" }}
            type="text"
            name="name"
            onChange={handleChangeAge}
          />
        </div>
        <div
          style={{
            backgroundColor: "#d3d3d3",
            margin: 0,
            padding: "5px",
            textAlign: "center"
          }}
        >
          <label
            style={{ display: "inline-block", margin: "10px", width: "100px" }}
          >
            Customer ID:{" "}
          </label>
          <input
            style={{ display: "inline-block", margin: "10px", width: "200px" }}
            type="text"
            name="name"
            onChange={handleChangeCustomerId}
          />
        </div>
        <div
          style={{
            backgroundColor: "#d3d3d3",
            margin: 0,
            padding: "5px",
            textAlign: "center"
          }}
        >
          <label
            style={{ display: "inline-block", margin: "10px", width: "100px" }}
          >
            Description:{" "}
          </label>
          <input
            style={{ display: "inline-block", margin: "10px", width: "200px" }}
            type="text"
            name="name"
            onChange={handleChangeDes}
          />
        </div>
        <input
          style={{ float: "right", margin: "10px" }}
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default BasicExample;
