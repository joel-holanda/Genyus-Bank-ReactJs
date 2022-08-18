interface Props{
  text: string
}

function Button({ text }: Props) {
  return (
    <button id="button">{text}</button>
  )
  
};

export default Button;