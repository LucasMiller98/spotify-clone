import { SelectProps } from "./types/types";
import * as S from './styles'
import { useState } from "react";
import { Errors } from '../errors/Errors'

export function Select({isStronger = false, isOnBlur = false, ...props}: SelectProps) {

  const [isOnblurSelectState, setIsOnBlurSelectState] = useState(false)

  const options = [
    'Mês',
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  
  const handleOnBlur = (isOnBlurSelect: boolean, setectOnBlur: string) => {
    if(isOnBlurSelect && setectOnBlur.trim() === '') {
      setIsOnBlurSelectState(true)
    }else{
      setIsOnBlurSelectState(false)
    }
  }
  
  return (
    <S.Container>
      <S.Label 
        className={`${isStronger && 'stronger'}`} 
        htmlFor={props.htmlFor}
      >
        {props.label}
      </S.Label>
      <S.Select 
        { ...props } 
        onBlur={() => handleOnBlur(isOnBlur, props.value)}
        value={props.value}
        className={`${isOnblurSelectState && 'selectStateOnBlur'}`} 
      >
        { options.map((value, key) => (
          <S.Options key={key}>{value}</S.Options>
        )) }
      </S.Select>

      <Errors 
        text=''
        isDisplaying
        isFieldOnBlur
      />
    </S.Container>
  )
}