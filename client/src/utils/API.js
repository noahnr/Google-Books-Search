import axios from "axios";
import googleBooks from "google-books-search";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  searchGoogleBooks: function(query, cb) {
    googleBooks.search(query, function(err, res) {
      if (err) return console.log(err);
      cb(res);
    });
  }
};
