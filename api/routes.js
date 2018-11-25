exports.configureRoutes = function (router) {
    router.get('/', function(req, res) {
        res.json({ message: 'API is Online!'});   
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
};
