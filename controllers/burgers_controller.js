var express = require("express");

var router = express.Router();

var db = require("../models");

module.exports = function(router) {

   // router.get('/', function(req, res) {
   //      res.redirect('/index');
   //  });

router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(
    function(results) {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  

  db.Burger.update({
    devoured: req.body.devoured
  }, { 
      where: {
          id: req.params.id
      }
}).then(function(results) {
    res.redirect("/");
  });
});

// router.delete("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.updateOne({
//     devoured: req.body.devoured
//   }, condition, function() {
//     res.redirect("/");
//   });
// });

};
