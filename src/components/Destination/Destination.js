import React from 'react';
import { useParams } from 'react-router';
import Header from '../Home/Header/Header';
import Map from '../Map/Map';
import Searchrider from '../SearchRider/Searchrider';

const Destination = () => {
    const {type} = useParams();
    return (
        <div className="container">
            <div className="row">
                <Header></Header>
                <div className='col-md-4'>
                    <Searchrider type={type}></Searchrider>
                </div>
                <div className="col-md-8">
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default Destination;