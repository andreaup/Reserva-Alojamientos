function Hotel(props) {
  function Icons({ icon, iconPrice }) {
    let content = [];
    const bucle = 4-iconPrice;
    for (let i = 0; i < iconPrice; i++) {
      content.push(<span key={"span-" + i} className="fa-stack size"><i className="fa fa-square fa-stack-2x activeColor"></i><i className={icon} key={"icon-" + i}></i></span>);
    }
    for (let i = 0; i < bucle; i++) {
      content.push(<span key={"fake-span-" + i} className="fa-stack size"><i className="fa fa-square fa-stack-2x inactiveColor"></i><i className={icon} key={"fake-icon-" + i}></i></span>);
    }
    return content;
  }
  return (
    <div className="item">
      <div className="image">
        <img src={props.photo} alt="hotel" />
      </div>
      <div className="description">
        <p>
          <b>{props.name}</b>
        </p>
        <p>{props.description}</p>
        <p>
          <i className="fa fa-map-marker"></i> {props.city}, {props.country}
        </p>
        <div className="bothElements">
          <p className="percentage">
            <i className="fa fa-bed"></i> {props.rooms} Habitaciones
          </p>
          <p className="percentage">
            <Icons icon="fa fa-usd fa-stack-1x fa-inverse" iconPrice={props.price} />
          </p>
        </div>
        <div>
          <button id="btn" className="btn" type="submit">
            RESERVAR
          </button>
        </div>
      </div>
    </div>
  );
}
