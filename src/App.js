import './App.css';
import {length12pw, length20pw, length32pw} from './random.js';
import {eff} from './dice.js';

function App() {
  return (
    <div className="App">
        <h1>Hello welcome to my simple password generator!</h1>

        <p>Option 1 creates a randomized password that contains letters, digits, and special characters.
          It will allow you to choose an option between 12, 16, 20, or 32 character length.
        </p>

        <p>Option 2 will use the EFF Dice-Generated Passphrase to generate a randomized six-word passphrase
        </p>

        <div>
          <button onClick = {length12pw}>
            Option 1
          </button>
        </div>

        <div>
          <button onClick = {length20pw}>
            Option 2
          </button>
        </div>

        <div>
          <button onClick = {length32pw}>
            Option 3
          </button>
        </div>

        <div>
          <button onClick = {eff}>
            Option 4
          </button>
        </div>
    </div>
  );
}

export default App;
