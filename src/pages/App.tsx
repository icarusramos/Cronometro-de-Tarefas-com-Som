import React, {useState} from 'react';
import Cronometro  from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';


function App() {
  const [tarefas, setTarefa] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa | undefined>();
  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefa(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
    })));
  }

  function finalizarTarefa() {
    if (selecionado)
    setSelecionado(undefined);

    setTarefa(tarefasAnteriores => 
        tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado?.id){
          return {
            ...tarefa,
            selecionado:false,
            completado: true
          }
        }
        return tarefa;
      }));
    }

  return (
    <div className={style.AppStyle}>
      <Lista 
        tarefas = {tarefas}
        selecionaTarefa = {selecionaTarefa}
      />

       <Cronometro 
        selecionado={selecionado}
        finalizarTarefa = {finalizarTarefa}/>
        
      <Formulario setTarefas = {setTarefa}/>
      
     
    </div>
  );
} 

export default App;
