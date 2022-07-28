import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Tasklist from "../Tasklist/Tasklist";
import Routers from "../../routers/Routers"
import "./Layout.css"
const Layout = () => {
    return (  
        <div>
            <Header/>
            <div className="d-flex layout">
                <Tasklist/>
                <Routers/>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Layout;