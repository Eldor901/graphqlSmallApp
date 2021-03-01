import React from 'react'
import {  useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { loader } from 'graphql.macro';
const  GetLaunch = loader('./Launch.graphql');



const Launch = () => {
    let {flight_number} = useParams();
  
    
    const {loading, error, data} = useQuery(GetLaunch, {
        variables: {
            flight_number: parseInt(flight_number)
        }
    });


    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
  
        return (
        <div class="text-center">
            <h1>{data.launch.mission_name} </h1>
            {data.launch.launch_year}
        </div>
    )
}

export default Launch
