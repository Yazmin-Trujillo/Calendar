import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavigationBar from './NavigationBar';


describe('NavigationBar component', () => {

    it('when the page loads', () => {
        const yearChangeFn =  jest.fn();
        const monthChangeFn =jest.fn();

        render(<NavigationBar yearChange={yearChangeFn} monthChange={monthChangeFn}/>);

        const buttonBack=screen.getByTestId('buttonBack')
        expect(buttonBack).toBeInTheDocument()
        // const notePanel = screen.getByTestId('note-panel');
        // expect(notePanel.classList).toContain('minimized');

        // const noteContent = screen.getByTestId('note-content');
        // act(() => noteContent.click());
        // expect(notePanel.classList).not.toContain('minimized');
    });

})