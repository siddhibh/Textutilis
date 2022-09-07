import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

let greenbtn = false;
let redbtn = false;
let yellowbtn = false;

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [green, setGreen] = useState("light-green");
  const [red, setRed] = useState("light-red");
  const [yellow, setYellow] = useState("light-yellow");

  const btngreen = () => {
    if (greenbtn === true) {
      setGreen("success");
    } else {
      setGreen("primary");
    }
  };

  const btnred = () => {
    if (redbtn === true) {
      setRed("danger");
    } else {
      setRed("primary");
    }
  };

  const btnyellow = () => {
    if (yellowbtn === true) {
      setYellow("warning");
    } else {
      setYellow("primary");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const greenmode = () => {
    greenbtn = true;
    if (greenbtn === true) {
      document.body.style.backgroundColor = "green";
      showAlert("Green mode has been enabled", "success");
    }
  };
  const redmode = () => {
    redbtn = true;
    if (redbtn === true) {
      document.body.style.backgroundColor = "red";
      showAlert("Red mode has been enabled", "success");
    }
  };

  const yellowmode = () => {
    yellowbtn = true;
    if (yellowbtn === true) {
      document.body.style.backgroundColor = "yellow";
      showAlert("Yellow mode has been enabled", "success");
    }
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
    <Router>
      <Navbar
        mode={mode}
        togglemode={togglemode}
        greenmode={greenmode}
        redmode={redmode}
        yellowmode={yellowmode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
          <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <Textform
          showAlert={showAlert}
          heading="Try TextUtilis - Word Counter | Character Counter"
          mode={mode}
          green={green}
          red={red}
          yellow={yellow}
          btngreen={btngreen}
          btnred={btnred}
          btnyellow={btnyellow}
        />
        </Route>
       </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
