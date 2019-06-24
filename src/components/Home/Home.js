import React, {Component} from "react";
import "../Home/Home.css";


class Home extends Component{
    render() {
            return (
            <div id ="flex-container">
                <div id="Home_container">
                 <div className="Heading">
                    <h1>AI Marketplace for India</h1>
                    <p>Bringing all AI producers & consumers together</p>
                    
                </div>
                <div className="Home_content_block">
                    <div className="Content_row_1">
                        <div className="Content_block_1"></div>
                        <div className="Content_block_1"></div>
                        <div className="Content_block_1"></div>
                    </div>
                    <div className="Content_row_1">
                        <div className="Content_block_3"></div>
                        <div className="Content_block_2"></div>
                        <div className="Content_block_3"></div>   
                    </div>
                    <div className="Content_row_1">
                        <div className="Content_block_2"></div>
                        <div className="adjustment"></div>
                        <div className="Content_block_2"></div>   
                    </div>
                </div>

            <div className="Section_header">
                <div className="Section_image_trending"></div>
                <h1>Trending Services</h1>
            </div>
                <div className="Home_content_block">
                    <div className="Content_row_1">
                        <div className="Content_block_3"></div>
                        <div className="Content_block_2"></div>
                        <div className="Content_block_3"></div>   
                    </div>
                    <div className="Content_row_1">
                        <div className="Content_block_2"></div>
                        <div className="adjustment"></div>
                        <div className="Content_block_2"></div>   
                    </div>
                </div>  
                </div>
            </div>
            );
          }
        


}


export default Home;