import React from 'react'
import Processo from './Processo'

const Processos = ({ processos, onDelete, onToggle }) => {
  <div>
    {processos.map((processo) => (
      <Processo key={processo.id} processo={processo} onDelete={onDelete} onToggle={onToggle} />
    ))}
  </div>
}

export default Processos
