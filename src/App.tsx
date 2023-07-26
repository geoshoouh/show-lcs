import { useState } from 'react';
import './App.css';
import './helpers/LongestCommonSubsequence';
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

  const nullLcsOutput: LcsOutput = {sequences: ['', ''], length: 0, indexSequence: [[]], stringSequence: ''};

  const [lcsOutput, setLcsOutput]: [LcsOutput, () => {}] = useState(nullLcsOutput);
  const [randomInputInterface, setRandomInputInterface]: [boolean, () => {}] = useState(false);
  const [sequenceParams, setSequenceParams] = useState({l1: 1, l2: 1, v1: 1, v2: 1});

  const toggleButtonClicked = (): void => {
    setRandomInputInterface(!randomInputInterface);
    setLcsOutput(nullLcsOutput)
  };
  
  return (
    <div className="app-container">
      <HomeNavbar />
      <ToggleButton buttonText={ randomInputInterface ? 'Custom' : 'Random'} onClick={ () => toggleButtonClicked() }/>
      { (randomInputInterface) ? (
          <RandomSequenceInput setter={ setLcsOutput }/>
        ) : (
          <CustomSequenceInput setter={ setLcsOutput }/>
        )
      }
      <LcsDisplay lcsOutput={ lcsOutput } />
    </div>
  )
}

export default App
