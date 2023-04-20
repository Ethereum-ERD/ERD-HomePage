import { observer } from "mobx-react";

import Footer from "src/Footer";
import Banner from "src/Banner";
import Main from "src/Main";
import Top from 'src/Top';

import "./App.css";

function App() {

    return (
        <div className="App">
            <Top>
                <Banner />
                <Main />
            </Top>
            <Footer />
        </div>
    );
}

export default observer(App);
