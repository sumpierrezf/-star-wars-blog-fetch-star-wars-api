import React, {useEffect} from "react";
import { Link } from "react-router-dom";

export const Planets = ({nombre, terreno, id}) => {

  //   function obtenerInfoDePlanetas(){
  //       fetch("https://swapi.dev/api/planets/"+id)
	// 	.then(res => res.json())
	// 	.then(data => console.log(data.results))
	// 	.catch(err => console.error(err))
  //   }
  //   useEffect(()=>{
	// 	obtenerInfoDePlanetas();
	// },[])

	return (
			<div className="card d-flex mx-3" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <h6 className="card-title">{terreno}</h6>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <Link to={"/viewPlanets/"+id} className="btn btn-primary">Detalles de planeta:{id}</Link>
  </div>
</div>
	);
};