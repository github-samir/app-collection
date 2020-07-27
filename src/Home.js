import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="link-container">
          <li>
            <Link className="link" to="/calc">
              Calculator
            </Link>
          </li>
          <li>
            <Link className="link" to="/todo">
              ToDo
            </Link>
          </li>
          <li>
            <Link className="link" to="moviesnu">
              Netflix-clone
            </Link>
          </li>
        </div>
      </div>
      <p className="footer">Work with Sam &copy;2020</p>
    </>
  );
}

export default Home;
