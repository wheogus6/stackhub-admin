import { Outlet } from "react-router-dom";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function AdminLayout() {

    return (
        <div className="layout">
            <Header />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}