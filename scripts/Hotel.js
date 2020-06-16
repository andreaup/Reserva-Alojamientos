function Hotel(props){
        return (
            <div className="item">
              <div className="image">
                <img src={props.photo} alt="hotel" />
              </div>
                <div className="description">
                    <p><b>{props.name}</b></p>
                    <p>{props.description}</p>
                    <p>{props.city}, {props.country}</p>
                    <p>{props.rooms} Habitaciones</p>
                    <p>{props.price} : rango precio </p>
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
