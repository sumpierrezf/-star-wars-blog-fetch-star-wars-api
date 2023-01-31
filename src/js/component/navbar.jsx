import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext.js"
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	const navigate = useNavigate()

	function handleLogout() {
		actions.logout()//cerrar la sesion
		navigate("/")//usamos navigate para redireccionar

	}

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://w7.pngwing.com/pngs/885/792/png-transparent-chewbacca-han-solo-star-wars-rebel-alliance-logo-star-wars-purple-text-star-wars-episode-vii-thumbnail.png"  className="card-img-top " alt="..."style={{width: "100px"}}/>
			</Link>
			<div className="ml-auto p-3">
				<div className="btn-group">
				{store.auth === false ? <Link to={"/form"} className="btn btn-primary me-1">Login</Link> : null}
				{store.auth === true? <button className="btn btn-primary me-1" onClick={handleLogout}>Logout</button> : null}
				<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Favorites
				</button>
				<ul className="dropdown-menu">
					{store.favoritos.map((item)=>(<li key={item}>{item}<button className="btn" onClick={() => actions.borrarFavorito(item)}><i className="fas fa-trash-alt" /></button></li>))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
