const AWS = require('aws-sdk');

// Set up AWS configuration
AWS.config.update({
    accessKeyId: 'AKIAUYPP6YV4XQS665GF',
    secretAccessKey: '9TND7wbQ8GCMeAFSOvPNrz0+k1gGdrZHJ2IHMizT',
    region: 'ap-south-1' // Change to your AWS region
});

// initialize s3
const s3 = new AWS.S3();

module.exports = {s3};