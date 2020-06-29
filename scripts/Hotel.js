function Hotel(props){

  function Icons({ icon, iconPrice }) {
    let content = [];
      for (let i = 0; i < iconPrice; i++) {
        content.push(
          <i className={"fa " + icon} key={"icon-" + i}></i>
        );
      }
    return content;
  }
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
                      <p className="percentage"><Icons icon="fa-usd" iconPrice={props.price} /></p>
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
            </div>
        );
}