import { AddButton, SaibaMaisBtn } from './style'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  text: string
}
const Button = ({ variant, text }: ButtonProps) => {
  return variant === 'primary' ? (
    <AddButton>{text}</AddButton>
  ) : (
    <SaibaMaisBtn>{text}</SaibaMaisBtn>
  )
}

export default Button