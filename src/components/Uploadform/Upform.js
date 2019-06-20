import React, { Component } from "react";
import "./Upform.css";
import Textinput from "../Textinput/Textinput";
import Select from 'react-select';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";


export const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];

  export const groupedOptions = [
    {
      label: 'Colours',
      options: colourOptions,
    }
  ];


  const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };
  
  const formatGroupLabel = data => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );
  



class Upform extends Component {
    constructor() {
        super();
        
        this.state = {
            formControls: {          
                name: {
                  value: '',
                  placeholder: 'Name your model'
                }
            }
        }
        
      }
      
      changeHandler = event => {
          const name = event.target.name;
          const value = event.target.value;
        
          this.setState({
              formControls: {
                [name]: value
              }
          }); 
      }
      


  render() {
    
    return (
      
<div>
    <div id="Upform_block">
    <br></br>
    <br></br>
        <div id="aix_image"></div>
        
        <h2>New Model</h2>
        <h5>Add your model</h5>
        <div id="Form_block">
        
        <Textinput name="name" 
        placeholder={this.state.formControls.name.placeholder}
        value={this.state.formControls.name.value}
        onChange={this.changeHandler}
        />
        <br></br>

        <Select
        placeholder={'Choose domain'}
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
        />

        <Select
        placeholder={'Choose service'}
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
        />
<br></br>
<br></br>
<Tabs>
    <TabList>
      <Tab>Github</Tab>
      <Tab>REST API</Tab>
      <Tab>Upload ZIP</Tab>
    </TabList>
 
    <TabPanel>
        <br></br>
    <Textinput name="name" 
        placeholder={this.state.formControls.name.placeholder}
        value={this.state.formControls.name.value}
        onChange={this.changeHandler}
        />


    </TabPanel>
    <TabPanel>
        <br></br>
    <Textinput name="name" 
        placeholder={this.state.formControls.name.placeholder}
        value={this.state.formControls.name.value}
        onChange={this.changeHandler}
        />
    </TabPanel>
    <TabPanel>

    </TabPanel>
  </Tabs>
<div id="spacer"></div>
<Select
        isMulti
        placeholder={'Choose filters (if any)'}
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
        />
<div id="spacer"></div>

        </div>
    </div>
</div>
    );
  }
}
 
export default Upform;