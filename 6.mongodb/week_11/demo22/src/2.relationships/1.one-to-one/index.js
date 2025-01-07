import express from "express";
import appConfig from "../../config/appConfig.js"
import connection from "../../config/db.js";
import { AuthorModel, BookModel } from "./Models.js";

const PORT = appConfig.PORT ?? 8008;
const app = express();

// Function to add a new author and their book (One-to-One relationship)
const addBookWithAuthor = async () => {
    try {
        // Step 1: Create and save the author
        const author = new AuthorModel({ name: 'Arjun', bio: 'Expert in PHP' });
        await author.save();
        console.log("Author added successfully");

        // Step 2: Create and save the book referencing the author
        const book = new BookModel({ title: 'Java Complete Reference', author: author._id });
        await book.save();
        console.log("Book added successfully");
    } catch (err) {
        console.error("Error: ", err);
        throw err;
    }
};

// Step 3: Fetch and display the book with the author's details
const display = async () => {
    try {
        const populatedBook = await BookModel.findOne({ title: 'PHP Complete Reference' }).populate('author');
    if(!populatedBook)
        console.log("Book not found in DB");
    console.log("Book with Author: ", populatedBook);
    
    // * Output :
    // Book with Author:  {
    //     _id: new ObjectId('67690cfffa92050ac0146654'),
    //     title: 'PHP Complete Reference',
    //     author: {
    //       _id: new ObjectId('67690cfffa92050ac0146651'),
    //       name: 'Krishna',
    //       bio: 'Expert in PHP',
    //       createdAt: 2024-12-23T07:10:55.296Z,
    //       updatedAt: 2024-12-23T07:10:55.296Z,
    //       __v: 0
    //     },
    //     createdAt: 2024-12-23T07:10:55.474Z,
    //     updatedAt: 2024-12-23T07:10:55.474Z,
    //     __v: 0
    //   }
    }
    catch (err) {
        console.error("Error fetching book: ", err);
    }
}

// Start the server
const startServer = () => {
    connection();
    // addBookWithAuthor(); // Establish and display the One-to-One relationship
    display(); // Fetch and display the book with the author's details
    app.listen(PORT, (err) => {
        if (err) {
            console.error(`Error starting server: ${err}`);
            throw err;
        }
        console.log(`Server listening on port ${PORT}`);
    });
};

startServer();