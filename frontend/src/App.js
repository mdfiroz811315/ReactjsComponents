/*
function App() {
  return (
    <div> hello world </div>
)
}

export default App;
*/
import Footer from "./components/Footer";
import Header from "./components/Header";
import Table from "./components/Table";


function App() {
  let header = "HTML Table from JS";
  let name = "My Name Is Firoz";
  return (
    <div>
      <Header heading = {header} name={name}/>
      <Table />
      <Footer />
    </div>

  )
}

export default App;
