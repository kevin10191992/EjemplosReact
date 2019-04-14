import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


function Contador(props) {
  const [contador, setContador] = useState(props.inicial)
  return (
    <div>
      <p>Contador con Hooks: {contador}</p>
      <button onClick={() => { setContador(contador + 1) }}>Increment</button>
    </div>
  );
}

function Lista(props) {

  const lista = props.lista.map((item,index) => {
    return <li key={index}>{item.title}</li>
  })

  return (
    lista
  );
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Ejemplo React',
      entrys: []

    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({ entrys: data });
        console.log(this.state.entrys);
      });

  }



  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Contador inicial={0} />
        <br />
        <Lista lista={this.state.entrys} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
