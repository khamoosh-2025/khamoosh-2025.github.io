
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let img = new Image();

document.getElementById("imageUpload").addEventListener("change", function(e) {
    const reader = new FileReader();
    reader.onload = function(event) {
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
});

document.getElementById("textInput").addEventListener("input", drawText);
document.getElementById("fontSelect").addEventListener("change", drawText);
document.getElementById("colorPicker").addEventListener("input", drawText);
document.getElementById("fontSize").addEventListener("input", drawText);

function drawText() {
    if (!img.src) return;
    ctx.drawImage(img, 0, 0);
    const text = document.getElementById("textInput").value;
    const font = document.getElementById("fontSelect").value;
    const color = document.getElementById("colorPicker").value;
    const size = document.getElementById("fontSize").value;
    ctx.font = size + "px " + font;
    ctx.fillStyle = color;
    ctx.fillText(text, 50, 50);
}

function downloadImage() {
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = canvas.toDataURL();
    link.click();
}
