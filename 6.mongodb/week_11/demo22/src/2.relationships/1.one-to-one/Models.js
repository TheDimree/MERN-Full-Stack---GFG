import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    bio: String
}, { timestamps: true })

const bookSchema = new mongoose.Schema({
    title: { type: String, unique: true, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 's_22-author', unique: true } // Unique ensures One-to-One
}, { timestamps: true })

export const AuthorModel = mongoose.model('s_22-author', authorSchema)
export const BookModel = mongoose.model('s_22-book', bookSchema)