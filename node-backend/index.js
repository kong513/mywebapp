let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser')
    //mongoDb = require('./database/db')


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Aimpree04478:QMRpe7dZtEeJOrrI@aimpree.wdm83ta.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true,
    //useCreateIndex: true

    
}).then(() => {
    console.log('Database successfully connected');
}, error => {
    console.log('Database error: ' + error)
})

const itemRoute = require('./routes/item.routes')
const userRoute = require('./routes/user.routes')
const auth = require('./routes/auth')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors());

// Static directory path 
app.use(express.static(path.join(__dirname, 'dist/')))
// Base route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

// API Root
app.use('/api', auth, itemRoute),app.use('/api-user', userRoute);


// PORT 
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listening on port ' + port)
})

// 404 Handler
app.use((req, res, next) => {
    next(createError(404));
})

// error handler
app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})