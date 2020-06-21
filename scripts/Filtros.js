class Filtros extends React.Component {
    state={
        initialDate: "",
        countries: [
            { value: -1, name: "Todos los paises" },
            { value: "Argentina", name: "Argentina" },
            { value: "Brasil", name: 'Brasil' },
            { value: "Chile", name: 'Chile' },
            { value: "Uruguay", name: "Uruguay" },
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

    // formatDate = (date) =>{
    //     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    //     let d = new Date(date).toLocaleString("es-CO", options);
    //     return (
    //       <span>
    //         {d}
    //       </span>
    //     )
    //   }



    getInitialDate = e =>{
        const {value} = e.target;
        this.setState({initialDate : value})
        console.log(value)
    }
    render(){
        return (
            <div className="filtros">
                <input
                type = "date" 
                id="InitialDate"
                onChange={this.getInitialDate}
                />
                 <input
                 type = "date"
                 id="EndDate" />
                    
                    <select 
                    name = "countries"
                    onChange ={this.props.handleChange}>
                    {this.state.countries.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.name}
                        </option>
                      );
                    })}
                    </select>

                    <select
                    name = "prices"
                    onChange = {this.props.handleChange}>
                    {this.state.prices.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.name}
                        </option>
                      );
                    })}
                    </select>
                    
                    <select
                    name = "sizes"
                    onChange = {this.props.handleChange}>
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
