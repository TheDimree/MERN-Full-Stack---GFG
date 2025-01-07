import express from "express";
import appConfig from "../../config/appConfig.js";
import connection from "../../config/db.js";
import { AuthorModel, BookModel } from "./Models.js";

const PORT = appConfig.PORT ?? 8008;
const app = express();


// Function to add an author and multiple books
const addBooksForAuthor = async () => {
    try {
        // Step 1: Create and save the author
        const author = new AuthorModel({ name: 'Bhagesh Dimri', bio: 'A Full Stack Developer' });
        await author.save();
        console.log("Author added successfully");

        // Step 2: Create and save multiple books referencing the same author
        const books = [
            { title: 'JavaScript Complete Reference', author: author._id },
            { title: 'React Complete Reference', author: author._id },
            { title: 'Node.js Complete Reference', author: author._id }
        ];
        await BookModel.insertMany(books);
        console.log("Books added successfully");
    } catch (err) {
        console.error("Error: ", err);
    }
};

// Step 3: Fetch and display the book with the author's details
const display = async () => {
    try {
        // const populatedBooks = await BookModel.find({ author: author._id }).populate('author');
        const populatedBook = await BookModel.findOne({ title: 'JavaScript Complete Reference' }).populate('author');
        if (!populatedBook)
            console.log("Book not found in DB");
        console.log("The Author with multiple books: ", populatedBook);

        // * Output :
        // The Author with multiple books:  {
        //     _id: new ObjectId('6769125de9cf5c57281c54be'),
        //     title: 'JavaScript Complete Reference',
        //     author: {
        //       _id: new ObjectId('6769125de9cf5c57281c54b9'),
        //       name: 'Bhagesh Dimri',
        //     author: {
        //       _id: new ObjectId('6769125de9cf5c57281c54b9'),
        //       name: 'Bhagesh Dimri',
        //       bio: 'A Full Stack Developer',
        //       _id: new ObjectId('6769125de9cf5c57281c54b9'),
        //       name: 'Bhagesh Dimri',
        //       bio: 'A Full Stack Developer',
        //       name: 'Bhagesh Dimri',
        //       bio: 'A Full Stack Developer',
        //       bio: 'A Full Stack Developer',
        //       createdAt: 2024-12-23T07:33:49.717Z,
        //       updatedAt: 2024-12-23T07:33:49.717Z,
        //       __v: 0
        //     },
        //     __v: 0,
        //     createdAt: 2024-12-23T07:33:49.976Z,
        //     updatedAt: 2024-12-23T07:33:49.976Z
        //   }
    }
    catch (err) {
        console.error("Error fetching book: ", err);
    }
}

// Start the server
const startServer = () => {
    connection();
    // addBooksForAuthor(); // Establish and display the One-to-Many relationship
    display(); // Fetch and display the book with author's details
    app.listen(PORT, (err) => {
        if (err) {
            console.error(`Error starting server: ${err}`);
            throw err;
        }
        console.log(`Server listening on port ${PORT}`);
    });
};

startServer();