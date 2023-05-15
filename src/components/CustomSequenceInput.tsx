import { ReactComponentElement, useState } from 'react';
import { LongestCommonSubsequence } from '../helpers/LongestCommonSubsequence';

export function CustomSequenceInput(props) {

    const computeLcs = (): void => {
        const sequence1: string = document.getElementById("sequence1")?.value;
        const sequence2: string = document.getElementById("sequence2")?.value;
        props.setter(LongestCommonSubsequence.longestCommonSubsequence(sequence1, sequence2));
    }  

    return (
        <>
            <input id="sequence1" onChange={ () => computeLcs() } type="text" className="form-control" placeholder="Sequence 1"/>
            <br/>
            <input id="sequence2" onChange={ () => computeLcs() } type="text" className="form-control" placeholder="Sequence 2"/>
          </>
    );
}

