import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    name: "Reginaldo",
    conter: 0
  }

  updateConter = () => {
    const { conter } = this.state;

    this.setState({ conter: conter + 1 });
  }

  changeName = (event) => {
    event.preventDefault();
    this.setState({ name: "Reginaldo Bonaldi" });

    this.updateConter();
  }
  render() {

    const { name, conter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {name} {conter}
          </p>
          <a onClick={this.changeName}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>
        </header>
      </div>
    );
  }

}

export default App;
