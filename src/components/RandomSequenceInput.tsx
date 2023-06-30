import { ReactComponentElement, useState } from 'react';
import { LongestCommonSubsequence } from '../helpers/LongestCommonSubsequence';

export function RandomSequenceInput(props) {
    
     const computeLcs = (): void => {
        const l1: number = document.getElementById("random-length-1")?.value;
        const l2: number = document.getElementById("random-length-2")?.value;
        const v1: number = document.getElementById("random-variance-1")?.value;
        const v2: number = document.getElementById("random-variance-2")?.value;
        const sequence1: string = LongestCommonSubsequence.generateRandomSequence(l1, v1);
        const sequence2: string = LongestCommonSubsequence.generateRandomSequence(l2, v2);
        props.setter(LongestCommonSubsequence.longestCommonSubsequence(sequence1, sequence2));
     }  

    return (
        <>
          <div className="input-group mb-3">
            <span className="input-group-text">Length 1</span>
            <input id="random-length-1" type="number" className="form-control" placeholder="Length of first sequence" onChange={ () => computeLcs() }/>
            <span className="input-group-text">Variance 1</span>
            <input id="random-variance-1" type="number" className="form-control" placeholder="Variance level of first sequence" onChange={ () => computeLcs() }/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Length 2</span>
            <input id="random-length-2" type="number" className="form-control" placeholder="Length of second sequence" onChange={ () => computeLcs() }/>
            <span className="input-group-text">Variance 2</span>
            <input id="random-variance-2" type="number" className="form-control" placeholder="Variance level of second sequence" onChange={ () => computeLcs() }/>
          </div>
        </>
    );
}