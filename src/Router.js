import ReactDOM from "react-dom/client";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too
import App from "./App";
import WalletPage from "./components/WalletPage";
import Header from "./components/Header";

const Router = () => {

    const [signerWallet, setSignerWallet] = useState("");
    const [info, setInfo] = useState("");

    return(
        <BrowserRouter>
            <Header signerWallet={signerWallet} setSignerWallet={setSignerWallet} setInfo={setInfo}/>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/asd" element={<div>aa</div>} />
                <Route exact path="/wallet/:walletAddress" element={<WalletPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;