import InputComponent from './Components/InputComponent';
import RegisterForm from './Components/RegisterForm';
import TextInputWithFocusButton from './Components/TextInputWithFocusButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <InputComponent />
      <RegisterForm />
      <TextInputWithFocusButton />
    </div>
  );
}

export default App;
