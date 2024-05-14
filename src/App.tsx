import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import './App.css';
import ProductList from "./Props/ProductList";
import dataJson from './Data/dataGlasses.json';
import ExerciseCarStore from "./Props/ExerciseCarStore/ExerciseCarStore";

function App() {
  return (
      <div className='app'>
          <ExerciseCarStore />
      </div>


    // <div className="container-fluid">
    //   <div className='row'>
    //       <div className='col-4'>
    //           <div className="nav flex-column nav-pills justify-content-center" id="v-pills-tab" role="tablist"
    //                aria-orientation="vertical" style={{minHeight: 800}}>
    //               <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
    //                       data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
    //                       aria-selected="true">Home
    //               </button>
    //               <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
    //                       data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
    //                       aria-selected="false">Shop
    //               </button>
    //           </div>
    //       </div>
    //       <div className='productList col-8'>
    //          <div className='tab-content' id="v-pills-tabContent">
    //              <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
    //                   aria-labelledby="v-pills-home-tab">
    //                  <ProductListCar arrProduct = {dataJson}/>
    //              </div>
    //              <div className="tab-pane fade" id="shop" role="tabpanel"
    //                   aria-labelledby="v-pills-home-tab">
    //                  Shop
    //              </div>
    //          </div>
    //       </div>
    //   </div>
    //
    // </div>
  );
}

export default App;
