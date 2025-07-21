
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let drawing = false;
let currentFilter = '';
canvas.width = 800;
canvas.height = 600;

document.getElementById('upload').addEventListener('change', function (e) {
  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});

function addText() {
  const text = document.getElementById('text').value;
  const font = document.getElementById('fontFamily').value;
  const color = document.getElementById('textColor').value;
  ctx.fillStyle = color;
  ctx.font = '30px ' + font;
  ctx.fillText(text, 50, 50);
}

function applyFilter(type) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    if (type === 'grayscale') {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = data[i + 1] = data[i + 2] = avg;
    } else if (type === 'brightness') {
      data[i] += 40;
      data[i + 1] += 40;
      data[i + 2] += 40;
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function enableDrawing() {
  canvas.addEventListener('mousedown', () => drawing = true);
  canvas.addEventListener('mouseup', () => drawing = false);
  canvas.addEventListener('mousemove', draw);
}

function draw(e) {
  if (!drawing) return;
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#000000';
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function downloadImage() {
  const link = document.createElement('a');
  link.download = 'edited-image.png';
  link.href = canvas.toDataURL();
  link.click();
}
