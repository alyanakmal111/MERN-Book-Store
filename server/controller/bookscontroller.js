import { Book } from "../models/bookmodel.js";

//* Create Book
export const createBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      res.status(400).send({
        message: "All feilds are required: title , author and publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    res.sendStatus(500).send({ message: error.message });
  }
};

//* Get All Books

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ count: books.length, data: books });
  } catch (error) {
    res.sendStatus(500).send({ message: error.message });
  }
};

//* Get a Single book

export const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).json({ message: "book not found" });
    }
    return res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//* Update a book

export const updateBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      res.status(400).send({
        message: "All feilds are required: title , author and publishYear",
      });
    }
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) {
      res.status(404).json({ message: "book not found" });
    }
    return res.status(200).json({ message: "Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: message.error });
  }
};

//* Delete a book
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book deleted Succefully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
