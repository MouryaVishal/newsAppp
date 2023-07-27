import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
// import NewsItem from './components/NewsItem';
import LoadingBar from "react-top-loading-bar";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSizeOnPage = 5;
  // apiKey=process.env.REACT_APP_NOT_SECRET_CODE;
  const apiKey = "5f017980781842a794919a04a11bf820";
  let [mode, setMode] = useState("light");
  let [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#284b63";
      showAlert(":Dark mode is enbale", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(":Light mode is enbale", "success");
    }
  };
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode}></NavBar>
        <Alert alert={alert} />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pagesize={pageSizeOnPage}
                country="in"
                category="general"
                apikey1="5f017980781842a794919a04a11bf820"
                mode={mode}
                showAlert={showAlert}
              >
                {" "}
              </News>
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apikey1="5f017980781842a794919a04a11bf820"
                key="business"
                pagesize={pageSizeOnPage}
                country="in"
                category="business"
                mode={mode}
                showAlert={showAlert}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apikey1="5f017980781842a794919a04a11bf820"
                key="entertainment"
                pagesize={pageSizeOnPage}
                country="in"
                category="entertainment"
                mode={mode}
                showAlert={showAlert}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apikey1="5f017980781842a794919a04a11bf820"
                key="general"
                pagesize={pageSizeOnPage}
                country="in"
                category="general"
                mode={mode}
                showAlert={showAlert}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apikey1="5f017980781842a794919a04a11bf820"
                key="health"
                pagesize={pageSizeOnPage}
                country="in"
                category="health"
                mode={mode}
                showAlert={showAlert}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apikey1="5f017980781842a794919a04a11bf820"
                key="science"
                pagesize={pageSizeOnPage}
                country="in"
                category="science"
                mode={mode}
                showAlert={showAlert}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apikey1="5f017980781842a794919a04a11bf820"
                key="sports"
                pagesize={pageSizeOnPage}
                country="in"
                category="sports"
                mode={mode}
                showAlert={showAlert}
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apikey1="5f017980781842a794919a04a11bf820"
                key="technology"
                pagesize={pageSizeOnPage}
                country="in"
                category="technology"
                mode={mode}
                showAlert={showAlert}
              ></News>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
