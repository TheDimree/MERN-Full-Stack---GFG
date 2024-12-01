import express from 'express'

export const router = express.Router();

// * Using queries
router.get("/", (req, res) => {
	// get the URL parameters passed by query with req.query
	const queries = req.query;
	res.send(queries);
});