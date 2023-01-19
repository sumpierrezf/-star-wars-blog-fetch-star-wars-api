import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext.js"

export const Navbar = () => {
	const {store} = useContext(Context)
	console.log(store.favoritos)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				 <img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png"  className="card-img-top " alt="..."style={{width: "218px"}}/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">			
					<div className="btn-group">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						{/* <li><Link to="/" className="dropdown-item">Action</Link></li>
						<li><Link to="/" className="dropdown-item">Another action</Link></li>
						<li><Link to="/" className="dropdown-item">Something else here</Link></li>
						<li><Link to="/" className="dropdown-item">Separated link</Link></li> */}
					</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
