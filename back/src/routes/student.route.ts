import express from 'express';
import { getAllStudent } from '../controllers/student.controller.ts';


const router = express.Router();

router.get('/', getAllStudent);


export default router;