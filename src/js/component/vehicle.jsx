import React, {useEffect} from "react";
import { Link } from "react-router-dom";

export const Vehicle = ({nombre, modelo, id}) => {

  
  function obtenerInfoDePersonaje(){
    fetch("https://swapi.dev/api/vehicles/"+id)
.then(res => res.json())
.then(data => console.log(data.results))
.catch(err => console.error(err))
}

useEffect(()=>{
obtenerInfoDePersonaje();
},[])


	return (
			<div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <h6 className="card-title">{modelo}</h6>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <Link to={"/viewVehicles/"+id} className="btn btn-primary">Detalles del vehiculo:{id}</Link>
  </div>
</div>
	);
};