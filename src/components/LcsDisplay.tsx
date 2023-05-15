import React, {Fragment, ReactComponentElement, useState } from 'react';
import { LcsOutput } from '../helpers/LcsOutput';

export function LcsDisplay(props: { lcsOutput: LcsOutput }) {

    const s1: string = props.lcsOutput.sequences[0];
    const s2: string = props.lcsOutput.sequences[1];
    const mapping: number[][] = props.lcsOutput.indexSequence;

    let displayS1: ReactComponentElement[] = [];
    let displayS2: ReactComponentElement[] = [];

    let sets: Set<number>[2] = [new Set<number>(), new Set<number>()];

    
    mapping.forEach((pair) => {
        sets[0].add(pair[0]);
        sets[1].add(pair[1]);
    });

    for (let i = 0; i < s1.length; i++) {
        displayS1.push(
                (sets[0].has(i)) ? 
                    <span style={{ color: 'red' }}>{ s1.charAt(i) }</span> : 
                    <>{ s1.charAt(i) }</>
        );
    }
    for (let i = 0; i < s2.length; i++) {
        displayS2.push(
                (sets[1].has(i)) ? 
                    <span style={{ color: 'red' }}>{ s2.charAt(i) }</span> : 
                    <>{ s2.charAt(i) }</>
        );
    }

    return (
        <>
            <br/>
            <h3>{ "Length: " + props.lcsOutput.length }</h3><br/>
            { displayS1.map((item, index) => (
                <React.Fragment key={`displayS1_${index}`}>
                    {item}
                </React.Fragment>
            )) }<br/>
            { displayS2.map((item, index) => (
                <React.Fragment key={`displayS1_${index}`}>
                    {item}
                </React.Fragment>
            )) }
        </>
    );
}