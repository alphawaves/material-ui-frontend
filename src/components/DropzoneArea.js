import React from 'react'
import Dropzone from 'react-dropzone'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'
import { FileAlert, Delete, Check } from 'mdi-material-ui'


const baseStyle = {
  //width: 200,
  height: 150,
  borderWidth: 2,
  borderColor: 'rgba(0, 0, 0, 0.54',
  borderStyle: 'dotted',
  borderRadius: 5,
  display: 'flex',
  flexDirection:'column',
  alignItems: 'center',
  justifyContent: 'center'
};
const activeStyle = {
  borderStyle: 'solid',
  borderColor: '#6c6',
  backgroundColor: '#aef9b2'
};
const rejectStyle = {
  borderStyle: 'solid',
  borderColor: '#c66',
  backgroundColor: '#eee'
};

const errorMessage = {
  backgroundColor:'#fc8585',
  display:'flex',
  flexDirection: 'column',
  alignItems:'center',
  marginBottom: '20px',
  padding: '5px',
  borderRadius: 5,
}

const fileDetails = {
  backgroundColor: '#aef9b2',
  padding: '10px',
  paddingLeft: '20px',
  borderRadius: '5px',
  margin: '0px',
  display:'flex',
  flexDirection:'column',
  alignItems: 'center'
}

const deleteButton = {
  margin: '3px'
}

const resetMargin = {
  margin: '0px'
}

class DropzoneArea extends React.Component {
    state = {
        files: [],
        errorMessage:''
    }
  
    onDrop = (files) => {
      var errorMessage = this.validateFile(files[0])
      if(errorMessage) {
        this.setState({ errorMessage })
      } else{
        this.setState({ errorMessage: ''})
        this.props.onFileDrop(files[0])
        this.setState({ files });
      }      
    }
  
    onCancel = (e) => {
      this.setState({
        files: []
      });
      if(e !== undefined ) { e.preventDefault() }
      this.props.onFileDrop(null)
    }
  
    render() {
      const { classes } = this.props
      const files = this.state.files.map(file => (
        <p key={file.name} style={fileDetails}>
          <Check />
          <p>{file.name} - {file.size} bytes
            <Button onClick={this.onCancel}><Delete /></Button>
          </p>
        </p>      
      ))

      console.log(this.state.errorMessage)
  
      return (
        <section>
          <Dropzone
            accept="application/pdf"
            onDrop={this.onDrop}
            onFileDialogCancel={this.onCancel}
          >
            {

              ({getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject}) => {
                let styles = {...baseStyle}
                styles = isDragActive ? {...styles, ...activeStyle} : styles
                styles = this.state.errorMessage ? {...styles, ...rejectStyle} : styles
                return(
                  <div {...getRootProps()} style={styles}>
                  <input {...getInputProps()} />
                    {this.state.errorMessage && (<div style={errorMessage}><FileAlert /><div>{this.state.errorMessage}</div></div>)}
                    {(files.length !==0 && !this.state.errorMessage) ? <div>{files}</div> : <p>Drag and drop file here, or click to select a file.</p> }                 
                  </div>
                )
            }
            }
          </Dropzone>
        </section>
      );
    }

    //file validation logic
    validateFile = file => {
      let errorMessage = "";
  
      if (file.size > 2 * 1024 * 1024) {
        errorMessage = "Maximum file size is 2 Mb";
      }
  
      if (!file.type.match("application/pdf")) {
        errorMessage = "Only PDF files allowed";
      }
  
      this.isValidPdfFile(file)
      return errorMessage;
    };
  
    async isValidPdfFile(file) {
      try {
        let contentText = await this.readFileAsync(file);
        let data = contentText.substr(0, 8);
        var regex = new RegExp("%PDF-1.[0-7]");
  
        if (!data.match(regex)) {
           let errorMessage = "Is not a valid PDF file";
           this.setState({ errorMessage });
        }
      } catch (err) {
        console.log(err);
      }
    }
  
    readFileAsync(file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
  
        reader.onload = () => {
          resolve(reader.result);
        };
  
        reader.onerror = reject;
  
        reader.readAsText(file);
      });
    }
  }

  export default DropzoneArea
  