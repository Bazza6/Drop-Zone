let archivos = [];
let displayList = '';
let fileList = document.getElementById("fileList");
let uploadText = document.getElementById('upload_text');
let loadingAnimation = document.getElementById('loader');
let modalMessage = document.getElementById('modalMessage');
let modal = document.getElementById("modalUpload");
let modalLogin = document.getElementById("modalLogin");
let dropbox = document.getElementById("dropbox");

dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
dropbox.addEventListener("dragleave", dragleave, false);

function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
}

function dragleave(e) {
    e.stopPropagation();
    e.preventDefault();
    dropbox.classList.remove('highlight')
}

function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
    dropbox.classList.add('highlight')
}

function drop(e) {
    e.stopPropagation();
    e.preventDefault();
    dropbox.classList.remove('highlight')
    const dt = e.dataTransfer;
    archivos = dt.files;
    displayArchivos()
}

function upload() {
    if (archivos.length === 0) {
        alert("seleccionar uno o más archivos")
    } else {
        uploadText.style.display = 'none'
        fileList.style.display = 'none'
        loadingAnimation.style.display = 'block';
        setTimeout(openModal, 1000)
    }
}

function displayArchivos() {
    let archivoLength = archivos.length;
    for (let i = 0; i < archivoLength; i++) {
        displayList += `<li>${archivos[i].name}</li>`;
    }
    uploadText.style.display = 'none';
    fileList.innerHTML = displayList;
    console.log("displayList", displayList);
}

function closeModal() {
    archivos = [];
    displayList = '';
    fileList.innerHTML = "";
    uploadText.style.display = 'block';
    fileList.style.display = 'block';
    modal.style.display = "none";
}

function openModal() {  // display results
    loadingAnimation.style.display = 'none';
    let random = Math.random();
    if (random < 0.6) {
        if (archivos.length === 1) {
            modalMessage.innerHTML = `<p>El archivo:</p> ${displayList} <p>(no) se ha subido con exito</p>`;
            modal.style.display = "block";
        } else {
            modalMessage.innerHTML = `<p>Los archivos:</p> ${displayList} <p>(no) se han subido con exito</p>`;
            modal.style.display = "block";
        }
    } else {
        modal.style.display = "block";
        modalMessage.innerHTML = `<h3>Ups, algo ha ido mañ</h3><br><p>No hemos podido subir tu archivo, revisa el formato o bien einténtalo de nuevo</p>`;
    }
}

function openLogin() {
    modalLogin.style.display = "block";
}

function login() {
    modalLogin.style.display = "none";
}