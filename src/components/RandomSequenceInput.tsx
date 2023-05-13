import { ReactComponentElement, useState } from 'react';

export function RandomSequenceInput(props) {

    return (
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
    );
}