const uuid = require("uuid");
const AWS = require("aws-sdk");

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.saveToDB = (param) => {
    const params = this.createParams(param);

    dynamoDB.put(params, error => {
        if (error) {
            console.log(`Error saving data to DynamoDB ${JSON.stringify(error)}`)
            return Promise.reject(`Error saving data to DynamoDB ${JSON.stringify(error)}`)
        } else {
            return Promise.resolve(params.Item)
        }
    })
}

module.exports.createParams = (param) => {
    const date = JSON.stringify(new Date());
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            id: uuid.v1(),
            test: "This data is saved by serverless",
            param,
            createdAt: date
        }
    }
    return params;
}