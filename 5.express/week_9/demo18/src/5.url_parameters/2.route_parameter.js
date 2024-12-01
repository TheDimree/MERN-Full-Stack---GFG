import express from 'express'
const router = express.Router();

// * Using Route parameter
router.get("/:id/:name", (req, res) => {
	// get the URL parameter from URL with req.params
	const params = req.params;
	res.send(params);
});

export {router}