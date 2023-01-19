import React, {useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicle = ({nombre, modelo, id}) => {
  const {actions} = useContext(Context)
//   function obtenerInfoDePersonaje(){
//     fetch("https://swapi.dev/api/vehicles/"+id)
// .then(res => res.json())
// .then(data => console.log(data.results))
// .catch(err => console.error(err))
// }

// useEffect(()=>{
// obtenerInfoDePersonaje();
// },[])


	return (
			<div className="card d-flex mx-3 my-3" style={{width: "18rem"}}>
  <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+(id)+".jpg"}
 className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <h6 className="card-title">{modelo}</h6>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <Link to={"/viewVehicles/"+id} className="btn btn-primary">Detalles del vehiculo:{id}</Link>
    <button className="btn text-danger" onClick={()=>actions.agregarFavorito(nombre)}><i className="fa fa-heart"> </i></button>
  </div>
</div>
	);
};