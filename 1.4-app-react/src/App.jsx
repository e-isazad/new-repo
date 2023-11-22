import React from "react";
import "./App.css";
import Inputxx from "./components/Inputxx";
import Tablex from "./components/Tablex";
import '@coreui/coreui/dist/css/coreui.min.css'


function App() {
  // const [data, setData] = useState('');
  // useEffect(() => {
  //  axios('')
  // }, []);
  return (
    <React.Fragment>
    <h1>WELCOME GITHUB</h1>
      <Inputxx />
      <Tablex  />
    </React.Fragment>
  );
}

export default App;
