
function App() {
    return (
        <div className="App">
        <Header />
        <Filtros />
        <Hoteles />

        </div>
    );
}

const Header = () =>{
    return(
        <div className="header">
        <h2>Hoteles</h2>
        <h4>Desde el martes, 1 de enero de 2019 hasta el miércoles, 2 de enero de 2019</h4>
        </div>
    )
}

const Filtros = () =>{
    return(
        <div className="filtros">
        <h3>Filtros</h3>
        </div>
    )
    }

const Hoteles = () =>{
    return(
        <div className="hoteles">
            <h3>Hoteles</h3>
        </div>
    )
}
  
  const rootElement = document.getElementById("app");
  ReactDOM.render(<App />, rootElement);
  
