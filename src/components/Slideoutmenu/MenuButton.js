import React, { Component } from "react";
import './Menubutton.css';
import './MenuContainer.css';
 
class MenuButton extends Component {
  render() {
    return (
      <button id="addbtn"
              onMouseDown={this.props.handleMouseDown}></button>
    );
  }
}
 
export default MenuButton;