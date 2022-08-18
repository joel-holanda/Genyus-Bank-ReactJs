import './appBar.scss';
import logo from "../../_assets/logo.svg";
import close from "../../_assets/close.svg"

export const AppBar = () => {
  return (
    <div id="top-bar">
      <img src={logo} alt="logo Genyus" />
      <button className="btn btn-close" >
        <img src={close} alt="fechar" />
        <span>Fechar</span>
      </button>
    </div>
  )
}