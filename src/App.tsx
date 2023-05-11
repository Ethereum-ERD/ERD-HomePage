import { observer } from "mobx-react";

import Experience from "src/Experience";
import Footer from "src/Footer";
import Banner from "src/Banner";
import Audit from "src/Audit";
import Main from "src/Main";
import Top from 'src/Top';

import "./App.css";

function App() {

    return (
        <div className='App'>
            <Top>
                <Banner />
                <Main />
            </Top>
            <Experience />
            <Audit />
            <Footer />
        </div>
    );
}

export default observer(App);
