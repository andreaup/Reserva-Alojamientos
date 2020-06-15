class Hoteles extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hoteles: hotelsData };
      }
    render(){
        const productComponents = this.state.hoteles.map((product, index) => (
            <Hotel
            key={index}
            id={product.slug}
            name={product.name}
            photo={product.photo}
            description={product.description}
            rooms ={product.rooms}
            city={product.city}
            country={product.country}
            price={product.price}
            />
        ));
        return <div className="ui unstackable items hoteles">{productComponents}</div>;
    }
}
