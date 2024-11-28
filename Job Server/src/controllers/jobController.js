const jobListingData = require('../models/jobs.js');

async function getJobsAPI(req, res) {
    try {
        console.log("reached getter of job");
        // Fetch the limit from the query string, default to 10 if not provided
        const limit = parseInt(req.query._limit) || 10;

        // Fetch jobs from the database with the specified limit
        let jobs = {};
        if (limit === 3)
            jobs = await jobListingData.find().limit(limit);
        else
            jobs = await jobListingData.find();

        res.json(jobs);
    } catch (err) {
        console.error('Error fetching jobs:', err);
        res.status(500).send('Server Error');
    }
}
async function getJobDetailAPI(req, res) {
    try {
        const _id = req.query.id;
        console.log(_id);
        let jobs = await jobListingData.findOne({ _id: _id });
        res.json(jobs);
    } catch (err) {
        console.error('Error fetching jobs:', err);
        res.status(500).send('Server Error');
    }
}

async function deleteJobsAPI(req, res) {
    try {
        const __id = req.query.id;
        const result = await jobListingData.deleteOne({ _id: __id });
        res.json(result);
    } catch (err) {
        console.error('Error deleting job:', err);
        res.status(500).send('Server Error');
    }
}

async function addJobsAPI(req, res) {
    try {
        const job = await jobListingData.create(req.body);
        res.json({ done: true, job });
    } catch (err) {
        console.error('Error adding job:', err);
        res.status(500).send('Server Error');
    }
}

async function editJobsAPI(req, res) {
    const pid = req.body.id;
    const updateData = req.body;     
    try {
        // Update the job using the id and the rest of the request body
        const result = await jobListingData.findByIdAndUpdate(
            {_id : pid},
            { $set: updateData },
            { new: true, useFindAndModify: false }
        );

        if (!result) {
            return res.status(404).json({ message: 'Job not found' });
        }

        res.json({ done: true, job: result });
    } catch (err) {
        console.error('Error updating job:', err);
        res.status(500).send('Server Error');
    }
}




module.exports = {
    getJobsAPI,
    deleteJobsAPI,
    addJobsAPI,
    getJobDetailAPI,
    editJobsAPI
};
