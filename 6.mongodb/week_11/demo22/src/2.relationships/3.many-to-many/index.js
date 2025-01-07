import express from "express";
import appConfig from "../../config/appConfig.js";
import connection from "../../config/db.js";
import { AuthorModel, BookModel } from "./Models.js";

const PORT = appConfig.PORT ?? 8008;
const app = express();

const addAuthorsAndBooks = async () => {
    try {
        // Step 1: Create authors
        const author1 = new AuthorModel({ name: 'Krishna', bio: 'Expert in PHP', books: [] });
        const author2 = new AuthorModel({ name: 'Arjun', bio: 'Expert in JavaScript', books: [] });
        await author1.save();
        await author2.save();
        console.log("Authors added successfully");

        // Step 2: Create books
        const book1 = new BookModel({ title: 'PHP Basics', authors: [] });
        const book2 = new BookModel({ title: 'JavaScript for Beginners', authors: [] });
        await book1.save();
        await book2.save();
        console.log("Books added successfully");

        // Step 3: Establish Many-to-Many relationship
        // Add authors to books 
        book1.authors.push(author1._id, author2._id);
        book2.authors.push(author1._id);
        await book1.save();
        await book2.save();

        // Add books to authors
        author1.books.push(book1._id, book2._id);
        author2.books.push(book1._id);
        await author1.save();
        await author2.save();

        console.log("Many-to-Many relationship established");
    } catch (err) {
        console.error("Error: ", err);
        throw err;
    }
};

// Step 4: Query and display relationships
const display = async () => {
    try {
        const populatedBooks = await BookModel.find().populate('authors');
        const populatedAuthors = await AuthorModel.find().populate('books');

        if (!populatedBooks) {
            console.log("Book not found in DB");
            return;
        }
        if (!populatedAuthors) {
            console.log("Authors not found in DB");
            return;
        }

        console.log("Books with Authors: ", populatedBooks);
        console.log("Authors with Books: ", populatedAuthors);
            
        // * Output :
    }
    catch (err) {
        console.error("Error fetching book: ", err);
    }
}

// Start the server
const startServer = () => {
    connection();
    // addAuthorsAndBooks(); // Establish and display the Many-to-Many relationship
    display();
    app.listen(PORT, (err) => {
        if (err) {
            console.error(`Error starting server: ${err}`);
            throw err;
        }
        console.log(`N:N Server listening on port ${PORT}`);
    });
};

startServer();
