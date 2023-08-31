import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './editor.css';
import draftToHtml from 'draftjs-to-html';

class ControlledEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });

    if(this.props.onChange){
      this.props.onChange({
        target: {
          name: this.props.name||"",
          value: draftToHtml(convertToRaw(editorState.getCurrentContent()))
        }
      })
    }
  };

  render() {
    const { editorState } = this.state;
    return (
      <>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
      />
      <textarea
        hidden
        name={this.props.name}

        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
      </>
    )
  }
}
export default ControlledEditor;