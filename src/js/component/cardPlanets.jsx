import React, {useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = ({nombre, terreno, id}) => {
  const {actions} = useContext(Context)
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
			<div className="card d-flex mx-3 my-3 bg-warning" style={{width: "18rem", height:"28rem"}}>
  <img src={"https://starwars-visualguide.com/assets/img/planets/"+(id)+".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <p className="card-title">{terreno}</p>
    
    <Link to={"/viewPlanets/"+id} className="btn btn-primary">Detalles de planeta:{id}</Link>
    <button className="btn text-danger" onClick={()=>actions.agregarFavorito(nombre)}><i className="fa fa-heart"> </i></button>
  </div>
</div>
	);
};