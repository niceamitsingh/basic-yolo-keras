import React, { Component } from "react";
import "./Leftnav.css";

class Leftnav extends Component {
      render() {
        return (
          <div id="Leftnav">
            <h2><a href="#">Home</a></h2>
            <h2><a href="#">About</a></h2>
            <h2><a href="#">Contact</a></h2>
            <h2><a href="#">Search</a></h2>
          </div>
        );
      }
    }
     
    export default Leftnav;