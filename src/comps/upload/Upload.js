import React, { useState } from 'react'
import ProgressBar from '../progressbar/ProgressBar';
import './upload.css'

const Upload = () => {

  const [file, setFile] = useState(null); 
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg', 'image/x-nikon-nef'];

  const onChangeHandler = (e) =>{
    let selected = e.target.files[0];
    
    if(selected && types.includes(selected.type)){
      setFile(selected); 
      setError('');
    } else {
      setFile(null);
      setError('Please Select an image file');
    }
  }

  return (
    <form >
      <label>
        <input type="file" onChange = {onChangeHandler}/>
        <span>+</span>
        
      </label>

      <div className='output'>
          {error && <div className='error '> {error}</div>}
          {file && <ProgressBar file = {file} setFile = {setFile}/>}
      </div>
    </form>  
    
  )
}

export default Upload