import React from 'react'
import style from './Botao.module.scss'

type Props = {
  children?: React.ReactNode;
  type?: "submit" | "button" | "reset" | undefined; 
  onClick?: () => void;
}

function Botao({children, type, onClick}: Props) {
  return (
    <button 
      className={style.botao} 
      type={type} 
      onClick={onClick}>
      {children}
    </button>
  )
}
/*
velharia
class Botao2 extends React.Component <Props> {
  render() {
    const { type = 'button', onClick } = this.props;
    return (
    <button type={type} onClick={onClick}  className={style.botao}> 
      {this.props.children}
    </button>
    )
    }
  }
*/
  export default Botao;