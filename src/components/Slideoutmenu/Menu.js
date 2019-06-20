import React, { Component } from "react";
import "./Menu.css";
import Upform from "../Uploadform/Upform"
 
class Menu extends Component {
  render() {
    var visibility = "none";
 
    if (this.props.menuVisibility) {
      visibility = "block";
    }
 
    return (
      
<div>
    <div id="flyoutMenu" className={visibility}>
    <Upform></Upform>    
    </div>
    <div id="blankFlyout" onMouseDown={this.props.handleMouseDown} className={visibility} ></div>
</div>
    );
  }
}
 
export default Menu;