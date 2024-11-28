import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Routes from './routes';
import errorHandler from './middlewares/errorHandler';

const app = express();

// app.use(express.static('public'));
app.use(
    cors({
        origin: '*',
    })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1', Routes);
app.use(errorHandler);

export default app;
