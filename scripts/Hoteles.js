class Hoteles extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          hoteles: hotelsData,
          initialDate: "",
          endDate :"",
          country : "-1",
          price : -1,
          rooms : -1,
          countryName:"Todos los paises",
          priceName: "Todos los precios",
          sizeName: "Todos los tamaños"
        };
      }

      handleChange = (event) =>{
          const value = event.target.value;
          const name = event.target.name;
          const text = event.target.options == undefined ? "":event.target.options[event.target.selectedIndex].innerText;
          if(name == "InitialDate"){
            this.setState({initialDate : this.convertDate(value)})
          }
          if(name == "EndDate"){
            this.setState({endDate : this.convertDate(value)})
          }
          if(name == "countries"){
             this.setState({country : value});
             this.setState({countryName : text});
           }

          if(name == "prices"){
            this.setState({price : value});
            this.setState({priceName : text});
          }
          if(name == "sizes"){
            this.setState({rooms : value});
            this.setState({sizeName : text});
          }
      }

      convertDate = (date) =>{
        var d = String(date).replace(/-/ig, '/');
        return String(new Date(d).valueOf());
      }

      render(){
        const message =  `No hay resultados para la búsqueda realizada ... 
        Fecha inicial ${this.state.initialDate} , Fecha inicial ${this.state.endDate}, 
        País: ${this.state.countryName} ,Precio:  ${this.state.priceName} y Tamaño: ${this.state.sizeName}`;
        //console.log(moment().locale('es').format('dddd, MMMM DD YYYY'));
        
      
      var bed = 0;
      if (this.state.rooms == 1)
         bed = 10;
      else 
        bed = 20;

        const hotelComponents = this.state.hoteles
        .filter(item =>
          (this.state.country == "-1" || item.country == this.state.country) &&
          (this.state.price == -1 || item.price == this.state.price ) &&
          (((this.state.rooms == "1" || this.state.rooms == "2" ) && (item.rooms <= bed))
          || (this.state.rooms == "3" && item.rooms > bed)
          || this.state.rooms == -1) &&
          ( this.state.initialDate == "" || item.availabilityFrom < this.state.initialDate) &&
          ( this.state.endDate == "" || item.availabilityTo > this.state.endDate)
          )
        .map((hotel, index) => (
            <Hotel
            key={index}
            id={hotel.slug}
            name={hotel.name}
            photo={hotel.photo}
            description={hotel.description}
            rooms ={hotel.rooms}
            city={hotel.city}
            country={hotel.country}
            price={hotel.price}
            />
        ));
        return (
          <div>
            <Header
              initialDate= {this.state.initialDate}
              endDate= {this.state.endDate}
            />
            <Filtros handleChange={this.handleChange}/>
            <div className="ui unstackable items hoteles">
              {hotelComponents.length == 0 ? message:hotelComponents}

            </div>
        </div>
        );
    }
}
