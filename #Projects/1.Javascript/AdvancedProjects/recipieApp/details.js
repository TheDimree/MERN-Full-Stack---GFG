import { getRecipie } from "./api.js";
import appendDetail from './appendDetail.js'
const result = await getRecipie();
const container = document.querySelector('.details-main-container');
appendDetail(result , container);