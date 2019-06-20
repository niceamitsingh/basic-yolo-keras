import React from 'react';
import './Textinput.css';

const Textinput = (props) => {
  return (
    <div className="form-group">
    
      <input type="text" className="form-control" {...props} />
    
    </div>
  );
}

export default Textinput;