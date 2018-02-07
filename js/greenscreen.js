/*
 * Add code here to create a composite of two images by replacing the green pixels in the foreground image.
 *
 * Author: YOUR NAME HERE
 */
// useful function to clear the contents of a given canvas
function clearCanvas(fgcanvas) {
    var context = fgcanvas.getContext("2d");
    context.clearRect(0, 0, fgcanvas.width, fgcanvas.height);

}
function clearCanvas(bgcanvas) {
   
    var context = bgcanvas.getContext("2d");
    context.clearRect(0, 0, bgcanvas.width, bgcanvas.height);

}

function foreground() {
    var file = document.getElementById('fgInput');
    foreImage = new SimpleImage(file);
    var fgcanvas = document.getElementById('fgcanvas');
    foreImage.drawTo(fgcanvas);
}
function background() {
    var file = document.getElementById('bgInput');
    backImage = new SimpleImage(file);
    var bgcanvas = document.getElementById('bgcanvas');
    backImage.drawTo(bgcanvas);
}

function greenScreen(threshold) {
    if (foreImage == null  || backImage == null || ! foreImage.complete() || !backImage.complete()) {
        alert('Images not loaded');
    }
    else {
        // choose the threshold dynamically
        foreImage.setSize(fgcanvas.width, fgcanvas.height);
        backImage.setSize(bgcanvas.width, bgcanvas.height);
        var threshold = document.getElementById('threshold').value;
        var fgcanvas = document.getElementById('fgcanvas');
        greenScreenImage(threshold).drawTo(fgcanvas);
    }
    // given foreground and background images, make a new image of the canvas size

    // For each pixel in foreground image

        // if current pixel is green enough,

            // set output image's corresponding pixel to bgImage's pixel at same position

        // Otherwise,

            // set output image's corresponding pixel to current pixel

    // return resulting image
}
function greenScreenImage(threshold) {
    fgcanvas = document.getElementById('fgcanvas');
    var result = new SimpleImage(fgcanvas.width, fgcanvas.height);
    for (var pixel of result.pixels()) {
        var originalPixel = foreImage.getPixel(pixel.getX(), pixel.getY());
        pixel.setGreen(greenValue(originalPixel.getGreen(), threshold));
    }
    return result;
}

function greenValue(value, threshold) {
    if (value < threshold) {
        return value;
    }
    else {
        
        return backImage.getPixel(pixel.getX(), pixel.getY());
    }
}

var foreImage = null;
var backImage = null;
var fgcanvas = document.getElementById('fgcanvas');
var bgcanvas = document.getElementById('bgcanvas');

document.getElementById('fgInput').addEventListener('change', foreground, false);
document.getElementById('bgInput').addEventListener('change', background, false);
document.getElementById('do').addEventListener('click', greenScreen, false);
document.getElementById('clear').addEventListener('click', clearCanvas,false);
