import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import "../../styles/home.css";



export const ViewCharacters = () => {
  const params = useParams();
  const [detallePersonaje, setDetallePersonaje] = useState([]);

  
  function obtenerDetalleDePersonaje(){
    fetch("https://swapi.dev/api/people/"+params.theid)
    .then(res => res.json())
    .then(data => setDetallePersonaje(data))
    .catch(err => console.error(err))
}
  useEffect(()=>{
    obtenerDetalleDePersonaje();
},[])
  
  return(
  <div className="overflow-x-scroll">
    <div className="card mb-3 border-0">
      <div className="row g-0">
        <div className="col-md">
          <img src="..." style={{ width:"800px", height: "600px" }} className="img-fluid rounded-start"  alt="..."/>
        </div>
        <div className="col-md">
          <div className="card-body">
            <h5 className="card-title">{detallePersonaje.name}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
  </div>
  <div>
  <hr style={{ height: "5px",color: "red" }} />
  </div>
  <div className="tabla">
  <p>TABLA o que?...</p>
  </div>
</div>
)};
