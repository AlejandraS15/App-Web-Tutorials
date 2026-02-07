import type { Request, Response } from 'express';
import { BookService } from "../services/BookService.js";

export class BookController {

  static index(req: Request, res: Response): void {
    res.render("books/index", {
      title: "Books",
      books: BookService.getAll()
    });
  }

  static show(req: Request, res: Response): void {
    const id = Number(req.params.id);
    const book = BookService.getById(id);

    if (!book) {
      res.status(404).send("Book not found");
      return;
    }

    res.render("books/show", { book });
  }
}
