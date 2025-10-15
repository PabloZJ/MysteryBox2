import React from 'react';
import { render, screen } from '@testing-library/react';
import TeamCard from '../../../components/molecules/TeamCard';

describe('TeamCard Component', () => {

    const props = {
        name: 'Juan Pérez',
        role: 'Desarrollador',
        img: 'fake-image.jpg',
    };
    it('renderiza el nombre, el rol y la imagen correctamente', () => {
        render(<TeamCard {...props} />);
        const name = screen.getByText('Juan Pérez');
        expect(name).toBeTruthy();
        const role = screen.getByText('Desarrollador');
        expect(role).toBeTruthy();
        const img = screen.getByAltText('Juan Pérez');
        expect(img).toBeTruthy();
        expect(img.getAttribute('src')).toEqual('fake-image.jpg');
    });
});