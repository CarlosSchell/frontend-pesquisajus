import React from 'react'

const IconPesquisar = () => {
    return (
        <div className="menuicon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-zoom-in"
                viewBox="0 0 16 16"
            >
                <path
                    fillRule="evenodd"
                    d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
                <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
            </svg>
            <div style={{ fontSize: '12px', color: 'black' }}>
                <strong>Pesquisar</strong>
            </div>
        </div>
    )
}

export default IconPesquisar
