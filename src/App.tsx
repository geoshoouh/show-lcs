import { useState } from 'react';
import './App.css';
import './helpers/LongestCommonSubsequence';
import { LongestCommonSubsequence } from './helpers/LongestCommonSubsequence';
import { LcsDisplay } from './components/LcsDisplay';
import { LcsOutput } from './helpers/LcsOutput';
import { ToggleButton } from './components/ToggleButton';

//*******For dev utility only**********
const s1: string = 'AGGTAB';
const s2: string = 'GXTXAYB';
//*************************************

function App() {

  const [lcsOutput, setLcsOutput] = useState(LongestCommonSubsequence.longestCommonSubsequence('', ''));
  const [randomInputInterface, setRandomInputInterface]: [boolean, () => {}] = useState(false);

  const computeLcs = (): void => {
    const sequence1: string = document.getElementById("sequence1")?.value;
    const sequence2: string = document.getElementById("sequence2")?.value;
    setLcsOutput(LongestCommonSubsequence.longestCommonSubsequence(sequence1, sequence2));
  }  

  const toggleButtonClicked = (): void => setRandomInputInterface(!randomInputInterface);
  


  return (
    <div className="app-container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <img src="src/assets/github-logo.svg" alt="" width="30" height="24"/>
          <span className="navbar-brand mb-0 h1">Longest Common Subsequence</span>
        </div>
      </nav><br/>
      <ToggleButton buttonText={ randomInputInterface ? 'Custom' : 'Random'} onClick={ () => toggleButtonClicked() }/>
      <p></p>
      { (randomInputInterface) ? (
          <>
            <div className="input-group mb-3">
              <span className="input-group-text">Length 1</span>
              <input id="random-length-1" type="number" className="form-control" placeholder="Length of first sequence"/>
              <span className="input-group-text">Variance 1</span>
              <input id="random-variance-1" type="number" className="form-control" placeholder="Variance level of first sequence"/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Length 2</span>
              <input id="random-length-2" type="number" className="form-control" placeholder="Length of second sequence"/>
              <span className="input-group-text">Variance 2</span>
              <input id="random-variance-2" type="number" className="form-control" placeholder="Variance level of second sequence"/>
            </div>
          </>
        ) : (
          <>
            <input id="sequence1" onChange={ () => computeLcs() } type="text" className="form-control" placeholder="Sequence 1"/>
            <br/>
            <input id="sequence2" onChange={ () => computeLcs() } type="text" className="form-control" placeholder="Sequence 2"/>
          </>
        )
      }
      <LcsDisplay lcsOutput={ lcsOutput } />
    </div>
  )
}




export default App
