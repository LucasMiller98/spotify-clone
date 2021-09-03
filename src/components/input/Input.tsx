import { useState } from 'react'
import * as S from './styles'
import { InputProps } from './types/types'
import { Errors } from '../errors/Errors'

export function Input({
  isGreater = true, 
  isAppearanceNone = false,
  isStronger = true, 
  isRadio = false, 
  isGender = false, 
  isOnBlur = false,
  ...props}: InputProps) {

  const [isOnblurState, setIsOnblur] = useState(false)
    
  const handleOnBlur = (isOnBlurField: boolean, fieldEmpty: string) => {
    if(isOnBlurField && fieldEmpty.trim() === '') {
      setIsOnblur(true)
    }else{
      setIsOnblur(false)
    }
  }
  
  return (
    <>
      <S.Container className={`${isGender ? 'gender': ''}`}>
        <S.Label 
          htmlFor={props.htmlFor} 
          className={`${!isStronger && 'not-strong'}`}
        >
          {props.label}
        </S.Label>
        <S.Field 
          { ...props } 
          onBlur={() => handleOnBlur(!isOnBlur, props.value)}
          className={`
          ${!isGreater && 'not-greater'} 
          ${isRadio && 'input-radio'} 
          ${isAppearanceNone && 'appearance-none'} 
          ${isOnblurState && 'onBlur'}
        `} />

        <Errors 
          text=''
          isDisplaying={isRadio}
          isFieldOnBlur={isOnblurState}
        />
      </S.Container>
    </>
  )
}
