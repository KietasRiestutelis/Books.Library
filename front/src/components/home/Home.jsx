import React from "react";
import "./Home.css";
import Login from "./Login";
import MainPage from "./MainPage";
import Registration from "./Registration";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <Login />
            <hr></hr>
            <Registration />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
