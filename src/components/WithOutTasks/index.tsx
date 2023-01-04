import Clipboard from '/src/assets/Clipboard.svg';

import './withOutTastks.css'
export function WithOutTasks() {
  return (
    <div className="withOutTasks">
      <img src={Clipboard} />
      <div className='withOutTasks-text'>
        <span style={{ fontWeight: 700 }}>Você ainda não tem tarefas cadastradas </span>
        <span> Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}