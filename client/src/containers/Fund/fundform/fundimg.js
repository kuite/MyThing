import React, { Component } from 'react';
import Dropzone from "react-dropzone";
import axios from "axios";

export class UploadFileContent extends Component {

  onDrop = (acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = async () => {
        const fileAsDataURL = reader.result;

        const res = await axios.post("http://localhost:50647/Fund/SubmitFundImages/", {
          content: fileAsDataURL,
          toGallery: true
        });
      };
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");

      reader.readAsDataURL(file);
    });
  };



  render() {

    const files = field.input.value;

    return (
      <div>
     <Dropzone
        onDrop={this.onDrop}
      >
        <div>Try dropping some files here, or click to select files to upload.</div>

      </Dropzone>

      {files && Array.isArray(files) && (
        <ul>
          { files.map((file, i) => <li key={i}>{file.name}</li>) }
        </ul>
      )}


      </div>
    );
  }
}

