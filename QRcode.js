const siteInput = document.getElementById("QR-code");
const myCode = document.querySelector(".thecode img");
const genBtn = document.querySelector("button");

genBtn.onclick = function() {
    if(siteInput.value !== ""){
        myCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${siteInput.value}`
    }
}
getData()
