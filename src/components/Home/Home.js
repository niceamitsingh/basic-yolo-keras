import React, { Component } from "react";
import data from "../../assets/data/homescreen";
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentResponse: data,
      domainIconPath: ""
    };
  }

  async componentDidMount() {
    console.log(
      "JSON:" + JSON.stringify(this.state.contentResponse.BasicInfo.pageTitle)
    );
  }

  render() {
    return (
      <div id="flex-container">
            
        <div id="Home_container">
          <div className="Heading">
            <h1>{this.state.contentResponse.BasicInfo.pageTitle}</h1>
            <p>{this.state.contentResponse.BasicInfo.pageSubTitle}</p>
          </div>
          <div className="Home_content_block">
            <div className="Content_row_1">
              <div className="Content_block_1">
                <div className="DomainPanelStyle">
                  <img
                    src={require("../../assets/images/all_domain_icon.png")}
                    className="DomainIcon"
                    alt=""
                  />
                  <div className="DomainTitleContainer">
                    <div className="DomainPanelTitleStyle">
                      {
                        this.state.contentResponse.dashboardPanels.allDomains
                          .panelTitle
                      }
                    </div>
                    <div className="DomainPanelSubTitleStyle">
                      {
                        this.state.contentResponse.dashboardPanels.allDomains
                          .panelSubTitle
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="Content_block_1">
                <div className="DomainPanelStyle">
                  <img
                    src={require("../../assets/images/all_domain_icon.png")}
                    className="DomainIcon"
                    alt=""
                  />
                  <div className="DomainTitleContainer">
                    <div className="DomainPanelTitleStyle">
                      {
                        this.state.contentResponse.dashboardPanels.allServices
                          .panelTitle
                      }
                    </div>
                    <div className="DomainPanelSubTitleStyle">
                      {
                        this.state.contentResponse.dashboardPanels.allServices
                          .panelSubTitle
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="Content_block_1">
                <div className="DomainPanelStyle">
                  <img
                    src={require("../../assets/images/all_domain_icon.png")}
                    className="DomainIcon"
                    alt=""
                  />
                  <div className="DomainTitleContainer">
                    <div className="DomainPanelTitleStyle">
                      {
                        this.state.contentResponse.dashboardPanels.TextToSpeech
                          .panelTitle
                      }
                    </div>
                    <div className="DomainPanelSubTitleStyle">
                      {
                        this.state.contentResponse.dashboardPanels.TextToSpeech
                          .panelSubTitle
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Content_row_1">
              <div className="Content_block_3" />
              <div className="Content_block_2" />
              <div className="Content_block_3" />
            </div>
            <div className="Content_row_1">
              <div className="Content_block_2" />
              <div className="adjustment" />
              <div className="Content_block_2" />
            </div>
          </div>

          <div className="Section_header">
            <div className="Section_image_trending" />
            <h1>Trending Services</h1>
          </div>
          <div className="Home_content_block">
            <div className="Content_row_1">
              <div className="Content_block_3" />
              <div className="Content_block_2" />
              <div className="Content_block_3" />
            </div>
            <div className="Content_row_1">
              <div className="Content_block_2" />
              <div className="adjustment" />
              <div className="Content_block_2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
