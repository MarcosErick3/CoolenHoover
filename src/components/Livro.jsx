import React from 'react';
import '../styles/componets/secao.sass';

function Livro({ titulo, descricao, imagem, corSecao, corTitulo, alinhamentoTitulo }) {
    const sectionStyle = {
        backgroundColor: corSecao,
        padding: '30px',
        borderRadius: '10px'
    };

    const tituloStyle = {
        color: corTitulo,
        textAlign: alinhamentoTitulo
    };

    return (
        <div className="section" style={sectionStyle}>
            <h2 className="titulo" style={tituloStyle}>{titulo}</h2>
            <div className="livro">
                <div className="paragrafo">
                    <p>{descricao}</p>
                </div>
                <div className="foto">
                    <img src={imagem} alt={`Capa do livro ${titulo}`} />
                </div>
            </div>
        </div>
    );
}

export default Livro;
