import React from 'react';
import images from '../constants/image-constants';

const TemplateSelection = (props) => {
    return (
      <div className="build__wrapper--levelone">
        <div className="build__content">
            <h2 className="build__steptitle">Choose a template</h2>
            <div className="build__interactive">
              <img src={images.imageOne} alt="Template One" className="build__templateimages" onClick={() => props.displayForm(images.imageOne)} />
              <img src={images.imageTwo} alt="Template Two" className="build__templateimages"/>
              <img src={images.imageThree} alt="Template Three" className="build__templateimages"/>
              <img src={images.imageFour} alt="Template Four" className="build__templateimages"/>
            </div>
        </div>
      </div>
    )
  }
  
export default TemplateSelection;