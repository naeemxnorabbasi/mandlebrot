# Mandelbrot Set Visualizer: User Guide

## **What is the Mandelbrot Set?**
The Mandelbrot set is a mathematical set of complex numbers that produces a beautiful and intricate fractal pattern. It is defined by the iterative formula:

\[
z_{n+1} = z_n^2 + c
\]

Where:
- \( z \) and \( c \) are complex numbers.
- The initial value \( z_0 \) is \( 0 \).
- \( c \) represents a point in the complex plane.

A point \( c \) is part of the Mandelbrot set if the sequence \( |z_n| \) does not diverge to infinity after many iterations. The resulting visualization reveals a complex structure, often colored to highlight the rate of divergence.

## **How This App Computes the Mandelbrot Set**
This app visualizes the Mandelbrot set by:
1. **Mapping pixels to the complex plane**: Each pixel in the canvas corresponds to a complex number \( c \).
2. **Iterating the formula**: The app calculates \( z_{n+1} = z_n^2 + c \) starting with \( z_0 = 0 \) for each pixel.
3. **Checking divergence**: Iterations stop when \( |z_n| > 2 \) or after reaching a maximum number of iterations.
4. **Coloring the pixel**: 
   - If \( c \) is in the set (does not diverge), the pixel is colored black.
   - Otherwise, the pixel is assigned a color based on the number of iterations before divergence, creating a gradient.

### **Algorithm to Plot the Mandelbrot Set**
1. Define the canvas dimensions (\( width, height \)).
2. Set parameters:
   - **Zoom**: Determines how much of the complex plane is visualized.
   - **Offsets**: Center the view on a region of interest.
   - **Max Iterations**: Controls precision and detail.
3. For each pixel (\( x, y \)):
   - Compute \( c = \text{map}(x, y) \) to the complex plane.
   - Initialize \( z = 0 \).
   - Repeat \( z = z^2 + c \) up to the max iterations.
   - If \( |z| > 2 \), mark divergence and set color.
4. Render each pixel on the canvas.

## **How to Use This App**
1. **Load the App**:
   - Open the `index.html` file in a modern web browser.
   - The app will display a canvas and two buttons.

2. **Draw the Mandelbrot Set**:
   - Click the **"Draw Mandelbrot Set"** button.
   - The app computes the Mandelbrot set and visualizes it on the canvas.

3. **Clear the Canvas**:
   - Click the **"Clear Canvas"** button to erase the current visualization.

4. **Enjoy the Visualization**:
   - Experiment with resizing or modifying parameters in the source code (e.g., `zoom`, `offsetX`, `offsetY`) to explore different areas of the Mandelbrot set.

## **Troubleshooting**
- If the app feels slow:
  - Reduce the canvas size.
  - Lower the maximum number of iterations in `script.js`.
- If the set does not appear:
  - Ensure JavaScript is enabled in your browser.
  - Check the browser console for error messages.

With this app, you can dive into the mesmerizing world of fractals and explore the mathematical beauty of the Mandelbrot set! 🌀
