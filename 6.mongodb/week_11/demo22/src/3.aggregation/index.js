import express from "express"
import appConfig from "../config/appConfig.js";
import connection from "../config/db.js";
import OrderModel from "./models/Models.js";

const PORT = appConfig.PORT ?? 8008;
const app = express();

const displayData = async (model) => {
    try {
        let data = await model.find()
        console.log("Documents in the collection: ", data)
    } catch (error) {
        console.log("Error: ", error)
    }
}

const addOrders = async () => {
    try {
        const orders = [
            { name: 'Watch', amount: 300 },
            { name: 'Laptop', amount: 1000 },
            { name: 'Phone', amount: 700 },
            { name: 'Phone', amount: 700 },
            { name: 'JS book', amount: 500 },
            { name: 'Bat', amount: 200 },
            { name: 'Tablet', amount: 600 },
            { name: 'Headphone', amount: 150 },
            { name: 'iPad', amount: 400 },
            { name: 'Headphone', amount: 150 },
            { name: 'iPad', amount: 400 },
        ];
        
        // let order = new OrderModel(newData)
        // await order.save()
        
        await OrderModel.insertMany(orders); // Insert multiple documents
        
        console.log("Order added successfully");
    } catch (err) {
        console.error("Error: " + err);
        throw err;
    }
}

// const aggregateData = async () => {
//     const result = await OrderModel.aggregate([
//         {$match : {amount : {$gt:250}}},
//         {$group : {_id : "$name", totalAmount : {$sum: "$amount"}}},
//         // {$sort : {totalAmount : -1}}, // descending order
//         {$sort : {totalAmount : 1}} // ascending order
//     ])
//     console.log("Orders with amount > 250: ", result)
// }

const aggregateData = async () => {
    try {
        const result = await OrderModel.aggregate([
            // 1. Match: Filter documents where amount > 250
            { $match: { amount: { $gt: 250 } } },

            // 2. Group: Group by "name" and calculate the total amount for each name
            { $group: { _id: "$name", totalAmount: { $sum: "$amount" }, orders: { $push: "$$ROOT" } } },

            // 3. Sort: Sort by totalAmount in descending order
            { $sort: { totalAmount: -1 } },

            // 4. Limit: Limit to top 3 results
            { $limit: 3 },

            // 5. Optional: Skip (e.g., skip the first result)
            { $skip: 1 },

             // 6. Project: Select specific fields and add a calculated field
            // {
            //     $project: {
            //         _id: 1,
            //         totalAmount: 1,
            //         numberOfOrders: { $size: "$orders" },
            //         averageAmount: { $divide: ["$totalAmount", { $size: "$orders" }] },
            //     }
            // },
        ]);    
        console.log("Aggregated Orders Data: ", result);
    } catch (error) {
        console.error("Error in aggregation: ", error);
    }
};

const startServer = () => {
    connection();
    // addOrders()
    aggregateData()
    // displayData(OrderModel)

    app.listen(PORT, (err) => {
        if (err) {
            console.error(`Error starting server: ${err}`);
            throw err;
        }
        console.log(`Server listening on port ${PORT}`);
    })
}

startServer();