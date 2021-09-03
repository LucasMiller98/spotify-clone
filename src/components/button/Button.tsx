import { ButtonTypes } from './types/types'
import cx from 'classnames'
import * as S from './styles'

export function Button({ isBlueColor = false , isGreenDarkRegister = false, isGreenDarkLogin = false, ...props }: ButtonTypes) {
  return (
    <S.Button 
      className={cx(
      { blueColor: isBlueColor },
      { greenDarkRegister: isGreenDarkRegister },
      { greenDarkLogin: isGreenDarkLogin },
    )} { ...props } />
  )
}