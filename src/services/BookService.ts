import { books } from "../data/Books.js";
import { Book } from "../models/BookModel.js";

export class BookService {

  static getAll(): Book[] {
    return books;
  }

  static getById(id: number): Book | undefined {
    return books.find(book => book.id === id);
  }
}