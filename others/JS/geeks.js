cv = require("@techstark/opencv-js");
const { Canvas, createCanvas, Image, ImageData, loadImage } = require("canvas");
const { JSDOM } = require("jsdom");
const { writeFileSync, existsSync, mkdirSync } = require("fs");

installDOM();

getImg = async () => {
  const image = await loadImage("Capture.png");
  //   console.log(image);

  const src = cv.imread(image);
  console.log(src);

  // const dst = new cv.Mat();
  // const M = cv.Mat.ones(5, 5, cv.CV_8U);
  // const anchor = new cv.Point(-1, -1);
  // cv.dilate(
  //   src,
  //   dst,
  //   M,
  //   anchor,
  //   1,
  //   cv.BORDER_CONSTANT,
  //   cv.morphologyDefaultBorderValue()
  // );

  // we create an object compatible HTMLCanvasElement
  // const canvas = createCanvas(300, 300);
  // cv.imshow(canvas, dst);
  // writeFileSync("output.jpg", canvas.toBuffer("image/jpeg"));
  // src.delete();
  // dst.delete();
};

function installDOM() {
  const dom = new JSDOM();
  global.document = dom.window.document;

  // The rest enables DOM image and canvas and is provided by node-canvas
  global.Image = Image;
  global.HTMLCanvasElement = Canvas;
  global.ImageData = ImageData;
  global.HTMLImageElement = Image;
}

getImg();

// onRuntimeInitialized();
// loadOpenCV.Module;
