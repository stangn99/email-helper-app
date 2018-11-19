import React, { Component } from 'react';
import WebFont from 'webfontloader';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import TemplateOneFormData from './components/TemplateOneFormData';
import TemplateSelection from './components/TemplateSelection';
import SidebarNav from './components/SidebarNav';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'normalize.css/normalize.css';
import './App.scss';
import axios from 'axios';

WebFont.load({google: {families: ['Quicksand:300,500']}});


class App extends Component {
  state = {
    editorState: EditorState.createEmpty(), 
    showForm: false,
    thumbReference: undefined,
    healthcheck: undefined, 
    mainStoryTeaser: []
  }

  // Required onChange method to setState for editorState
  onEditorChange = (editorState) => {
    const { blocks } = convertToRaw(editorState.getCurrentContent())
    this.setState(() => {
      return {
        editorState,
        mainStoryTeaser: {
          '2018' : {
            blocks
          }
        }
      } 
    })
   }

  // The form that displays after a template is chosen
  handleDisplayForm = (templateImagePath) => {
    this.setState({
      showForm: !this.state.showForm,
      thumbReference: templateImagePath
    });
  }

  // handleSubmitForm = (e) => {
  //   e.preventDefault();
  //   console.log("submit button clicked")
  // }

  async componentDidMount () {
    axios.get("/email").then(res => {
      if (res.data) {
        const returnedData = res.data;
        // console.log(returnedData.mainStoryTeaser)
        // document.write(returnedData.mainStoryTeaser)
      }
    });
  }

  addEmail = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/email', {
        email: this.state.mainStoryTeaser
      })
      // this.refresh();
    } catch (err) {
      console.log(err)
    }
  }

  render() { 
    return (
      <div className="wrapper">
        <SidebarNav />
        <div className="build">
          {this.state.showForm ? 
            <TemplateOneFormData 
                onEditorChange={this.onEditorChange}
                editorState={this.state.editorState}
                thumbReference={this.state.thumbReference}
                addEmail={this.addEmail}
              />
            : <TemplateSelection displayForm={this.handleDisplayForm} /> }
        </div>
      </div>
    );
  }
}

export default App;