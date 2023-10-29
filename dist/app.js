import express, { json, urlencoded } from 'express';
import session from 'express-session';
import { routerLogin } from './Routes/login';
const app = express();
const PORT = process.env.PORT ?? 1234;
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(routerLogin);
app.listen(PORT, () => {
    console.log('server listening on port http://localhost:1234');
});
