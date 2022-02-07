import { useState } from 'react';

function Card() {

    const [valor, setValor] = useState(0);

    function Adicionar() {
        setValor(valor + 1);
    }

    function Remover() {
        setValor(valor - 1);
    }

    return (
        <div className="card">
            <div className="card-header">
                Meu primeiro card
            </div>
            <div className="card-body">
                <button
                    type="button"
                    className="btn btn-success"
                    onclick={Adicionar}
                >
                    Adicionar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onclick={Remover}
                >
                    Remover
                </button>
                <p>{valor}</p>
            </div>
        </div>
    );
}

export default Card;