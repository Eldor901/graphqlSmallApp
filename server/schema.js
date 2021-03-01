import axios from 'axios'
import {GraphQlObject, GraphQLInt, GraphQLStringm, GraphQLBoolean, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema}from 'graphql'


const LauchType = new GraphQLObjectType({
    name: 'Launch',
    fields: ()=> ({
        flight_number: {type: GraphQLInt},
        mission_name: {type: GraphQLString},
        launch_year: {type: GraphQLString},
        lanch_date_local: {type: GraphQLString},
        success: {type: GraphQLBoolean},
        rocket: {type: RocketType}
    })
})  


//Rocket Type
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: ()=> ({
        rocket_id: {type: GraphQLString},
        mission_name: {type: GraphQLString},
        racket_type: {type: GraphQLString},
        rocket_name: {type: GraphQLString},
    })

})

//Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        launches: {
            type: new GraphQLList(LauchType),
            async resolve(parent, args) {
               let resp =  await axios.get(`https://api.spacexdata.com/v3/launches`);
               return resp.data;
            }
        },
        launch: {
            type: LauchType,
            args: {
                flight_number: {type: GraphQLInt}
            },
            async resolve(parent, args){
                let resp = await axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                return resp.data;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})