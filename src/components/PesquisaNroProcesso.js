import React, { useState, useEffect, useRef } from 'react'

// https://www.robinwieruch.de/react-function-component
// https://www.robinwieruch.de/redux-vs-usereducer

const Pesquisa = () => {
	const [nroProcesso, setNroProcesso] = useState('')
	const [listaNroProcessos, setListaNroProcessos] = useState([])
	const [isNroProcessoValido, setIsNroProcessoValido] = useState(false)
	const nroProcessoRef = useRef()
	const btnNroProcessoRef = useRef()

	useEffect(() => {
		nroProcessoRef.current.focus()
	})

	const validaNroProcesso = nroProcesso => {
		let re = /[0-9]{7,}[-][0-9]{2}[.][0-9]{4}[.][0-9][.][0-9]{2}[.][0-9]{4}/
		if (re.test(nroProcesso)) {
			return true
		} else {
			return false
		}
	}

	const textToClipboard = nroProcesso => {
		var dummy = document.createElement('textarea')
		document.body.appendChild(dummy)
		dummy.value = nroProcesso
		dummy.select()
		document.execCommand('copy')
		document.body.removeChild(dummy)
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (isNroProcessoValido) {
			setListaNroProcessos(listaNroProcessos => {
				// console.log('listaNroProcessos : ', listaNroProcessos)
				console.log('return listaNroProcessos : ', [...listaNroProcessos, nroProcesso])
				return [...listaNroProcessos, nroProcesso]
			})
			// console.log('handleSubmit : ', nroProcesso)
			// console.log('ListaNroProcessos : ', listaNroProcessos)
			setNroProcesso('')
			setIsNroProcessoValido(false)
		} else {
			// Tratar mensagem de erro
			console.log('handleSubmit : Número de Processo Inválido')
		}
	}

	const nroProcessoHandler = e => {
		console.log(e.target.value)
		const leftZero = '0'
		let nroProcesso = e.target.value.toString()
		setNroProcesso(nroProcesso)
		let lastDigit = nroProcesso.split('')[nroProcesso.length - 1]
		let LastInput = nroProcesso.substring(0, nroProcesso.length - 1)
		// Validação dos 7 primeiros dígitos do número do processo
		if (nroProcesso.length <= 7) {
			let reLessSevenDigits = /[0123456789-]/
			if (!reLessSevenDigits.test(lastDigit)) {
				e.target.value = LastInput
				setNroProcesso(LastInput)
			} else {
				console.log('Entrou')
				if (lastDigit === '-') {
					if (lastDigit === '-') {
						nroProcesso = leftZero.repeat(7 - nroProcesso.length + 1) + nroProcesso
						console.log(nroProcesso)
						e.target.value = nroProcesso
						setNroProcesso(nroProcesso)
					}
				}
			}
		}
		//					 1234567890123456789012345  1234567-89.2020.8.21.0100 1234567-89.2020.8.21-0100
		// // str = '1234567-12.2020.8.21.0100'
		if (nroProcesso.length > 8) {
			if (
				(nroProcesso.length === 11) |
				(nroProcesso.length === 16) |
				(nroProcesso.length === 18) |
				(nroProcesso.length === 21)
			) {
				let reMoreSevenDigits = /[.]/
				if (!reMoreSevenDigits.test(lastDigit)) {
					e.target.value = LastInput
					setNroProcesso(LastInput)
				}
			} else {
				let reMoreSevenDigits = /[0123456789]/
				if (!reMoreSevenDigits.test(lastDigit)) {
					e.target.value = LastInput
					setNroProcesso(nroProcesso)
				}
			}
		}

		// 1234567-12.2020.8.21-1200
		// 2234567-13.2021.8.21.1300
		// 3234567-14.2022.8.21.1400
		// 4234567-15.2023.8.21.1500
		// 5234567-16.2024.8.21.1600
		// 6234567-17.2025.8.21.1700

		// Validação do número do processo completo
		if (nroProcesso.length === 25) {
			// console.log('Chegou nos 25 dígitos : ', '*', nroProcesso, '*')
			e.target.value = nroProcesso.substring(0, 25) // + ' Ok!'
			setNroProcesso(nroProcesso)
			if (validaNroProcesso(nroProcesso)) {
				// console.log(`${nroProcesso} é válido !!!`)
				setIsNroProcessoValido(true)
				btnNroProcessoRef.current.focus()
			} else {
				setIsNroProcessoValido(false)
				console.log(`${nroProcesso}  é Inválido !!!`)
			}
		}
	}

	return (
		<>
			<h1 className='h2 mt-4'>Pesquisa pelo Número do Processo</h1>
			<p className='mt-1'>Digite o Número Completo do Processo</p>
			<p>incluindo os caracteres separadores (-.) </p>
			<p className='example-nroProcesso'>
				ex 0000000
				<strong>-</strong>00
				<strong>.</strong>2020
				<strong>.</strong>8<strong>.</strong>21
				<strong>.</strong>0000
			</p>
			<form className='mt-2' onSubmit={handleSubmit}>
				<input
					className='input-nroProcesso'
					id='nroProcesso'
					name='nroProcesso'
					ref={nroProcessoRef}
					onChange={nroProcessoHandler}
					value={nroProcesso}
					type='text'
					width='25'
					required
					placeholder='0000000-00.0000.0.00.0000'
					pattern='[0-9]{7,}[-][0-9]{2}[.][0-9]{4}[.][0-9][.][0-9]{2}[.][0-9]{4}'
				></input>
				<button
					ref={btnNroProcessoRef}
					className={
						isNroProcessoValido ? 'btn-submit-nroProcesso' : 'btn-wait-nroProcesso'
					}
					type='submit'
				>
					Pesquisar
				</button>
			</form>

			<section>
				<br />
				<div className="link-TJ">
					<button>
						<a
							OnClick={textToClipboard}
							className='btn btn-secondary'
							href='https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index'
							rel='noopener noreferrer nofollow'
							target='_blank'
						>
							Site TJ
						</a>
					</button>
				</div>

				{listaNroProcessos.map((nroProcesso, index) => {
					return (
						<div className='' key={nroProcesso}>
							<h4>{nroProcesso}</h4>
						</div>
					)
				})}
			</section>
		</>
	)
}

export default Pesquisa
