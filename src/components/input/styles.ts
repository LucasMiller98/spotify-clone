import styled from 'styled-components'

export const Container = styled.div `
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  &.gender {
    display: flex;
    justify-content: flex-end;
    flex-direction: row-reverse;
    align-items: center;
  }
`

export const Field = styled.input `
  padding: 17px;
  color: #131313;
  font-weight: 700;
  margin-top: .8rem;
  border-radius: 5px;
  border: 2px solid #7f7f7f;
  font-size: 1.1rem;
  width: 100%;

  &:hover {
    border: 2px solid #000;
  }

  &::placeholder {
    color: #7f7f7f;
  }

  &.not-greater {
    width: 90px;

    &::-webkit-inner-spin-button {
      appearance: none;
    }
  }

  &.input-radio {
    margin-top: 0;
    margin-right: 1rem;
    width: 1vw;
  }

  &.mouse-out {
    border: 2px solid #f00;
    color: #f00;
  }

  &.appearance-none {
    appearance: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      position: absolute;
      height: 60%;
      width: 60%;
      background: #117a37;
      border-radius: 50%;
      opacity: 0;
      transition: opacity .3s
    }

    &:checked::before {
      opacity: 1;
    }

    &:focus {
      box-shadow: 0 0 0 1px #117a37;
    }
    
    &:hover {
      border: 2px solid #117a37;
    }
  }

  &.onBlur {
    border: 2px solid #f00;
  }
`

export const Label = styled.label `
font-size: 16px;
color: #131313;
font-weight: 700;

display: flex;
justify-content: flex-start;

  &.not-strong {
    font-weight: 500;
    font-size: .9rem;
  }
`
