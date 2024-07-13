import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { EditFormProvider } from "../src/context/EditFormContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
    <EditFormProvider>
    <App />,
    </EditFormProvider>
)
