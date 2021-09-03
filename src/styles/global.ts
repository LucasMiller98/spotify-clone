import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, button, input {
  font-family: sans-serif;
  overflow-x: hidden;
}

button, input {
  outline: none;
}

` 