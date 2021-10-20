import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import MenuComponent from './Components/MenuComponent';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Hello</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent></MenuComponent>
    </div>

  );
}

export default App;
