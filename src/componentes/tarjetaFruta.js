import React from "react";
import ReactDOM from "react-dom";

class TarjetaFruta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidad: 0
        };
        this.agregar = this.agregar.bind(this);
        this.quitar = this.quitar.bind(this);
        this.limpiar = this.limpiar.bind(this);
    }

    agregar() {
        this.setState({ cantidad: this.state.cantidad + 1 });
    }

    quitar() {
        this.setState({ cantidad: this.state.cantidad - 1 });
    }

    limpiar() {
        this.setState({ cantidad: 0 });
    }

    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <div>Cantidad {this.state.cantidad}</div>
                <button onClick={this.agregar}>+</button>
                <button onClick={this.quitar}>-</button>
                <button onClick={this.limpiar}>Limpiar</button>
                <hr />
                <p>$ {this.props.price}</p>
                <p>Total: $ {this.props.price * this.state.cantidad}</p>
            </div>
        );
    }
}

const App = () => (
    <div>
        <TarjetaFruta name="Sandia" price={2.00} />
        <TarjetaFruta name="Naranja" price={3.00} />
        <TarjetaFruta name="Kiwi" price={4.00} />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));