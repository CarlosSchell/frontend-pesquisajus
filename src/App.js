import { Provider } from 'react-redux'
import store from './store/store';
import RoutesApp from './routes/routes'

export const App = () => {
  console.log('Passou pelo App')

  return (
    <Provider store={store}>
      <RoutesApp/>
    </Provider>
  )
}
