const AWS = require('aws-sdk');

const s3AccessKeyId = process.env.AWS_S3_ACCESS_KEY_ID;
const s3SecretAccessKey = process.env.AWS_S3_SECRET_ACCESS_KEY;
const s3Region = process.env.AWS_S3_REGION;
console.log(s3AccessKeyId);

// Set up AWS configuration
AWS.config.update({
    accessKeyId: s3AccessKeyId,
    secretAccessKey: s3SecretAccessKey,
    region: s3Region // Change to your AWS region
});

// initialize s3
const s3 = new AWS.S3();

module.exports = {s3};