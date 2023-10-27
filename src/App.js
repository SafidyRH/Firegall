import React, { useState } from 'react';
import Title from './comps/title/Title';
import Upload from './comps/upload/Upload';
import ImageGrid from './comps/imageGrid/ImageGrid';
import Modal from './comps/modal/Modal';

const App = () => {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <Upload/>
      <ImageGrid setSelectedImg = {setSelectedImg}/>
      
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg = { setSelectedImg} />}
      
    </div>
  );
}

export default App;
