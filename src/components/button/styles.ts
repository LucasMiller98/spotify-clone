import styled from 'styled-components'

export const Button = styled.button `
  color: #2941ab;
  background-color: #1ed760;
  padding: 14px 32px;
  border: 0;
  cursor: pointer;
  font-weight: 700;
  margin-top: 2rem;
  border-radius: 100px;
  font-size: 14px;
  transition: all ease .3s;

  &.blueColor {
    background: #1877f2;
    color: #f1f1f1;
    padding: 14px 32px;
  }

  &.greenDarkRegister {
    background: #1ed760;
    color: #131313;
    padding: 1.5rem 4rem;
    font-size: 18px;
    font-weight: 700;
    transition: all ease-out .3s;
  }

  &.greenDarkLogin {
    background-color: #15883e;
    color: #f1f1f1;
  }

  &:hover {
    filter: brightness(.9);
  }
`