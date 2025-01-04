import { Container } from "react-bootstrap";
import "./App.css";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";

function App() {
   return ( 
    <Container>
      <Home/>
      <Services/>
    </Container>
  );
}

export default App;