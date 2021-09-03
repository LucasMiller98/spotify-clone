import styled from 'styled-components'

const Select = styled.select `
  padding: 14px 44px 14px 14px;
  color: #7f7f7f;
  background-color: #fff;
  border: 2px solid #7f7f7f;
  border-radius: 5px;
  margin-top: .8rem;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;

  &.selectStateOnBlur {
    border: 2px solid #f00;
  }
`

const Options = styled.option `

`
const Label = styled.label `
font-size: 16px;
color: #131313;

font-weight: 500;

display: flex;
justify-content: flex-start;

  &.stronger {
    font-weight: 700;
    font-size: .9rem;
  }
`


const Container = styled.div `

`

export {
  Container,
  Select,
  Options,
  Label
}