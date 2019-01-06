var express = require('express');
var router = express.Router();

const fetch = require("node-fetch")


// Constants
const MAIL_SERVER_LINK = "http://shivyshiv.com/mail/mailserver.php"

/* GET home page. */
router.post('/mail', function(req, res) {
  const {email, movieLink: link} = req.body;
  // console.log(link, email)
  // console.log(req.body)
  const data = {email, link};
  fetch(MAIL_SERVER_LINK, {method: "POST", body: JSON.stringify(data)})
    // .then(res => res.json())
    // .then(data => console.log(data))
    .catch(err => console.error(err))
});

module.exports = router;
