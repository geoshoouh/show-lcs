import { useState } from 'react';
import './App.css';
import './helpers/LongestCommonSubsequence';
import { LongestCommonSubsequence } from './helpers/LongestCommonSubsequence';
import { LcsDisplay } from './components/LcsDisplay';
import { LcsOutput } from './helpers/LcsOutput';
import { ToggleButton } from './components/ToggleButton';
import { RandomSequenceInput } from './components/RandomSequenceInput';
import { CustomSequenceInput } from './components/CustomSequenceInput';
import { HomeNavbar } from './components/HomeNavbar';

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
      <HomeNavbar /><br/>
      <ToggleButton buttonText={ randomInputInterface ? 'Custom' : 'Random'} onClick={ () => toggleButtonClicked() }/>
      <p/>
      { (randomInputInterface) ? (
          <RandomSequenceInput />
        ) : (
          <CustomSequenceInput onChange={ () => computeLcs() }/>
        )
      }
      <LcsDisplay lcsOutput={ lcsOutput } />
    </div>
  )
}




export default App
