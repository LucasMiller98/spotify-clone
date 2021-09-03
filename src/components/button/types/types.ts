import { ButtonHTMLAttributes } from 'react'

export type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> & {
  isBlueColor: boolean
  isGreenDarkRegister: boolean
  isGreenDarkLogin: boolean
}
