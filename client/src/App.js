import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <h1>Info about Spacex</h1>
        </div>
        <Route exact path='/' component={Launches}/>
        <Route exact path='/launch/:flight_number' component={Launch}/>
      </Router>
    </ApolloProvider>
  );
}

export default App;
