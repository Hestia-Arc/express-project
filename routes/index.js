var express = require("express");
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  let navigationLinks = [
    "Multiplex PCR",
    "Technology",
    "Design",
    "Culture",
    "Business",
    "Sports",
  ];

  let rawdata = fs.readFileSync("./database/posts.json");

  let posts = JSON.parse(rawdata);

  let featuredPosts = posts.filter((item) => {
    return item.is_featured === true;
  });
  let nonFeaturedPosts = posts.filter((item) => {
    return item.is_featured === false;
  });

  res.render("blog", {
    title: "Hestia's blog",
    links: posts,
    posts: [featuredPosts, nonFeaturedPosts],
    
  });
});

module.exports = router;
