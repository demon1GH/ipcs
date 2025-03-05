import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import './Doxbin.css';

registerPlugin(FilePondPluginImagePreview);

function Doxbin() {
  return (
    <div className="doxbin">
      <h1>Doxbin</h1>
      <p>Upload and manage your files securely.</p>
      <FilePond
        allowMultiple={true}
        maxFiles={10}
        server="/api/upload" // Remplacez par votre endpoint d'upload
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}

export default Doxbin;
