const express = require('express');
const router = express.Router();
const { getJobsAPI, deleteJobsAPI, addJobsAPI, getJobDetailAPI,editJobsAPI} = require('../controllers/jobController.js');

router.get('/get-jobs', getJobsAPI);
router.get('/get-job-detail', getJobDetailAPI);
router.post('/add-jobs', addJobsAPI);
router.delete('/delete-jobs',deleteJobsAPI)
router.put('/edit-jobs',editJobsAPI);

module.exports = router ;