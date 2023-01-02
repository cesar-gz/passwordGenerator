import './App.css';
import {oldSchool} from './random.js';
import {eff} from './dice.js';

function App() {
  return (
    <div className="App">
        <h1>Hello welcome to my simple password generator!</h1>

        <h2>Option 1 creates a randomized password that contains letters, digits, and special characters.
          It will allow you to choose an option between 12, 16, 20, or 32 character length.
        </h2>

        <h2>Option 2 will use the EFF Dice-Generated Passphrase to generate a randomized six-word passphrase
        </h2>

        <div>
          <button onClick = {oldSchool}>
            Option 1
          </button>
        </div>

        <div>
          <button onClick = {eff}>
            Option 2
          </button>
        </div>
    </div>
  );
}

export default App;
