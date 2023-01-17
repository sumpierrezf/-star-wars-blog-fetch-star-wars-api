import React, {useEffect, useState} from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters.jsx";
import { Vehicle } from "../component/vehicle.jsx";
import { Planets } from "../component/planets.jsx";



export const Home = () => {
	const[personajes, setPersonajes] = useState([]);
	 const[vehiculos, setVehiculos] = useState([]);
	 const[planetas, setPlanetas] = useState([]);


	function obtenerInfoPersonajes(){
		fetch("https://swapi.dev/api/people/")
		.then(res => res.json())
		.then(data => setPersonajes(data.results))
		.catch(err => console.error(err))

	}
	console.log(personajes);
	
	 function obtenerInfoVehiculos(){
		fetch("https://swapi.dev/api/vehicles/")
		.then(res => res.json())
		.then(data => setVehiculos(data.results))
		.catch(err => console.error(err))
	 }
	 console.log(vehiculos);
	
	 function obtenerInfoPlanetas(){
		fetch("https://swapi.dev/api/planets/")
		.then(res => res.json())
		.then(data => setPlanetas(data.results))
		.catch(err => console.error(err))
	 }
	 console.log(planetas);

	useEffect(()=>{
		obtenerInfoPersonajes();
		obtenerInfoVehiculos();
		obtenerInfoPlanetas()
	},[])


	
	return(
		<div>
			<div className="container text-center">
  				<div className="row row-cols-4">{personajes.map((cadaPersonaje, index)=><Characters key={index} id={index+1} nombre={cadaPersonaje.name} genero={cadaPersonaje.gender}/>)}
				</div>
			</div>
			<div className="container text-center">
				<div className="row row-cols-4">{vehiculos.map((cadaVehiculo, index)=><Vehicle key={index} id={index+1} nombre={cadaVehiculo.name} modelo={cadaVehiculo.model}/>)}
				</div>
			</div>
			<div className="container text-center">
  				<div className="row row-cols-4">{planetas.map((cadaPlaneta, index)=><Planets key={index} id={index+1} nombre={cadaPlaneta.name} terreno={cadaPlaneta.terrain}/>)}
				</div>
			</div>
		</div>
	);
}
