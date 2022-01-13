'use strict';
const { saveToDB } = require('./utils')
module.exports.hello = async (event) => {
  const passedParam = event.pathParameters.param;
  saveToDB(passedParam);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: passedParam,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.cronTest = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'cronTest works!',
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

