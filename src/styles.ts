import styled, { createGlobalStyle } from 'styled-components'
export const cores = {
  branco: '#fff',
  preto: '#000',
  cinza: '#eee',
  vermelho: '#EC3131',
  amareloClaro: '#FCFFA6',
  laranjaClaro: '#FFF8F2'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }
  body{
    background-color: ${cores.laranjaClaro};
    color: ${cores.vermelho};
  }
`
export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
`