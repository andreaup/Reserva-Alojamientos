class Hoteles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoteles: hotelsData,
      initialDate: "",
      endDate: "",
      country: "-1",
      price: -1,
      rooms: -1,
      countryName: "Todos los paises",
      priceName: "Todos los precios",
      sizeName: "Todos los tamaños",
      initialDateFormat: "",
      endDateFormat: "",
    };
  }

  componentDidMount() {
    this.setState({
      initialDate: new Date(
        Math.min.apply(
          null,
          hotelsData.map((e) => new Date(e.availabilityFrom))
        )
      ).toLocaleDateString(),
    });
    this.setState({
      endDate: new Date(
        Math.max.apply(
          null,
          hotelsData.map((e) => new Date(e.availabilityTo))
        )
      ).toLocaleDateString(),
    });
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const text =
      event.target.options == undefined
        ? ""
        : event.target.options[event.target.selectedIndex].innerText;
    if (name == "InitialDate")
      this.setState({ initialDateFormat: moment(value) });

    if (name == "EndDate") this.setState({ endDateFormat: moment(value) });

    if (name == "countries") {
      this.setState({ country: value });
      this.setState({ countryName: text });
    }
    if (name == "prices") {
      this.setState({ price: value });
      this.setState({ priceName: text });
    }
    if (name == "sizes") {
      this.setState({ rooms: value });
      this.setState({ sizeName: text });
    }
  };

  render() {
    const message = `No hay resultados para la búsqueda realizada ... 
      Fecha inicial: ${
        this.state.initialDateFormat == ""
          ? "Seleccione fecha "
          : moment(this.state.initialDateFormat)
              .locale("es")
              .format("dddd, DD MMMM YYYY")
      } ,
      Fecha final: ${
        this.state.endDateFormat == ""
          ? "Seleccione fecha "
          : moment(this.state.endDateFormat)
              .locale("es")
              .format("dddd, DD MMMM YYYY")
      }, 
      País: ${this.state.countryName}, Precio:  ${
      this.state.priceName
    } y Tamaño: ${this.state.sizeName}`;

    var bed = 0;
    if (this.state.rooms == 1) bed = 10;
    else bed = 20;
    const hotelComponents = this.state.hoteles
      .filter(
        (item) =>
          (this.state.country == "-1" || item.country == this.state.country) &&
          (this.state.price == -1 || item.price == this.state.price) &&
          (((this.state.rooms == "1" || this.state.rooms == "2") &&
            item.rooms <= bed) ||
            (this.state.rooms == "3" && item.rooms > bed) ||
            this.state.rooms == -1) &&
          (!this.state.initialDateFormat ||
            moment(
              new Date(new Date(item.availabilityFrom).toLocaleDateString())
            ).isSame(this.state.initialDateFormat) ||
            moment(
              new Date(new Date(item.availabilityFrom).toLocaleDateString())
            ).isBefore(this.state.initialDateFormat)) &&
          (!this.state.endDateFormat ||
            item.availabilityTo > new Date(this.state.endDateFormat).valueOf())
      )
      .map((hotel, index) => (
        <Hotel
          key={index}
          id={hotel.slug}
          name={hotel.name}
          photo={hotel.photo}
          description={hotel.description}
          rooms={hotel.rooms}
          city={hotel.city}
          country={hotel.country}
          price={hotel.price}
        />
      ));
    return (
      <div>
        <Header
          initialDate={
            this.state.initialDateFormat == ""
              ? "Seleccione fecha "
              : moment(this.state.initialDateFormat)
                  .locale("es")
                  .format("dddd, DD MMMM YYYY ")
          }
          endDate={
            this.state.endDateFormat == ""
              ? "Seleccione fecha "
              : moment(this.state.endDateFormat)
                  .locale("es")
                  .format("dddd, DD MMMM YYYY ")
          }
        />
        <Filtros handleChange={this.handleChange} />
        <div className="ui unstackable items hoteles">
          {hotelComponents.length == 0 ? message : hotelComponents}
        </div>
      </div>
    );
  }
}
