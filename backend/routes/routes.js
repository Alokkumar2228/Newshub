import express from 'express';
import { categoryNews } from '../controller/newController.js';

const router = express.Router();

router.get('/:category/news', categoryNews);


export default router;