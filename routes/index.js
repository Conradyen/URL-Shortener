const express = require("express");
const router = express.Router();

const Url = require("../models/URLShorten");

// @route     GET /:code
// @desc      Redirect to long/original URL
router.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code }, function (
      err,
      doc
    ) {
      if (doc) {
        const lastUpdate = doc.lastUpdate;
        const now = Date.now();
        let difference_in_day = (now - lastUpdate) / (1000 * 3600 * 24);
        if (difference_in_day > 1) {
          doc.visitedCount.push(doc.todayCount);
          doc.todayCount = 0;
          doc.lastUpdate = now;
          difference_in_day -= 1;
          while (difference_in_day > 0) {
            doc.visitedCount.push(0);
            difference_in_day -= 1;
          }
        }
        doc.totalCount += 1;
        doc.todayCount += 1;
        // console.log(doc);
        doc.save(function (err) {
          if (err) {
            console.log(err); // do something
          }
        });
      } else {
        console.log(err);
      }
    });
    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No url found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
