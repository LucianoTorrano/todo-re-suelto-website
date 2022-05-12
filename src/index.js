const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const {engine} = require('express-handlebars');

//settings
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'))
app.engine('.hbs',engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', 'hbs');

//middlewares
app.use(morgan('dev'));

//routes
app.use(require('./routes'));
app.use(require('./routes/products'));
app.use('/productos', require('./routes/lists'));

//public files
app.use(express.static(path.join(__dirname, 'public')));

//listening port
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'))
})