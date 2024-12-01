import express from 'express';
import {router as QueryParam} from './1.query_parameter.js'
import {router as RouteParam} from './2.route_parameter.js'

const app = express();  // create an express object
const PORT = 8008;  // server port

// * Check this URL: http://localhost:8008/query/?id=101&name=Bhagesh
app.use('/query', QueryParam)

// * Check this URL: http://localhost:8008/route/101/Bhagesh
app.use('/route', RouteParam)

// listen for connections
app.listen(PORT, () => {
	console.log(`server is listening at port: ${PORT}`);
});