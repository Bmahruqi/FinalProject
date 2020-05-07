const express = require('express');
const app = express();
const port = 3000;

const testData = require('./lib/testdata');
const handlers = require('./lib/handlers');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');






app.use(express.static('public'));

app.use(cookieParser("Hello"));
app.use(session(
    {secret: "Hello", 
    cookie: { maxage: 6000},
    resave: false,
    saveUninitialized: false
  }))

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next){
    if(!res.locals.partials) res.locals.partials = {};
    res.locals.partials.testServiceData = testData.getServiceData();
    next();
    });


app.use(express.urlencoded({extended: true}))



app.get('/', handlers.home);

app.get('/Login',handlers.login);
app.get('/services',handlers.services);
app.get('/Contact',handlers.contact);
// app.get('/listServices',handlers.serviceDetails);

 
app.get('/Register',handlers.getregister);
app.post('/Register', handlers.postregister);
app.get('/formResults', handlers.formResults);

//app.get('/book', handlers.book);
app.get('/book',handlers.getBook);
app.get('/book',handlers.postBook);
app.get('/BookResults',handlers.BookResults);

//app.get('/serviceDetails',handlers.serviceDetails);

app.get('/Details',handlers.Details);


app.use(handlers.notFound);
app.use(handlers.serverError);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

