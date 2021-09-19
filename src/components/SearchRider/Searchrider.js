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
         <span class="input-group-text" id="inputGroup-sizing-sm">Pick From:</span>
       <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
       <br/>
       <span class="input-group-text" id="inputGroup-sizing-sm">Pick To:</span>
       
       <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
      <br/>

       <button  class="btn btn-primary">Search</button>

  </div>
</div>

<div class="container-fluid">
  <header>
    <h4 class="display-4 mb-4 text-center">September 2021</h4>
  </header>
  
  </div>
</div>



      
    );
};


export default Searchrider;