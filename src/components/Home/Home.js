import React from 'react';
import Header from './Header/Header';
import './Home.css';
import backGroundImg from '../../Photo/Bg.png'
import fakeData from '../.././fakeData/data.json'
import { useState } from 'react';
import { useEffect } from 'react';
import Counter from './Counter/Counter';

const Home = () => {
    const [cars, setCars] = useState([])
    console.log(cars);
    useEffect(() => {
          setCars(fakeData)
          console.log(setCars)
    },[])
    return (
        <div className="container">
           <div id="backgroundImage" style={{backgroundImage:`url(${backGroundImg})`}}>
                <Header></Header>
                
            <div className="divStyle">
                {
                 
                      cars.map(car => <Counter car={car} key={car.id}></Counter>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;