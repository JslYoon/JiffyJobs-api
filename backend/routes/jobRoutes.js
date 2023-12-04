import express from "express";
import { 
        getJob, 
        deleteJobsByID, 
        postJobs, 
        updateJobs,
        getJobs,
        filterJobs,
        searchJobs
} from "../controllers/jobController.js";

const router = express.Router();

// routes for the job board

    // get all jobs
    router.get("/get", getJobs);

    // get job by id
    router.get("/:id", getJob);

    // delete job by id
    router.delete("/:id", deleteJobsByID);

    // post a new job
    router.post("/create", postJobs); // changed

    // update a job
    router.put("/:id", updateJobs);

    // find jobs by category.
    // if a filter category is not selected, it should send an asterisk (*) as its parameters.
    // if multiple items for category or date_range, it should be separated by comma (",") with no space
    router.get("/filter/:location/:location_metric/:category/:job_type/:date_range", filterJobs);


    router.get("/search/:searchContent", searchJobs);

export default router;