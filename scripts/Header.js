class Header extends React.Component {
    state={

    };
    render(){
        const {initialDate, endDate} = this.props;
       
          console.log("gfh",initialDate)
        return (
            <div className="header">
                <h3>Hoteles  </h3>
                {/* <h4>Desde el martes, 1 de enero de 2019 hasta el miércoles, 2 de enero de 2019 {endDate}</h4> */}
                <h4>Desde el {initialDate} hasta el {endDate} </h4>

            </div>
        )
    }
}
