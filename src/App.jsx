import { BrowserRouter, Route,Routes } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home";
import Cart from "./Components/Cart";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />}  exact/>
          <Route path="/Cart" element={<Cart />} exact  />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App