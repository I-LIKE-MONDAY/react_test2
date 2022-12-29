import './App.css';
import {getData, getData1} from "./es6/Promise";

function App() {
  getData();
  
  getData1()
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });

  return (
    <div className="App">

    </div>
  );
}




export default App;
