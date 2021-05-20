import React from 'react'
import PropTypes from 'prop-types'
import * as Icon from 'react-bootstrap-icons'

const Processos = ({ processos, onDelete }) => {
    return (
        <div>
            {processos.map((processo) => (
                <div key={processo.processo}
                    style={{
                        fontSize: '1.1rem',
                        marginLeft: '12px',
                        marginBottom: '0px',
                        textAlign: 'left'
                    }}>
                    <div style={{ marginBottom: '0px', color: 'black' }}>
                        <Icon.Trash
                            style={{ marginBottom: '0px' }}
                            onClick={() => {
                                onDelete({
                                    processo: processo.processo,
                                    descricao: processo.descricao
                                })
                            }}
                        />
                        {'    '}
                        {processo.descricao}
                        &nbsp;
                    </div>

                    <div style={{ marginBottom: '3px' }}>
                        {processo.processo}
                        {'    '}
                        <Icon.ArrowDown />
                        <Icon.ArrowUp />
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    )
}

Processos.propTypes = {
    onDelete: PropTypes.func.isRequired,
    processos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            processo: PropTypes.string,
            descricao: PropTypes.string
        })
    ).isRequired
}

export default Processos
