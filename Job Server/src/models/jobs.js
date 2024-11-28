const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  contactEmail: {
    type: String,
  },
  contactPhone: {
    type: String,
  }
}, { _id : false });

const jobData = new mongoose.Schema({
    id: {
        type: String,
    },
    title: {
        type: String,
    },
    type: {
        type: String,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    salary: {
        type: String,
    },
    company: {
        type: companySchema
      }
});


const jobListingData = mongoose.model('jobs', jobData);

module.exports = jobListingData;
