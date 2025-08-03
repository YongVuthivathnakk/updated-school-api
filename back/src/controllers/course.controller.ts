import { Response, Request } from "express";
import db from "../models/index.ts";

/**
 * @swagger
 * /api/courses:
 *  get:
 *    summary: Get all courses
 *    tags: [Course]
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
 *        description: List of all courses
 */
export const getAllCourses = async (req: Request, res: Response) => {
  // takes amount of item at a time
  const limit = parseInt(req.query.limit as string) || 10;

  //  which page to take
  const page = parseInt(req.query.page as string) || 1;

  // total number of course
  const total = await db.Course.count();

  try {
    const courses = await db.Course.findAll({
      include: [db.Student, db.Teacher],
      limit: limit,
      offset: (page - 1) * limit,
    });
    res.json({
      meta: {
        totalItems: total,
        page: page,
        totalPages: Math.ceil(total / limit),
      },
      data: courses,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
