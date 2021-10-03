// import logo from './logo.svg';
// import './App.css';
function App() {
  return (
    <div className="App">
      <Person name="John"></Person>
      <Person></Person>
    </div>
  );
}
function Person(props) {
  console.log(props);

  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>lorem ipsum dolor sit</p>
    </div>
  );
}
export default App;
