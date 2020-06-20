class Filtros extends React.Component {
    state={
        initialDate: "",
        endDate: "",
        price: "",
        category: ""
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
                <select id="pais" onChange={this.getInitialDate}>
                    <option value= "allCountry">Todos los países </option>
                    <option value= "argentina">Argentina</option>
                    <option value= "brasil">Brasil</option>
                    <option value= "chile">Chile</option>
                    <option value= "uruguay">Uruguay</option>
                </select>
                <select id ="precio">
                    <option value = "anyPrice">Cualquier precio</option>
                    <option value = "1">$ </option>
                    <option value = "2">$$</option>
                    <option value = "3">$$$</option>
                    <option value = "4">$$$$</option>
                </select>
                <select id ="categoria">
                    <option value = "anySize">Cualquier tamaño</option>
                    <option value = "hotelPequeño">Hotel pequeño</option>
                    <option value = "hotelMediano">Hotel mediano</option>
                    <option value = "hotelGrande">Hotel grande</option>
                </select>
            </div>
        )
    }
}
