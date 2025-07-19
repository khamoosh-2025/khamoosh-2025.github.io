
let canvas = document.getElementById("imageCanvas");
let ctx = canvas.getContext("2d");
let image = new Image();
let brightnessControl = document.getElementById("brightness");
let contrastControl = document.getElementById("contrast");

document.getElementById("imageUpload").addEventListener("change", function (e) {
  const reader = new FileReader();
  reader.onload = function (event) {
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
    };
    image.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});

function applyAdjustments() {
  const brightness = parseFloat(brightnessControl.value);
  const contrast = parseFloat(contrastControl.value);

  ctx.drawImage(image, 0, 0);
  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = truncate(((data[i] - 128) * contrast + 128) * brightness);
    data[i + 1] = truncate(((data[i + 1] - 128) * contrast + 128) * brightness);
    data[i + 2] = truncate(((data[i + 2] - 128) * contrast + 128) * brightness);
  }

  ctx.putImageData(imageData, 0, 0);
}

function autoEnhance() {
  brightnessControl.value = 1.2;
  contrastControl.value = 1.2;
  applyAdjustments();
}

function truncate(value) {
  return Math.min(255, Math.max(0, value));
}

function downloadImage() {
  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = canvas.toDataURL();
  link.click();
}
