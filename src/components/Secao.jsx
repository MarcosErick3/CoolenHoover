import React from 'react';
import AnimatedSection from './AnimatedSection';
import Livro from './Livro';
import { livros } from './livros';

function Secao() {
  const secaoCores = [
    '#eedee7',
    '#98c5ce',
    '#c8ddf1'
  ];

  const tituloCores = [
    '#991063',
    '#103b5d',
    '#263952'
  ];

  const alinhamentoTitulos = [
    'left',
    'right',
    'left'
  ];

  return (
    <>
      {livros.map((livro, index) => (
        <AnimatedSection key={livro.id}>
          <Livro
            titulo={livro.titulo}
            descricao={livro.descricao}
            imagem={livro.imagem}
            corSecao={secaoCores[index]}
            corTitulo={tituloCores[index]}
            alinhamentoTitulo={alinhamentoTitulos[index]}
          />
        </AnimatedSection>
      ))}
    </>
  );
}

export default Secao;
