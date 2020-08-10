const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortid = require("shortid");
// const config = require("config");
const dotenv = require("dotenv");
dotenv.config("../");
// const getPreview = require("../Utils/getWebsitePreview");
const Url = require("../models/URLShorten");

// @route     POST /api/url/shorten
// @desc      Create short URL
router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = process.env.BASE_URL;

  // Check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base url");
  }

  // Create url code
  const urlCode = shortid.generate();

  // Check long url
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });
    //   const preview = await getPreview(longUrl);
      if (url) {
        // url.preview = preview;
        res.json({ url});
      } else {
        const shortUrl = baseUrl + "/" + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();
        // url.preview = preview;
        res.json({ url});
      }
    } catch (err) {
      console.error(err);
      res.status(500).json("Server error");
    }
  } else {
    res.status(401).json("Invalid long url");
  }
});

module.exports = router;
