import { ReactComponentElement, useState } from 'react';

export function CustomSequenceInput(props) {

    return (
        <>
            <input id="sequence1" onChange={ props.onChange } type="text" className="form-control" placeholder="Sequence 1"/>
            <br/>
            <input id="sequence2" onChange={ props.onChange } type="text" className="form-control" placeholder="Sequence 2"/>
          </>
    );
}