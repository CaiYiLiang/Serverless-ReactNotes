export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: 'cherry-bucket'
  },
  apiGateway: {
    URL: 'https://8q8hz0d2y0.execute-api.us-east-2.amazonaws.com/prod',
  },
  cognito: {
    USER_POOL_ID : 'us-east-2_QWENm9xHn',
    APP_CLIENT_ID : '5csmckf0gesndo131e3kaa2bpf',
    REGION: 'us-east-2',
    IDENTITY_POOL_ID: 'us-east-2:16784051-10c4-4ae5-ad1b-9736941c70b4'
  }
};
