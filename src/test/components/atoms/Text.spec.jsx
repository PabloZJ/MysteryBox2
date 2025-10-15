import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '../../../components/atoms/Text';

describe('Text Atom', () => {
    it('renderiza texto y aplica clase', () => {
    render(<Text className="extra">Hola</Text>);
    const el = screen.getByText('Hola');
    expect(el).toBeTruthy();
    expect(el).toHaveClass('custom-text');
    expect(el).toHaveClass('extra');
    });
});