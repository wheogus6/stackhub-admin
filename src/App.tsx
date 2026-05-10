import AppRouter from "./routes/AppRouter";
import {useLocation} from 'react-router-dom';
import './styles/admin.css'

function App() {

    const location = useLocation();

    return (
        <>
            <AppRouter/>
            <div id="modal-root"></div>
        </>
    );
}

export default App;
