import { BrowserRouter, Route } from "react-router-dom";
import Modal from "react-modal";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";
import { Login } from "./pages/Login/index";

import "./services/firebase";
import { Home } from "./pages/home/home";

Modal.setAppElement("#root");

export function App() {
  return (
    <BrowserRouter>
      <Route path="/login" exact component={Login} />
      <TransactionsProvider>
        <Route path="/" exact component={Home} />
        <GlobalStyle />
      </TransactionsProvider>
    </BrowserRouter>
  );
}
