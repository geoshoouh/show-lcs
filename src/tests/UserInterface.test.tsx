import React from 'react'
import { render, screen, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { ToggleButton } from '../components/ToggleButton';

describe('Sequence input type toggle button', () => {
    const onClickMock = jest.fn();
    render(<App />);
    const button = screen.getByRole('button', { buttonText: 'Random'});

    test('renders', () => {
        expect(button).toBeInTheDocument();
    });

    test('starts with innerHTML Random', ()=> {
        expect(button.innerHTML).toEqual('Random');
    });
});