import { ReactComponentElement, useState } from 'react';

export function ToggleButton(props) {
    return (
        <>
            <button 
                className="btn btn-primary" 
                type="submit"
                onClick={ () => props.onClick() }>
                { props.buttonText }
            </button>
        </>
    );
}