import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import RoutesApp from './routes/routes'
import './styles/bootstrap.min.css'
import './styles/custom.css'

function App() {
    // eslint-disable-next-line no-console
    console.log('Passou pelo App')

    return (
        <Provider store={store}>
            <RoutesApp />
        </Provider>
    )
}

export default App
