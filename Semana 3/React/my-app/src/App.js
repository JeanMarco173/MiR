import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;

/*
constructor(props){
    super(props)
    this.state = { value:0 }
    this.clickHandler = this.clickHandler.bind(this)
}
clickHandler(){
    console.log("prevState", this.state.value)
    this.setState({ value: this.state.value + 1 })
}
render(){
    return (
        <div>
        <button id ="inc" onClick= {this.clickHandler}>Incrementa</button>
        <span>{this.state.value}</span>
        </div>
    )
}

// Constador de caracteres

constructor(props){
  super(props)
  this.state = { value:0 }
  this.clickHandler = this.clickHandler.bind(this)
}
clickHandler( event ){
  const characters = event.target.value;
  this.setState({ value: characters.length })
}
render(){
  return (
      <div>
        <textarea rows="3" onChange={this.clickHandler}></textarea>
        <div >{this.state.value}</div>
      </div>
  )}
}

//Repetidor

constructor(props){
  super(props)
  this.state = { text: '' }
}
handleChange = e => {
  this.setState({ text: e.target.value })
}
render(){
  return(
    <div>
      <input type="text" onChange={this.handleChange}></input>
      <p>{this.state.text}</p>
    </div>
  )
}

//Mostrar texto

constructor(props){
  super(props)
  this.state = { isVisible: false }
}
handleChange = e => {
  this.setState({ isVisible: !this.state.isVisible })
}
render(){
  return(
    <div>
      <label><input type="checkbox" onChange={this.handleChange}/>Mostrar información importante</label>
      { this.state.isVisible ? <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> : null }
    </div>
  )
  }
//Primer componente
class Welcome extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <h1>Hola {this.props.name}</h1>
    )
  }
}

export default class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <Welcome name="Juan"/>
        <Welcome name="Pedro"/>
        <Welcome name="German"/>
      </div>
    )
  }
}
*/