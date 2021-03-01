import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema';
import cors from 'cors';
const app = express();


//Allow cors
app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
);

const PORT = process.env.PORT || 5000;

  
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
});