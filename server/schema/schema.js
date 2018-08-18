const graphql = require('graphql');
const book = require("../../server/book.json");
const _ = require('lodash');


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const BookType = new GraphQLObjectType(
    {
        name: 'Book',
        fields: () => ({
            id: {type: GraphQLString},
            name: {type: GraphQLString},
            genre: {type: GraphQLString}
        })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        book:{
            type: BookType,
            args: {id:{type: GraphQLString}},
            resolve(parent, args){
                //code to get data from db
                console.log(parent);
                return _.find(book, {id:args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});