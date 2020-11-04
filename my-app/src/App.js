import Login from "./components/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
}

export default App;
