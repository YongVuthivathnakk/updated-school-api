
import { Response, Request } from "express"
import db from "../models/index.ts"

/**
 * @swagger
 * /api/teachers:
 *  get:
 *    summary: Get all teachers
 *    tags: [Teachers]
 *    parameters:
 *      - in: query
 *        name: page
 *        schema: { type: integer, default: 1 }
 *        description: Page number
 *      - in: query
 *        name: limit
 *        schema: { type: integer, default: 10 }
 *        description: Number of items per page
 *    responses: 
 *      200:
 *        description: List of Teachers
 */

export const getAllTeachers = async (req: Request, res: Response) => {

  // takes amount of items per page
  const limit = parseInt(req.query.limit as string) || 10;

  // which page to take
  const page = parseInt(req.query.page as string) || 1;

  // total items
  const total = await db.Teacher.count();

  try{
    const teachers = await db.Teacher.findAll(
      {
        include: db.Course,
        limit: limit,
        offset: (page - 1) * limit,
      });
    res.json(
      {
        meta: {
          totalItems: total,
          page: page,
          totalPages: Math.ceil(total / limit),
        },
        data: teachers,
      }
    );
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}