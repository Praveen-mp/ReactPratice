import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import MenuComponent from './Components/MenuComponent';
import { dishes } from './shared/dishes';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
       dishes:dishes
    };
  }
render(){
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Hello</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent dishes={this.state.dishes}></MenuComponent>
    </div>

  );
}
}
export default App;
