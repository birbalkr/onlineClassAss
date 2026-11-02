import express from 'express'
import routes from '../routes/url.routes.js';

const app = express();


app.use("/api/url",routes)



export default app