import { Provider } from 'react-redux'
import store from './store/store';
import RoutesApp from './routes/routes'

import './styles/bootstrap.min.css';
import "./styles/custom.css"


export const App = () => {
  console.log('Passou pelo App')

  return (
    <Provider store={store}>
      <RoutesApp/>
    </Provider>
  )
}
