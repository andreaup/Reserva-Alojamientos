function Hotel(props){
        return (
            <div className="item">
              <div className="image">
                <img src={props.photo} alt="hotel" />
              </div>
                <div className="description">
                    <p>{props.name}</p>
                    <p>{props.description}</p>
                    <p>{props.city}</p>
                </div>
            </div>
          );
        
    }
