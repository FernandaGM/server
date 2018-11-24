var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;
const mymodule = require("./api/routes");
const router = express.Router();
router.get('/', function(req, res) {
    res.json({ message: 'API is Online!' + mymodule.myDateTime() });   
});

router.use(function(req, res, next) {
   console.log("We've got something.");
   next() //calls next middleware in the application.
});

router.route('/numbers/:number').post((req, res) => {
     res.json({result: req.params.number + 1})
});

router.route('/letters/:letter').get((req, res) => {
     res.json({result: req.params.letter.toUpperCase()})
});

app.use('/api', router);
app.listen(port);
console.log('Listening on port ' + port);

