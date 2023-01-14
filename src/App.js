import './App.css';
import {length12pw, length20pw, length32pw} from './random.js';
import {eff} from './dice.js';

function App() {

  let url = "https://www.eff.org/dice";

  return (
    <div className="App">
        
        <div class= "typewriter">
        <h1>Hello, welcome to my simple password generator!</h1>
        </div>

        <p>The first three buttons creates a randomized password.</p>
        <p>Each password contains letters, digits, and special characters in a random order.</p>
        <p>You can choose between 12, 20, or 32 characters long.</p>


        <div>
          <button onClick = {length12pw}>
            12 character password
          </button>
        </div>

        <div>
          <button onClick = {length20pw}>
            20 character password
          </button>
        </div>

        <div>
          <button onClick = {length32pw}>
            32 character password
          </button>
        </div>

        <p>The button below will create a EFF Dice-Generated Passphrase.</p>
        <p>Its just six random words combined to make one password phrase.</p>
        <p>This is recommended by the <a href={url}>Electric Frontier Foundation</a>.</p>

        <div>
          <button onClick = {eff}>
            EFF passphrase
          </button>
        </div>
        
        <p>Made by Cesar Gutierrez.</p>


    </div>
  );

}

export default App;
