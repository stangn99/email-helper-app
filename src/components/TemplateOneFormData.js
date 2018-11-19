import React from 'react';
import { Editor } from 'react-draft-wysiwyg';

const TemplateOneFormData = (props) => {
    return (
      <div className="build__wrapper--leveltwo">
        <div className="build__content build__content--shadow">
            <h2 className="build__steptitle">Populate it!</h2>
            <div className="build__interactive build__interactive--form">
              <div className="build__interactive__form">
                <form onSubmit={props.addEmail}>                    
                  <label form="main-story-image-url" className="label">Main story image url</label>
                  <input type="text" id="main-story-image-url" placeholder="http://wpc.e884.edgecastcdn.net/00E...." autoFocus />
                  
                  <label form="main-story-url" className="label">Main story url</label>
                  <input type="text" id="main-story-url" placeholder="https://scotiabank.workplace.com/xyz..." />                    
                
                  <label form="main-story-url" className="label">Main story teaser</label>
                  <Editor
                    editorState={props.editorState}
                    onEditorStateChange={props.onEditorChange}
                  />
                  <button>Submit</button>
                  
                </form>
              </div>
              <div className="build__interactive__imagereference">
                <p>Template Reference</p>
                   <img src={props.thumbReference} alt=""/>
              </div>
            </div>
        </div>
      </div>
    )
  }
  

  export default TemplateOneFormData;