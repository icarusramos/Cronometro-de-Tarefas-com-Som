import Botao from '../Botao'
import Relogio from './Relogio'
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from '../../common/utils/time'
import { ITarefa } from '../../types/tarefa'
import { useEffect, useState } from 'react'
import {Howl} from 'howler';


interface Props{
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}:  Props) {
 
  const [tempo, setTempo] = useState(0);
    
  const sound = new Howl({
    src:['http://localhost:3000/sounds/dun-dun-dun.mp3'],
  });
  
  useEffect(() => {
    if(selecionado?.tempo){
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado])

  function regressiva( contador: number = 0 ){
      setTimeout(() => {
        if(contador > 0){
        setTempo(contador - 1);
        return regressiva(contador - 1);
        }
        sound.play();
        finalizarTarefa();     
        
      }, 1000)
  }
  
  return (
    
    <div className={style.cronometro}>
      <h1  className={style.titulo}>Cronometro</h1>
      <p>
        Escolha um card para iniciar o cronometro
      </p>
      <p>O tempo total desta tarefa é de {tempo} segundos</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Botao onClick={() =>regressiva(tempo)}>
        Começar!!!
      </Botao>
      
    </div>
    
    
  )
}
