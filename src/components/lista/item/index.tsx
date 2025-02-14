import { Itarefa } from "../../../types/tarefas";
import style from "./item.module.scss";

interface Props extends Itarefa{
    selecionaTarefa:(tarefaSelecionada:Itarefa)=>void
}

export default function Item({
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa } :Props){
    return (
        <li 
        className={`${style.item} ${selecionado ? style.itemSelecionado:''} 
        ${completado ? style.itemCompletado : ''}`} 
        onClick={()=>!completado && selecionaTarefa(
        {
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
        {completado && <span className={style.concluido} 
        aria-Label="Tarefa cocluida"></span>}
    </li>
    )
}