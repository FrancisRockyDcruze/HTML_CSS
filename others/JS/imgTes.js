// import opencv from "https://cdn.jsdelivr.net/npm/opencv@7.0.0/+esm";

var Tesseract = require("tesseract.js");
var Jimp = require("jimp");
var cv = require("node-opencv");

loadImg = async () => {
  // img1 =
  const worker = await Tesseract.createWorker("eng");
  const res = await worker.recognize("CaptureEdit.jpg");

  console.log(res.data.text);
};

imgEffect = async () => {
  // open a file called "lenna.png"
  //   await Jimp.read("Capture.png", (err, img) => {
  //     if (err) throw err;
  //     img
  //       .resize(1500, 300) // resize
  //       .quality(100) // set JPEG quality
  //       .greyscale() // set greyscale
  //       .contrast(0.2)
  //       .gaussian(1)
  //       .write("CaptureEdit.jpg"); // save
  //   });

  var jimpSrc = await Jimp.read("Capture.png");
  var src = cv.matFromImageData(jimpSrc.bitmap);
  console.log(src);
};

imgEffect();
// loadImg();

