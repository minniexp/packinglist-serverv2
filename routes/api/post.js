const router = require("express").Router();
const Category = require("../../models/Category");
const List = require("../../models/List");
const User = require("../../models/User");
const { application } = require("express");
const ObjectID = require("mongodb").ObjectId;

// router.post("/save/category", async (req, res) => {
//   console.log("saving category")

//   const newCategory = new Category(req.body);
//   newCategory.save().catch((err) => console.log(err));
//   return res.status(200).send(newCategory);

//   // const checkCategory = await Category.findOne({ email: req.body.categoryName });
//   // console.log("check if exisintg cateogry: ", checkCategory)

//   // if (checkCategory) {
//   //   return res.status(400).send({});
//   // } else {

//   // }

// });

router.post("/create/list", async (req, res) => {
    console.log("creating list")
    // const queryList = await List.findOne({ listName: req.body.listName });
    // console.log("list Name: ", queryList);
    console.log("req body: ", req.body)
    const newList = new List(req.body);
    newList.save().catch((err) => console.log(err));
    console.log("newList: ", newList)
    return res.status(200).send(newList);
    /*
    if (queryList) {
      return res.status(400).send({});
    } else {

    }
    */
  });

  router.post("/create/category", async (req, res) => {
    console.log("creating category")
    // const queryList = await List.findOne({ listName: req.body.listName });
    // console.log("list Name: ", queryList);
    console.log("req body: ", req.body)
    const newCategory = new Category(req.body);
    newCategory.save().catch((err) => console.log(err));
    return res.status(200).send(newCategory);
    /*
    if (queryList) {
      return res.status(400).send({});
    } else {

    }
    */
  });

  router.post("/update/title", async (req, res) => {
    console.log("updating title")

    try {
      let id = req.body.id
      let listName = req.body.listName
      console.log("listName: ", listName)
  
      const listObjId = new ObjectID(id)
      const list = await List.find({_id: listObjId})
      // console.log("list: ", list)
  
      const updatedListValues = {
        _id: listObjId,
        listName: listName,
      };
  
      const updatedListRes = await List.findOneAndUpdate({_id: listObjId}, updatedListValues);

      if (updatedListRes) {
        return res.status(200).send(updatedListRes);
      } else {
        return res.status(404).send({});
      }
    } catch (error) {
      return res.status(400).send(error);
    }
    // const newCategory = new Category(req.body);
    // newCategory.save().catch((err) => console.log(err));
    // return res.status(200).send(newCategory);
    /*
    if (queryList) {
      return res.status(400).send({});
    } else {

    }
    */
  });

  router.post("/update/category", async (req, res) => {
    console.log("updating category")

    try {
      let id = req.body["list_id"]
      let category_id = req.body["category_id"]
      let categoryName = req.body.categoryName
      let items = req.body.items
  
      const categoryObjId = new ObjectID(category_id)
      const categoryData = await Category.find({_id: categoryObjId})
      console.log("categoryData: ", categoryData)
  
      const updatedCategoryValues = {
        _id: categoryObjId,
        categoryName: categoryName,
        items: items,
        list_id: categoryData.list_id
      };
  
      const categoryRes = await Category.findOneAndUpdate({_id: categoryObjId}, updatedCategoryValues);
      console.log("categoryRes: ", categoryRes)

      if (categoryRes) {
        return res.status(200).send(categoryRes);
      } else {
        return res.status(404).send({});
      }
    } catch (error) {
      return res.status(400).send(error);
    }
    // const newCategory = new Category(req.body);
    // newCategory.save().catch((err) => console.log(err));
    // return res.status(200).send(newCategory);
    /*
    if (queryList) {
      return res.status(400).send({});
    } else {

    }
    */
  });

  router.post("/deletelist", async (req, res) => {
    console.log("delete list")
    try {
      let id = req.body.id

      const listObjId = new ObjectID(id)
      const list = await List.find({_id: listObjId})
  
      const deletedList = await List.findOneAndDelete({
        _id: listObjId,
      });
  
      console.log("deletedList: ", deletedList)

      if (deletedList) {
        return res.status(200).send(deletedList);
      } else {
        return res.status(404).send({});
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  });

router.post("/additem", (req, res) => {
    console.log("add item");
  });
  
  
  // EDIT
  router.post("/edititem", (req, res) => {
      console.log("edit item");
  });
  
  router.post("/editcategory", (req, res) => {
    console.log("edit category");
  });
  
  router.post("/edittitle", (req, res) => {
    console.log("edit title");
  
  });
  
  // DELETE
  
  router.post("/deleteitem", (req, res) => {
    console.log("delete item");
  });
  
  router.post("/deletelist", (req, res) => {
    console.log("delete list");
  });
  
  router.post("/deletecategory", (req, res) => {
      console.log("delete category");
  });

  module.exports = router;
