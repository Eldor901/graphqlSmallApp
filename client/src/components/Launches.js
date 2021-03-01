import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { loader } from 'graphql.macro';
const  GetLaunches = loader('./Launches.graphql');


function renderLaunch(launch, index){
    return (
        <div key={index} className="card mb-3">
            <h5 class="card-header">{launch.mission_name}</h5>
            <div className="card-body">
                <h5>flight_Number: {launch.flight_number}</h5>
                <Link to={`/launch/${launch.flight_number}`}  class="btn btn-primary">Go detail</Link>
            </div>
        </div>
    )
}


const Launches = () => {
    const {loading, error, data} = useQuery(GetLaunches);


    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <div >
            <h1 className="display-4 my-3">
                {data.launches.map((el, index) => renderLaunch(el, index))}
            </h1>
        </div>
    )
}

export default Launches
