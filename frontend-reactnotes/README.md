# Serverless ReactNotes App

#### Fetures
  - SPA - Single Page application
    - Web apps that load a single HTML page and dynamically update that page as the user interacts with the app.
    - Build with React([Create React App](https://github.com/facebookincubator/create-react-app)) + [React-bootstrap](https://react-bootstrap.github.io/) + [React-Router](https://reacttraining.com/react-router/). 
  - [Amazon Cognito](https://aws.amazon.com/documentation/cognito/)
    - User Singup & Login
    - Identification
  - Call [API Gateway](https://aws.amazon.com/api-gateway/)
    - Creat Notes
    - Read Notes
    - Update Notes
    - Delete Notes
  
#### Usage

To use this repo locally you need to have [Create React App](https://github.com/facebookincubator/create-react-app) installed.

``` 
$ npm install -g create-react-app
```

Clone this repo.

``` 
$ git clone https://github.com/CaiYiLiang/Serverless-ReactNotes.git
```

Run it locally.

``` 
$ npm run start
```

To deploy, replace the following in the [`package.json`](package.json) with your S3 bucket and CloudFront distributions.

```
"deploy": "aws s3 sync build/ s3://notes-app-client"
```

And run.

``` 
$ npm run deploy
```
#### TODO
  - CloudFront
  - Enhance UI 
  - Improve user experience
  - ...
