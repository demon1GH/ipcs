import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import './IpcsHost.css';

registerPlugin(FilePondPluginFileValidateType);

function IpcsHost() {
  return (
    <div className="ipcs-host">
      <h1>IPCS'Host</h1>
      <p>Public file hosting for your documents and images.</p>
      <FilePond
        allowMultiple={true}
        acceptedFileTypes={['image/*', 'application/pdf', 'text/plain']}
        server="/api/upload" // Remplacez par votre endpoint d'upload
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}

export default IpcsHost;
