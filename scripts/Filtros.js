class Filtros extends React.Component {
    state={
        countries: [
            { value: -1, name: "Todos los paises" },
            { value: "Argentina", name: "Argentina" },
            { value: "Brasil", name: 'Brasil' },
            { value: "Chile", name: 'Chile' },
            { value: "Colombia", name: "Colombia" },
          ],
          prices: [
            { value: -1, name: "Todos los precios" },
            { value: 1, name: "$" },
            { value: 2, name: "$$" },
            { value: 3, name: "$$$" },
            { value: 4, name: "$$$$" },
          ],
          sizes: [
            { value: -1, name: "Todos los tamaños" },
            { value: 1, name: "Hotel Pequeño" },
            { value: 2, name: "Hotel Mediano" },
            { value: 3, name: "Hotel Grande" },
          ],
    };

    getInitialDate = e =>{
        const {value} = e.target;
        this.setState({initialDate : value})
    }
    render(){
        return (
            <div className="filtros">
                <input type = "date" id="InitialDate"/>
                 <input type = "date" id="EndDate" />
                    <select>
                    {this.state.countries.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.name}
                        </option>
                      );
                    })}
                    </select>

                    <select>
                 {this.state.prices.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.name}
                        </option>
                      );
                    })}
                    </select>
                    
                    <select>
                 {this.state.sizes.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.name}
                        </option>
                      );
                    })}
                    </select>
            </div>
        )
    }
}
