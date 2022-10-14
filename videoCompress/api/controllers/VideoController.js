/**
 * VideoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   */
  compress: async function (req, res) {
    try {
      let file = req.file("video");

      let fileDetails = await sails.uploadOne(file, {
        dirname: "/home/zt31/Downloads/video",
        maxBytes: 500000000,
      });

      console.log(fileDetails);

      let result = await sails.helpers.videoCompresser(fileDetails);

      if (result) {
        res.ok({
          data: fileDetails,
        });
      } else {
        res.badRequest({
          data: "fail",
        });
      }
    } catch (error) {
      res.badRequest({
        data: "fail",
        error: error.toString(),
      });
    }
  },
};
