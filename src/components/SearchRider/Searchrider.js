import React from 'react';
import fakeData from '../../fakeData/data.json';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Searchrider.css';

const Searchrider = (props) => {
    const {type} = props;
    return (
        <div>
               <div className="card w-100 input-group input-group-sm mb-3">
        <div className="card-body">
         
         <h3>{type} Service</h3>
         <span class="input-group-text" id="inputGroup-sizing-sm">Pick from:</span>
       <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
       <br/>
       <span class="input-group-text" id="inputGroup-sizing-sm">Pick To:</span>
       
       <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
      <br/>

       <button class="btn btn-primary">Search</button>

  </div>
</div>

<div class="container-fluid">
  <header>
    <h4 class="display-4 mb-4 text-center">March 2021</h4>
    <div class="row d-none d-sm-flex p-1 bg-dark text-white">
      <h5 class="col-sm p-1 text-center">Sunday</h5>
      <h5 class="col-sm p-1 text-center">Monday</h5>
      <h5 class="col-sm p-1 text-center">Tuesday</h5>
      <h5 class="col-sm p-1 text-center">Wednesday</h5>
      <h5 class="col-sm p-1 text-center">Thursday</h5>
      <h5 class="col-sm p-1 text-center">Friday</h5>
      <h5 class="col-sm p-1 text-center">Saturday</h5>
    </div>
  </header>
  
  </div>
</div>



      
    );
};


export default Searchrider;