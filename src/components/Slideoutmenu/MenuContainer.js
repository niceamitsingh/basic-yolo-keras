import React, { Component } from "react";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import "./MenuContainer.css";
 
class MenuContainer extends Component {

  constructor(props, context) {
      super(props, context);
     
      this.state = {
        visible: false
      };
     
    this.handleMouseDown = this.handleMouseDown.bind(this);  
    this.toggleMenu = this.toggleMenu.bind(this);
    
    }

    handleMouseDown(e) {
      this.toggleMenu();
   
      
      e.stopPropagation();
    }
     
    toggleMenu() {
      this.setState({
          visible: !this.state.visible
      });
    }


  render() {

    return (
      // <div>
      // <MenuButton handleMouseDown={this.handleMouseDown}/>
      // <Menu handleMouseDown={this.handleMouseDown}
      // menuVisibility={this.state.visible}/>
      // </div>

      <div>
        <div id="MenuBackground">
          <div className="logo"></div>
          <div id="Menucontrol">
            <div className="explore"></div>
            <div className="add"></div>
            <div className="dashboard"></div>
            <div className="settings"></div>
            <div className="profile"></div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default MenuContainer;



