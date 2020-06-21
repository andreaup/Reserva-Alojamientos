
class App extends React.Component {
    render(){
        return (
            <div className="App">
            <Hoteles />
            </div>
        );
    }
}
  
  const rootElement = document.getElementById("app");
  ReactDOM.render(<App />, rootElement);
  
