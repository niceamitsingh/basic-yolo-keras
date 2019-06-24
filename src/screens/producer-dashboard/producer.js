import React, {Component} from 'react';
import MenuContainer from "../../components/Slideoutmenu/MenuContainer";
import Header1 from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import "../producer-dashboard/producer.css";
import {LineChart, LineChart2, LineChart3} from "../../components/Charts/Charts";




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
                        <div className="Dash_Content_graph_1">
                            <div className="Title_on_graph">TOTAL REVENUE PER DAY</div>
                            <div className="Value_on_graph">$415</div>
                            <LineChart></LineChart>
                        </div>
                        <div className="Dash_Content_graph_1">
                        <div className="Title_on_graph">TOTAL CONSUMERS PER DAY</div>
                            <div className="Value_on_graph">872</div>
                            <LineChart2></LineChart2>
                        </div>
                        <div className="Dash_Content_graph_1">
                        <div className="Title_on_graph">TOTAL CALLS PER DAY</div>
                            <div className="Value_on_graph">+12,213</div>
                            <LineChart3></LineChart3>
                        </div>
                    </div>
                    <div className="Dash_Content">
                        <div className="Dash_content_section">
                            <h3>Active models</h3>
                        </div>
                        <div className="Dash_table">
                        <table>
  <tr>
    <th>NAME</th>
    <th>VERSION</th>
    <th>CONSUMERS</th>
    <th>CALLS</th>
    <th>REVENUE</th>
    <th>ACCURACY</th>
    <th>LATENCY</th>
    <th>ACTIONS</th>
  </tr>
  <tr>
    <td>My text to speech <div className="weaw">Speech</div></td>
    <td className="v_no">
        <div className="v_no2">V0.3</div>
    </td>
    <td>127<div className="Change_value">10% ▴</div><div className="Title_table">Unique API Ids</div> <div className="relative_count"><div className="Arrow">▼</div></div></td>
    <td>+9K<div className="Change_value">10% ▴</div><div className="Title_table">Unique API Ids</div> <div className="relative_count"><div className="Arrow">▼</div></div></td>
    <td>$192<div className="Change_value">10% ▴</div><div className="Title_table">Unique API Ids</div> <div className="relative_count"><div className="Arrow">▼</div></div></td>
    <td>98%</td>
    <td>89ms</td>
    <td>
        <div className="Action_1"></div>
        <div className="Action_2"></div>
        <div className="Action_3"></div>
    </td>
  </tr>
  <tr>
  <td>My text to speech <div className="weaw">Speech</div></td>
    <td className="v_no">
        <div className="v_no2">V0.3</div>
    </td>
    <td>127<div className="Change_value">10% ▴</div><div className="Title_table">Unique API Ids</div> <div className="relative_count"><div className="Arrow">▼</div></div></td>
    <td>+9K<div className="Change_value">10% ▴</div><div className="Title_table">Unique API Ids</div> <div className="relative_count"><div className="Arrow">▼</div></div></td>
    <td>$192<div className="Change_value">10% ▴</div><div className="Title_table">Unique API Ids</div> <div className="relative_count"><div className="Arrow">▼</div></div></td>
    <td>98%</td>
    <td>89ms</td>
    <td>
        <div className="Action_1"></div>
        <div className="Action_2"></div>
        <div className="Action_3"></div>
    </td>
  </tr>
  <tr>
  <td>My text to speech <div className="weaw">Speech</div></td>
    <td className="v_no">
        <div className="v_no2">V0.3</div>
    </td>
    <td>127<div className="Change_value">10% ▴</div><div className="Title_table">Unique API Ids</div> <div className="relative_count"><div className="Arrow">▼</div></div></td>
    <td>+9K<div className="Change_value">10% ▴</div><div className="Title_table">Unique API Ids</div> <div className="relative_count"><div className="Arrow">▼</div></div></td>
    <td>$192<div className="Change_value">10% ▴</div><div className="Title_table">Unique API Ids</div> <div className="relative_count"><div className="Arrow">▼</div></div></td>
    <td>98%</td>
    <td>89ms</td>
    <td>
        <div className="Action_1"></div>
        <div className="Action_2"></div>
        <div className="Action_3"></div>
    </td>
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