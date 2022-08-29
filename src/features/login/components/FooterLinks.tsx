import { Link } from "react-router-dom"

export const FooterLinks = () => {
  return (
    <div className="footer-links">
      <Link to="/"><a href="">Esqueci minha senha</a></Link>
      <Link to="/">Criar conta</Link>
      <Link to="/">Ajuda</Link>
    </div>
  )
}