import { Button } from './ButtonPag.styles'
interface Props {
  text: string | number
  handleClick: () => void
  active?: boolean
}

export default function ButtonPag({ text, handleClick, active }: Props) {
  return (
    <Button onClick={handleClick} className={`${active ? 'active' : null}`}>
      {text}
    </Button>
  )
}
