import App from './App';
import './style/main.scss';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
 ,
  document.getElementById("app"),
);