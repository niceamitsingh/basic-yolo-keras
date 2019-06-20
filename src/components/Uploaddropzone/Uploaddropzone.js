import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import "./Uploaddropzone.css";


class StyledDropzone extends Component {
    constructor() {
      super();
      this.onDrop = (files) => {
        this.setState({files})
      };
      this.state = {
        files: []
      };
    }
  
    render() {
      const files = this.state.files.map(file => (
        <div><h5>Files</h5>
        <div key={file.name}>
          <ul>{file.name}</ul>
        </div></div>
      ));
  
      return (
        <Dropzone onDrop={this.onDrop}>
          {({getRootProps, getInputProps}) => (
            <section className="Uploadspace">
              <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
              <aside id="Uploadfile">
                <div>{files}</div>
              </aside>
            </section>
          )}
        </Dropzone>
      );
    }
  }
  
 
export default StyledDropzone;