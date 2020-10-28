const express = require("express");
const WorkItemsController = require("../controllers/workItems");
const router = express.Router();

router.get("/work", WorkItemsController.getWorkPage);
router.post("/work", WorkItemsController.postNewWorkItem);
router.post("/delete", WorkItemsController.deleteItem);

module.exports = router;