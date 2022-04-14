import React, {useState} from 'react'
import {ITarefa} from '../../types/tarefa';
import Botao from '../Botao'
import style from './Formulario.module.scss'
import {v4 as uuidv4} from 'uuid'


interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario ({setTarefas} : Props){
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00:00");
  function salvarTarefa (evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    setTarefas(tarefasAntigas =>
      [
        ...tarefasAntigas,
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id : uuidv4()
        }
      ]
    )
    setTarefa("")
    setTempo("00:00:00")
  }
  return (
    
    <form className={style.novaTarefa} onSubmit={salvarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input 
          type="text" 
          name="tarefa" 
          id="tarefa"
          value={tarefa}
          onChange={(evento) => setTarefa(evento.target.value)}
          placeholder="O que você quer estudar?"
          required
          />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input 
          type="time"
          name="tempo"
          id="tempo"
          step="1"
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value)}
          min="00:00:01"
          max="02:30:00"
          required
        />
      </div>
       
     
        <Botao type="submit">
          Adicionar
        </Botao>
        
     
    </form>
  )
}

/*class Formulario02 extends React.Component <{
    setTarefa: React.Dispatch<React.SetStateAction<ITarefa[]>>
  }> {
  state = {
    tarefa: "",
    tempo: "00:00:00",
  }

  salvarTarefa = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    this.props.setTarefa(tarefasAntigas =>
      [
        ...tarefasAntigas,
        {
          ...this.state,
          selecionado: false,
          completado: false,
          id : uuidv4()
        }
      ]
    )
    this.setState({tarefa: "", tempo: "00:00:00"})
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.salvarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input 
            type="text" 
            name="tarefa" 
            id="tarefa"
            value={this.state.tarefa}
            onChange={(evento) => this.setState({...this.state, tarefa: evento.target.value})}
            placeholder="O que você quer estudar?"
            required
            />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input 
            type="time"
            name="tempo"
            id="tempo"
            step="1"
            value={this.state.tempo}
            onChange={(evento) => this.setState({...this.state, tempo: evento.target.value})}
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
         
       
          <Botao type="submit">
            Adicionar
          </Botao>
          
       
      </form>
    )
    }
  }
*/
  export default Formulario;