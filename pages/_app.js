//import '../styles/globals.cs
import reset from '../app/assets/styles/reset.css'
import variable from '../app/assets/styles/variable.scss'
import global from '../app/assets/styles/global.scss'

import { Provider } from 'react-redux'
import { setupStore } from '../app/store/index'
function MyApp({ Component, pageProps }) {
  const store = setupStore()
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
