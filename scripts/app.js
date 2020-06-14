
function App() {
    return (
        <div className="App">
        <h1>Prueba Hoteles</h1>
        <Header />
        <Filtros />
        <Hoteles />

        </div>
    );
}

const Header = () =>{
    return(
        <h1>Header</h1>
    )
}

const Filtros = () =>{
    return(
        <h1>Filtros</h1>
    )
    }

const Hoteles = () =>{
    return(
        <h1>Hoteles</h1>
    )
}
  
  const rootElement = document.getElementById("app");
  ReactDOM.render(<App />, rootElement);
  
