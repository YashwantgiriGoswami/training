const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;

async function videoProccess(fileDetails) {
  let myPromise = new Promise((resolve, reject) => {
    ffmpeg.setFfmpegPath(ffmpegPath);
    ffmpeg(fileDetails.fd)
      .size("50%")
      .on("error", function (err) {
        console.log("An error occurred: " + err.message);
        reject();
      })
      .on("end", function () {
        console.log("Processing finished !");
        resolve();
      })
      .save("/home/zt31/Downloads/video/compress.mp4");
  });

  console.log("promise", myPromise);

  myPromise.then(
    function (value) {
      return { hasError: false, value: value };
    },
    function (error) {
      return { hasError: true, error: error };
    }
  );
}
module.exports = {
  friendlyName: "Video compresser",

  description: "",

  inputs: {
    fileDetails: {
      type: "json",
    },
  },

  exits: {
    success: {
      description: "All done.",
    },
  },

  fn: async function (inputs, exits) {
    try {
      let { fileDetails } = inputs;
      // let result = await videoProccess(inputs.fileDetails);
      // ffmpeg.setFfmpegPath(ffmpegPath);
      // ffmpeg(fileDetails.fd)
      //   .size("50%")
      //   .on("error", function (err) {
      //     console.log("An error occurred: " + err.message);
      //   })
      //   .on("end", function () {
      //     console.log("Processing finished !");
      //   })
      //   .save("/home/zt31/Downloads/video/compress.mp4");
      // fs.unlinkSync(fileDetails.fd);

      let myPromise = new Promise((resolve, reject) => {
        ffmpeg.setFfmpegPath(ffmpegPath);
        ffmpeg(fileDetails.fd)
          .size("30%")
          .on("error", function (err) {
            console.log("An error occurred: " + err.message);
            reject();
          })
          .on("end", function () {
            console.log("Processing finished !");
            resolve();
          })
          .save("/home/zt31/Downloads/video/compress.mp4");
      });

      console.log("promise", myPromise);

      myPromise.then(
        function (value) {
          exits.success(true);
        },
        function (error) {
          exits.success(false);
        }
      );
      // exits.success(true);
    } catch (error) {
      exits.success(false);
    }
  },
};
