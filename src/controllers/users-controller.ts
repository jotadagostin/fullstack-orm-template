import { NextFunction, Request, Response } from "express";

class UsersController {
  async index(request: Request, response: Response) {
    return response.json();
  }

  async create(request: Request, response: Response) {
    throw new Error("SOMETHING IS BROKEN!");
    return response.status(201).json({ message: "ok" });
  }

  async show(request: Request, response: Response) {
    return response.json();
  }
}

export { UsersController };
