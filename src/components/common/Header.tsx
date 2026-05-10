import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header id="adminHeader">
            <div className="header_con">
                <nav className="headerNav">
                    <ul>
                        <li>
                            <Link to="/member">
                                ADMIN
                            </Link>
                        </li>
                        <li className="menu">
                            <Link to="/member">
                                회원관리
                            </Link>
                        </li>
                        <li className="menu">
                            <Link to="/partner">
                                업체관리
                            </Link>
                        </li>
                        <li className="menu">
                            <button>
                                로그아웃
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}