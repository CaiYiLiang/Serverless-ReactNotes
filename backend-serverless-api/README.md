# Serverless Demo API
---


#### Usage

To use this repo locally you need to have the [Serverless framework](https://serverless.com) installed.

``` 
$ npm install serverless -g
```

Clone this repo.

``` 
$ git clone 
```

Test API on local.

``` 
Create
$ serverless webpack invoke --function create --path mocks/create-event.json

GET
$ serverless webpack invoke --function get --path mocks/get-event.json

LIST
$ serverless webpack invoke --function list --path mocks/list-event.json

UPDATE
$ serverless webpack invoke --function update --path mocks/update-event.json

DELETE
$ serverless webpack invoke --function delete --path mocks/delete-event.json
```

Deploy to your AWS account.

``` 
$ serverless deploy
```



