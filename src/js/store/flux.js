const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            personajes: [],
            detallePersonaje: {},
            vehiculos: [],
            detalleVehiculo: {},
            planetas: [],
            detallePlaneta: {},
            favoritos: [],
            auth: false
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            //Funcion de logout
            logout: () => {
                localStorage.removeItem('token');
                setStore({
                    auth: false
                })
            },
            //Aca empieza el fetch a el backend
            login: (userEmail, userPassword) => {
                fetch('https://3000-sumpierrezf-starwarsapi-np12e3ouq3i.ws-us84.gitpod.io/login', {
                        method: 'POST',
                        // mode: "no-cors",
                        // credentials: "include",
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            "email": userEmail,
                            "password": userPassword
                        }) // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        // console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true
                            })
                        }
                        return response.json()
                    })
                    .then((data) => {
                        // console.log(data)
                        if (data.msg === "Bad username or password") {
                            alert(data.msg)
                        }
                        localStorage.setItem("token", data.access_token)
                    })
                    .catch((err) => console.log(err))
            },
            //Aca termina el fetch de enlace al backend

            //Fetch para el registro
            registro: (userEmail, userName, userPassword) => {
                fetch('https://3000-sumpierrezf-starwarsapi-np12e3ouq3i.ws-us84.gitpod.io/user', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "email": userEmail,
                            "user_name": userName,
                            "password": userPassword
                        }) // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true
                            })
                        }
                        return response.json()
                    })
                    // .then((data) => {
                    //     // console.log(data)
                    //     // if (data.msg === "Bad username or password") {
                    //     //     alert(data.msg)
                    //     // }
                    //     localStorage.setItem("token", data.access_token)
                    // })
                    .catch((err) => console.log(err))
            },

            obtenerInfoPersonaje: () => {
                fetch("https://swapi.dev/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({
                        personajes: data.results,
                    }))
                    .catch(err => console.error(err))
            },
            obtenerDetalleDePersonaje: (id) => {
                fetch("https://swapi.dev/api/people/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        detallePersonaje: data
                    }))
                    .catch(err => console.error(err))
            },

            obtenerInfoVehiculo: () => {
                fetch("https://swapi.dev/api/vehicles/")
                    .then(res => res.json())
                    .then(data => setStore({
                        vehiculos: data.results,
                    }))
                    .catch(err => console.error(err))
            },
            obtenerDetalleDeVehiculo: (id) => {
                fetch("https://swapi.dev/api/vehicles/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        detalleVehiculo: data
                    }))
                    .catch(err => console.error(err))
            },

            obtenerInfoPlanetas: () => {
                fetch("https://swapi.dev/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({
                        planetas: data.results,
                    }))
                    .catch(err => console.error(err))
            },
            obtenerDetalleDePlaneta: (id) => {
                fetch("https://swapi.dev/api/planets/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        detallePlaneta: data
                    }))
                    .catch(err => console.error(err))
            },

            agregarFavorito: (favoritos) => {
                // console.log("funciona")
                let store = getStore();
                if (favoritos !== "" && !store.favoritos.includes(favoritos)) //agrega cada item solo una vez a fav.
                    setStore({
                        favoritos: [...store.favoritos, favoritos]
                    })
            },

            borrarFavorito: (favoritos) => {
                //console.log("funciona")
                let store = getStore();
                setStore({
                    favoritos: store.favoritos.filter(fav => fav !== favoritos)
                })
            },

            loadSomeData: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;