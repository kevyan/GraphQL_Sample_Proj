const graphql = require('graphql');
const express = require('express');
const schema = require('./schema/schema');
const graphqlhttp = require('express-graphql');
const app = express();

app.listen(4000,() =>{
    console.log('now listening on 4000');
});

app.use('/graphql', graphqlhttp(
    {
        schema,
        graphiql: true
    }
));