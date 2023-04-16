import React from 'react';
import { render, screen } from '@testing-library/react';
import ActList from './ActList';

test('renders act list', () => {
    const acts = [
        { id: 1, title: ' Chess Player' },
        { id: 2, title: ' Software Developer' },
    ];

    render(<ActList acts={acts} />);

    acts.forEach(act => {
        expect(screen.getByText(act.title)).toBeInTheDocument();
    });
});
