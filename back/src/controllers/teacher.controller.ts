
import { Response, Request } from "express"
import db from "../models/index.ts"

/**
 * @swagger
 * /api/teachers:
 *  get:
 *    summary: Get all teachers
 *    tags: [Teachers]
 *    responses: 
 *      200:
 *        description: List of Teachers
 */

export const getAllTeachers = async (req: Request, res: Response) => {
  try{
    const teachers = await db.Teacher.findAll({include: db.Course});
    res.json(teachers);
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}