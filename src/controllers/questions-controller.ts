import { NextFunction, Request, Response } from "express";

class QuestionsController {
  async index(request: Request, response: Response) {
    return response.json();
  }

  async create(request: Request, response: Response) {
    return response.status(201).json({ message: "ok" });
  }

  async update(request: Request, response: Response) {
    return response.json();
  }

  async remove(request: Request, response: Response) {
    return response.json();
  }
}

export { QuestionsController };
