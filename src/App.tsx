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
    <div className="container">
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
            <h1>Random Input Interface Placeholder</h1>
          </>
        ) : (
          <>
            <input id="sequence1" onChange={ () => computeLcs() } type="text" className="form-control" placeholder="Sequence 1"/>
            <br/>
            <input id="sequence2" onChange={ () => computeLcs() } type="text" className="form-control" placeholder="Sequence 2"/>
          </>
        )
      }
      {/*
      { (randomInputInterface) ? (
          <h1>Random Input Interface</h1>
        ) : (
          <input id="sequence1" onChange={ computeLcs } type="text" className="form-control" placeholder="Sequence 1"/><br/>
          <input id="sequence2" onChange={ computeLcs } type="text" className="form-control" placeholder="Sequence 2"/>
      ) }   
        */}
      <LcsDisplay lcsOutput={ lcsOutput } />
    </div>
  )
}




export default App
