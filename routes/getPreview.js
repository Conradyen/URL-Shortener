const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
// const config = require("config");
const dotenv = require("dotenv");
dotenv.config("../");
const getPreview = require("../Utils/getWebsitePreview");
const Preview = require("../models/LinkPreview");

// @route     GET /api/url/preview
// @desc      get link preview
router.post("/preview", async (req, res) => {
  const { longUrl } = req.body;
  //   const baseUrl = process.env.BASE_URL;
  console.log(longUrl);
  // Check long url
  if (validUrl.isUri(longUrl)) {
    try {
      //   let url = await Url.findOne({ longUrl });
      const preview = await getPreview(longUrl);
      //   const ret = new Preview({

      //   });

      res.json({ preview });
    } catch (err) {
      console.error(err);
      res.status(500).json("Server error");
    }
  } else {
    res.status(401).json("Invalid long url");
  }
});

module.exports = router;
