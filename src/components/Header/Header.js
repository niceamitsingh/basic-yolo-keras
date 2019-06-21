import React,{Component} from 'react';
import Autosug from '../Header/Search/Search';
import './Header.css';


class Header1 extends Component {
      render() {
        return (
         <div id="Header_block">
            <div className="Search_block">
                <div className="Search_icon"></div>
                <Autosug></Autosug></div>
        </div>
        );
      }
    }
     
    export default Header1;