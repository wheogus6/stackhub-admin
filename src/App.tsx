import AppRouter from "./routes/AppRouter";
import {useLocation} from 'react-router-dom';
import './styles/admin.css';
import './styles/common.css';
import './styles/header.css';
import './styles/member.css';
import './styles/member_detail.css';
import './styles/partner.css';
import './styles/partner_detail.css';

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
