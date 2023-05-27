const router = require("express").Router();
const Category = require("../../models/Category");
const List = require("../../models/List");
const User = require("../../models/User");
const { application } = require("express");
const ObjectID = require("mongodb").ObjectId;

// GET REQUESTS
router.get("/getAllLists", async (req, res) => {
    const allLists = await List.find(); /// this returns a list
    console.log("get all lists")
    return res.status(200).send(allLists);
});

router.get("/getlist/:listID", async(req, res) => {
    const listID = req.params.listID;
    const listObjID = new ObjectID(listID);

    const categories = await Category.find({list_id: listID});
    const listName = await List.findById(listObjID)
    console.log("cateogires: ", categories)

    console.log("this is the params of listID: ", listID)
    console.log("getting list");
    const output = [listName, categories]
    return res.status(200).send(output);
  
  // const getSTMT = `SELECT * FROM allitems WHERE title = (SELECT title FROM allitems WHERE id = '${listID}');`;
});

module.exports = router;
