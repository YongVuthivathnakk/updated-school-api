import db from "../models/index.ts"
import { Request, Response } from "express";


/**
 * @swagger
 * /api/students:
 *  get:
 *    summary: Get all students
 *    tags: [Student]
 *    parameters:
 *      - in: query
 *        name: page
 *        schema: {type: integer, default: 1}
 *        description: Page number
 *      - in: query
 *        name: limit
 *        schema: {type: integer, default: 10}
 *        description: Number of items per page
 *    responses: 
 *      200:
 *        description: List of students 
 */


export const getAllStudent = async (req: Request, res: Response) => {
  // takes amount of item at a time
  const limit = parseInt(req.query.limit as string) || 10;
  
  // which page to take
  const page = parseInt(req.query.page as string) || 1;

  // total of pages
  const total = await db.Student.count();
  try {
    const students = await db.Student.findAll({
      include: db.Course,
    });
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};