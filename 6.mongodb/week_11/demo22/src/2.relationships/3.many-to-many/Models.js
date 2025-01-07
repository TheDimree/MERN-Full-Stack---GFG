import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 's_22-book' }] // Must be an array
});

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 's_22-author' }] // Must be an array
});

const AuthorModel = mongoose.model('s_22-author', authorSchema);
const BookModel = mongoose.model('s_22-book', bookSchema);

export { AuthorModel, BookModel };