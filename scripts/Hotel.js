function Hotel(props){
        return (
            <div className="item">
              <div className="image">
                <img src={props.photo} alt="hotel" />
              </div>
                <div className="description">
                    <p><b>{props.name}</b></p>
                    <p>{props.description}</p>
                    <p><i className="fa fa-map-marker"></i> {props.city}, {props.country}</p>
                    <div className="bothElements" >
                    <p className="percentage"><i className="fa fa-bed" ></i> {props.rooms} Habitaciones</p>
                    <p className="percentage"><i className="fa fa-usd" ></i> {props.price} </p>
                    </div>
                </div>
                <div>
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
