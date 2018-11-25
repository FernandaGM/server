const mymodule = require("./routes");

exports.myServerConfiguration = function (app, router) {
    
    mymodule.configureRoutes(router);

    app.use('/api', router);
    app.listen(3000);
    console.log('Listening on port 3000');
}