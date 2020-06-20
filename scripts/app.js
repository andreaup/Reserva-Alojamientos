
class App extends React.Component {
    render(){
        return (
            <div className="App">
            <Header />
            <Filtros />
            <Hoteles />
            </div>
        );
    }
}
  
  const rootElement = document.getElementById("app");
  ReactDOM.render(<App />, rootElement);
  
