function Hotel(props){
        return (
            <div className="item">
              <div className="image">
                <img src={props.photo} alt="hotel" />
              </div>
                <div className="description">
                    <p><b>{props.name}</b></p>
                    <p>{props.description}</p>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i> {props.city}, {props.country}</p>
                    
                    <div className="juntos" >
                    <p className="porcentaje"><i className="fa fa-bed" aria-hidden="true"></i> {props.rooms} Habitaciones</p>
                    <p className="porcentaje"><i className="fa fa-usd" aria-hidden="true"></i> {props.price} </p>
                    </div>
                    <button
                        id="btn"
                        className="btn"
                        type="submit"
                    >
                    RESERVAR
                    </button>
                </div>
            </div>
          );
        
    }
