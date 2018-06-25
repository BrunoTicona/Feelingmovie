var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 9090;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'genial! Bienvenido a nuestro api!' });
});

var usuariosRouter = require('./rutas/usuarios');
router.use('/usuarios', usuariosRouter);


app.use('/api', router);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/proyecto');
mongoose.Promise = global.Promise;

app.listen(port);
console.log('La magia sucede en el puerto ' + port);
