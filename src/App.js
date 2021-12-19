import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./Components/Cards/cards";
import Filters from "./Components/Filters/Filters";



function App() {
  let [pageNumber, setPageNumber] = useState(5);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  
  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      
    })()
  }, [api])

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-5">
        Rick & Morty <span className="text-primary">WiKi</span>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          
          <div className="col-8">
            <div className="row"> 
              <Cards results={results}/>
              
            </div>
          </div>

        </div>

      </div>
      
    </div>
  );
}

export default App;