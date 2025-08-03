import express from 'express';
import { getAllTeachers } from '../controllers/teacher.controller.ts';

const router = express.Router();

router.get('/', getAllTeachers);

export default router;