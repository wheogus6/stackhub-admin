import {useState, useEffect} from 'react';
import {login} from "../../api/authApi";
import {defaultAlert} from "../../utils/alert";
import {isAxiosError} from "axios";
import {isNullOrEmpty} from "../../utils/validation";
import {useNavigate} from "react-router-dom";
import {handleTokenResponse} from "../../utils/authUtils";


export default function LoginPage() {
    const navigate = useNavigate();
    const [adminId, setAdminId] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {

        if (isNullOrEmpty(adminId)) {
            defaultAlert("아이디를 입력해주세요.");
            return;
        }
        if (isNullOrEmpty(password)) {
            defaultAlert("비밀번호를 입력해주세요.");
            return;
        }

        try {
            const res = await login({
                adminId,
                password
            });

            const tokenCode = res.data.code;
            const tokenData = res.data.data;

            if(tokenCode == "00") {
                if (tokenData.accessToken && tokenData.refreshToken) {
                    handleTokenResponse(res.data);
                    navigate('/member');
                } else {
                    defaultAlert('토큰 정보가 없습니다.');
                }
            } else if(tokenCode == "A019") {
                handleTokenResponse(res.data);
                navigate('/login-password');
            }
        } catch (error) {
            if (isAxiosError(error)) {

            } else {
                defaultAlert('예기치 않은 오류가 발생했습니다.');
                console.error('Unknown error:', error);
            }
        }
    };

    useEffect(() => {


    }, []);


    return (
        <>
            <div className="container">
                <div>
                    <h3>ADMIN</h3>
                </div>
                <input type="text"
                       placeholder="ID"
                       value={adminId}
                       onChange={e => setAdminId(e.target.value)}
                />
                <br/>
                <input type="password"
                       placeholder="PW"
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                />
                <br/>
                <a>
                    <button className="loginBT"
                            onClick={handleLogin}
                    >
                        LOGIN
                    </button>
                </a>
            </div>
        </>
    );
}