class Hoteles extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hoteles: hotelsData };
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange = (event) =>{
          const value = event.target.value;
          const name = event.target.name;

          var bed = 0;
          if (value == 1)
             bed = 10;
          else if (value == -1)
             bed = 0
          else 
           bed = 20; 


          if(name == "countries"){
              this.setState({
                  hoteles:
                  value != "-1" ? 
                  hotelsData.filter(item => item.country == value):
                  hotelsData.filter(item => item.country != value)
                })
          }
          else if(name == "prices"){
              console.log(value)
            this.setState({ 
                hoteles:
                value != "-1" ? 
                hotelsData.filter(item => item.price == value):
                hotelsData.filter(item => item.price != value)
              })
        }
        else if(name == "sizes"){
            console.log(bed)
          this.setState({ 
              hoteles:
              value != "-1" ? 
                value == "1" || value == "2" ?
                hotelsData.filter(item => item.rooms <= bed):
                hotelsData.filter(item => item.rooms > bed):
              hotelsData.filter(item => item.rooms != bed)
            })
      }
      }
    render(){
        const hotelComponents = this.state.hoteles.map((hotel, index) => (
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
            <Header />
            <Filtros handleChange={this.handleChange}/>
            <div className="ui unstackable items hoteles">{hotelComponents}</div>
        </div>
        );
    }
}
