const canvas = document.getElementById('mandelbrotCanvas');
const ctx = canvas.getContext('2d');

const drawButton = document.getElementById('drawButton');
const clearButton = document.getElementById('clearButton');

// Function to draw the Mandelbrot set
function drawMandelbrotSet() {
    const width = canvas.width;
    const height = canvas.height;

    const maxIter = 500;
    const zoom = 200; // Controls the zoom level
    const offsetX = -2.5; // Shift the set horizontally
    const offsetY = -1.5; // Shift the set vertically

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const cx = x / zoom + offsetX;
            const cy = y / zoom + offsetY;

            let zx = 0, zy = 0;
            let iteration = 0;

            while (zx * zx + zy * zy < 4 && iteration < maxIter) {
                const xtemp = zx * zx - zy * zy + cx;
                zy = 2.0 * zx * zy + cy;
                zx = xtemp;
                iteration++;
            }

            // Color mapping
            const color = iteration === maxIter ? 'black' : `hsl(${(iteration / maxIter) * 360}, 100%, 50%)`;
            ctx.fillStyle = color;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Event listeners for buttons
drawButton.addEventListener('click', drawMandelbrotSet);
clearButton.addEventListener('click', clearCanvas);
