import express from 'express';
import cors from 'cors';
import router from './routes/routes.js'; // make sure to include `.js` for ES modules

const app = express();
const port = 3000;

app.use(cors());

app.use('/api',router);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
