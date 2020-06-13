var express = require("express");
var router = express.Router();
//var axios = require("axios");
var ping = require("pingman");
//const shadower = require("ping-monitor");

/* GET home page. */
router.post("/", function (req, res, next) {
  var url = req.body.url; // accepts post data in json format expecting {"url":"www.something.com"}
  /*var site = new shadower(ops);
var ops = {

};*/
  (async () => {
    try {
      const response = await ping(url);
      console.log(response);
      if (response.alive) {
        res.json({
          url: url,
          alive: response.alive,
          min_time: response.min,
          max_time: response.max,
          avg_time: response.avg,
        });
      }
      //=> '<!doctype html> ...'
    } catch (error) {
      console.log(error);
      //=> 'Internal server error ...'
    }
  })();
});

module.exports = router;
