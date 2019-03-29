    //modulos
const express =  require('express'); //1
const path = require('path');//2
const exphbs = require('express-handlebars');//2.3
const methodOverride = require('method-override');//3
const session = require('express-session');    //4

//iniciadores
const app = express();//1.1
require('./database');

    //configuraciones
app.set('port', process.env.PORT || 3000);//1.2 servidor
app.set('views', path.join(__dirname, 'views'));//2.1 directorio
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs' //nombra la extension del archivo    
}));//2.2



    //middlewares
app.use(express.urlencoded({extended : false}));//3.1 enviar datos en el url
app.use(methodOverride('_method'));//3.2 envia otros metodos de forma oculta en los formularios
app.use(session({    //4.1
secret: 'mysecretapp',
resave: true,
saveUninitialized: true
}));

    //variables globales

    //rutas
app.use(require('./routes/index'));
app.use(require('./routes/locales'));
app.use(require('./routes/users'));

    //archivos estaticos
app.use(express.static(path.join(__dirname,'public')));
    
//iniciando servidor 1.3
    app.listen(app.get('port'), () => {
        console.log( 'Servidor en el puerto:',app.get('port'));
        
    })