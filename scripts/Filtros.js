class Filtros extends React.Component {
    state={

    };
    render(){
        return (
            <div>

            <div className="filtros">
                <input
                type = "date"
                // value={this.state.username}
                // onChange={this.updateInput}
                />
                 <input
                type = "date"
                />
                <select>
                    <option>New York </option>
                    <option>Bucarest</option>
                    <option>Madrid</option>
                </select>
                <select>
                    <option>$ </option>
                    <option>$$</option>
                    <option>$$$</option>
                    <option>$$$$</option>
                </select>
                <select>
                    <option>Hotel pequeño</option>
                    <option>Hotel mediano</option>
                    <option>Hotel grande</option>
                </select>
            </div>
        </div>
        )
    }
}
