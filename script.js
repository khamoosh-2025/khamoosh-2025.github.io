
const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');
const imageLoader = document.getElementById('imageLoader');
const textInput = document.getElementById('textInput');
const fontSelector = document.getElementById('fontSelector');

let image = new Image();

imageLoader.addEventListener('change', handleImage, false);
textInput.addEventListener('input', drawText);
fontSelector.addEventListener('change', drawText);

function handleImage(e) {
    const reader = new FileReader();
    reader.onload = function(event) {
        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
            drawText();
        }
        image.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

function drawText() {
    ctx.drawImage(image, 0, 0);
    const text = textInput.value;
    const font = fontSelector.value;
    ctx.font = "40px " + font;
    ctx.fillStyle = "red";
    ctx.fillText(text, 50, 50);
}

function downloadImage() {
    const link = document.createElement('a');
    link.download = 'edited_image.png';
    link.href = canvas.toDataURL();
    link.click();
}
