import React, {Component} from 'react';
import MenuContainer from "../../components/Slideoutmenu/MenuContainer";
import Header1 from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import "../producer-dashboard/producer.css";


  class Producer_page extends Component{
    render() {
            return (
        <div className="Producer_page">
            <div id="Make_fixed">
                <Header1></Header1>
                <MenuContainer></MenuContainer>
            </div>

            <div className="Dash_Content_container">
                <div className="Dash_header"></div>
                <div className="Dash_container">
                    <div className="Dash_Header_section">
                        <h1>My Dashboard</h1>
                    </div>
                    <div className="Dash_row">
                        <div className="Dash_Content_graph_1"></div>
                        <div className="Dash_Content_graph_1"></div>
                        <div className="Dash_Content_graph_1"></div>
                    </div>
                    <div className="Dash_Content">
                        <div className="Dash_content_section">
                            <h3>Active models</h3>
                        </div>
                        <div className="Dash_table">
                        <table>
  <tr>
    <th>NAME</th>
    <th>CONSUMERS</th>
    <th>CALLS</th>
    <th>ACCURACY</th>
    <th>LATENCY</th>
    <th>ACTIONS</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            );
          }
        


}


export default Producer_page;