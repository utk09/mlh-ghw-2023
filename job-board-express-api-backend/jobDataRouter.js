const express = require("express");
const fs = require("fs");
const jsonData = fs.readFileSync("./jobs.json", "utf-8");
const jobData = JSON.parse(jsonData);

jobRouter = express.Router();

/**
 * @description - This route is used to get the job details based on the id and location
 * @param - id, location
 * @method - GET
 * @returns - job details
 */
jobRouter.get("/jobqueryparams", (req, res) => {
  const id = parseInt(req.query.id);
  const location = req.query.location;
  const response = jobData.find(
    (myJob) => myJob.id === id && myJob.location === location
  );
  if (response) {
    res.status(200).send(response);
  } else {
    res.status(404).send("No data found!");
  }
});

/**
 * @description - This route is used to get the job details based on the id and location
 * @param - id, location
 * @method - POST
 * @returns - job details
 */
jobRouter.post("/jobqueryparams", (req, res) => {
  const { id, location } = req.body;
  const response = jobData.filter((myJob) => myJob.location === location);
  if (response) {
    res.status(200).send(response);
  } else {
    res.status(404).send("No data found!");
  }
});

/**
 * @description - This route is used to add new job details
 * @param - id, company, jobTitle, postedOn, location
 * @method - POST
 * @returns - job details
 * @throws - 400 if id already exists
 * @throws - 500 if error writing file
 * @throws - 200 if data added successfully
 */
jobRouter.post("/addnew", (req, res) => {
  const { id, company, jobTitle, postedOn, location } = req.body;
  const isDuplicateId = jobData.some((myJob) => myJob.id === id);
  if (isDuplicateId) {
    res.status(400).send("Oops! ID already exists");
    return;
  }
  const newData = { id, company, jobTitle, postedOn, location };
  jobData.push(newData);
  fs.writeFile("./jobs.json", JSON.stringify(jobData), (err) => {
    if (err) {
      res.status(500).send("Error writing file");
      return;
    }
    res.status(200).send("Data added succesfully");
  });
});

/**
 * @description - This route is used to delete job details based on the id
 * @param - id
 * @method - DELETE
 * @throws - 404 if id not found
 * @throws - 500 if error writing file
 * @throws - 200 if data deleted successfully
 */
jobRouter.delete("/deletejob/:id", (req, res) => {
  const idToDelete = parseInt(req.params.id);
  const index = jobData.findIndex((myJob) => myJob.id === idToDelete);
  if (index === -1) {
    res.status(404).send(`Job with id ${idToDelete} not found!`);
    return;
  }
  jobData.splice(index, 1);
  fs.writeFile("./jobs.json", JSON.stringify(jobData), (err) => {
    if (err) {
      res.status(500).send("Error writing file");
      return;
    }
    res.status(200).send("Deleted data succesfully");
  });
});

jobRouter.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const response = jobData[id];
  if (response) {
    res.status(200).send(response);
  } else {
    res.status(404).send("No matching id found!");
  }
});

/**
 * @description - This route is used to get all the job details
 * @method - GET
 * @returns - job details
 */
jobRouter.get("/", (req, res) => {
  res.status(200).send(jobData);
});

module.exports = jobRouter;
