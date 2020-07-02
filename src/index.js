import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { v1Routes, webRoutes } from './routes';
import mustacheExpress from 'mustache-express';
import db from './db';

const app = express();
const PORT = process.env.PORT || 3005;


// global.db = db;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(v1Routes);
app.use(webRoutes);

app.engine('html', mustacheExpress())
app.set('view engine', 'html');
app.set('views', __dirname + '/../views');
app.use(express.static('/public'));


//404 error handler
app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        errors: {
            message: err.message
        }
    })
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

export default app;