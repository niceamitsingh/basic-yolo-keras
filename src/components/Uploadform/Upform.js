import React, { Component } from "react";
import "./Upform.css";
import Select from 'react-select';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import StyledDropzone from "../Uploaddropzone/Uploaddropzone";


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

  export const filterOptions = [
    { value: 'Telugu', label: 'Telugu', color: '#00B8D9', isFixed: true },
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

  export const groupedOptions2 = [
    {
      label: 'Languages',
      options: filterOptions,
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
    constructor(props) {
        super(props);

        
        this.state = {
            value:'', value2:'', value3:'', placeholder:'Name your model', placeholder2:'Paste your Github link', placeholder3:'Paste your REST API endpoint' , color1:'#fff', color2:'', color3:''
        }; 

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);

      }
      handleChange(event) {
        this.setState({value: event.target.value}); 
      }
      handleChange2(event) {
        this.setState({value2: event.target.value2});
      }
      handleChange3(event) {
        this.setState({value3: event.target.value3});
      }
      
    

 clickevent1(){
    if(this.state.value==""||this.state.value2==""){
        alert("please fill all the values")
    }
    else{
        alert("this works!")
    }
    
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
        
        <input type="text" 
        placeholder={this.state.placeholder}
        value={this.state.value} onChange={this.handleChange} />
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
     <input type="text" 
        placeholder={this.state.placeholder2}
        value={this.state.value2} onChange={this.handleChange2}
        /> 


    </TabPanel>
    <TabPanel>
        <br></br>
    <input type="text" 
        placeholder={this.state.placeholder3}
        value={this.state.value3} onChange={this.handleChange3}
        /> 
    </TabPanel>

    <TabPanel>
    <div id="Uploadspace">
    <StyledDropzone></StyledDropzone>
    </div>
    </TabPanel>

  </Tabs>


<div id="spacer"></div>


        <Select
        isMulti
        placeholder={'Choose filters (if any)'}
        options={groupedOptions2}
        formatGroupLabel={formatGroupLabel}
        />

        </div>
        <div className="Formfooter">
<button type="button" className="Btn" onClick={this.clickevent1.bind(this)} 

>Upload & Publish</button>


<button type="button" className="Transbtn">Just Upload</button>
        </div>
    </div>
</div>
    );
  }
}
 
export default Upform;