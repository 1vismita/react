import './App.css';
import Image from "./assets/img.jpeg";

function App() {
  const x=10;
  var text ;

  if (x===10) {
    text ="Equal";
  } else {
    text ="not equal"
  }

  return ( 
  <div className="App">
    <h1> Hello World </h1>
    <p> This is Paragraph</p>
    <h3>{5+50}</h3>
    <img src = {Image} alt="pic" />
    <h2>{text} </h2>
    <h2>{x>10 ? "greater" : "lesser" }</h2>
    </div>
  );
}
  export default App;
