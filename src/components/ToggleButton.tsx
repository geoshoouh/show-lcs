import React, { ReactComponentElement, useState } from 'react';

export function ToggleButton(props) {
    return (
        <>
            <button 
                className="btn btn-primary mb-3" 
                type="submit"
                onClick={ () => props.onClick() }>
                { props.buttonText }
            </button>
        </>
    );
}