const fileUploadBtn = document.querySelector('.upload-file').addEventListener('click', uploadFile);

// console.log(fileUploadBtn);

async function uploadFile(evt) {
    evt.preventDefault();
    // const [fileHandle] = await window.showOpenFilePicker();
    const file = await window.showOpenFilePicker();
    // const filedata = await fileHandle.getPath();
    console.log(file[0].name);
    

}




