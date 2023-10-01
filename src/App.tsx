import Form from "./components/Form";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <h1 className="header">Song Details</h1>
      <div className="app-container">
        <Main />
        <Form />
      </div>
    </div>
  );
}

export default App;
