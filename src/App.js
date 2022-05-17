//import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import FormContextProvider from './components/FormContext';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <FormContextProvider>
        <UserForm />
      </FormContextProvider>
      
    </div>
  );
}

export default App;
