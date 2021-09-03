import styled from 'styled-components'

export const Page = styled.div `
  display: flex;
  justify-content: center;
`

export const Container = styled.div `
  width: 37%;
  text-align: center;
  padding-bottom: 10rem;
`

export const Header = styled.header `
  display: flex;
  align-items: center; 
  justify-content: center;
  flex-direction: column;
`

export const RegisterWithFacebook = styled.div `
  width: 100%;

  button {
    font-weight: 900;
  }
`

export const Title = styled.h2 `
  font-size: 32px;
  font-weight: 700;
`

export const Space = styled.div `
  height: 2rem; 
`

export const Separator = styled.div `
  font-size: 20px;
  color: #7f7f7f;

  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: #7f7f7f;
    margin-right: 1rem;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #7f7f7f;
    margin-left: 1rem;
  }
`

export const Form = styled.form `

`

export const ContainerEmail = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 1.7rem;

  input {
    margin-bottom: 0;
  }
  
  a {
    padding-top: .3rem;
    color: #117a37;
    font-size: 14px;
    font-weight: 600;
  }
`

export const ConfirmEmail = styled(ContainerEmail) `
  
`

export const CreatePassword = styled(ContainerEmail) `

`

export const ContainerName = styled(ContainerEmail) `
  span {
    margin-top: .5rem;
    font-size: 1rem;
    font-weight: 500;
  }
`

export const DateBorn = styled.div `

`

export const ContainerBirthday = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-top: 2rem;
`

export const fieldset = styled.fieldset `
  border: none;
  display: flex;
`

export const Legend = styled.legend `
  font-size: 16px;
  text-align: end;
  margin-bottom: 1.1rem;
  color: #131313;
  font-weight: 700;
`

export const Span = styled.span `

`

export const Birthday = styled.div `
  margin-bottom: 1rem;
`

export const LabelBirthday = styled.label `
  font-size: 16px;
  color: #131313;
  font-weight: 700;
  position: absolute;
  top: 0;
`