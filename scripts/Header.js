class Header extends React.Component {
    state={

    };
    render(){
        const {initialDate, endDate} = this.props;
        return (
            <div className="header">
                <h3>Hoteles  </h3>
                <span>Desde <b>{initialDate}</b> hasta <b>{endDate}</b></span>

            </div>
        )
    }
}
