function generateQr(){
    var data = document.getElementById('data').value
    eel.generate_qr(data)(setImage)
}
function setImage(base64){
    document.getElementById("qr").src=base64
}

function clearImage(){
    document.getElementById("qr").src=""
}