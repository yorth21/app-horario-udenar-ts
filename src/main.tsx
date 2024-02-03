import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
const rootElement = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(rootElement).render(
  <App />
)
