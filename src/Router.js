import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too
import App from "./App";
import WalletPage from "./components/WalletPage";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/asd" element={<div>aa</div>} />
                <Route exact path="/wallet/:walletAddress" element={<WalletPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;