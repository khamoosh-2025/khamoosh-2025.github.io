const upload = document.getElementById('upload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let img = new Image();

upload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = event.target.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  }
});

function enhanceImage() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.min(255, data[i] + 20);     // Red
    data[i+1] = Math.min(255, data[i+1] + 20); // Green
    data[i+2] = Math.min(255, data[i+2] + 20); // Blue
  }
  ctx.putImageData(imageData, 0, 0);

  const link = document.getElementById('download');
  link.href = canvas.toDataURL();
}
