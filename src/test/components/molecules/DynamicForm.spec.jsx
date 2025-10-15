import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DynamicForm from '../../../components/molecules/DynamicForm';

describe('DynamicForm Component', () => {

    const mockSubmit = jasmine.createSpy('onSubmit');

    const inputs = [
        { id: 'name', label: 'Nombre', type: 'text' },
        { id: 'email', label: 'Correo', type: 'email' },
    ];

    it('renderiza los inputs con sus labels', () => {
        render(<DynamicForm inputs={inputs} />);
        expect(screen.getByLabelText('Nombre')).toBeTruthy();
        expect(screen.getByLabelText('Correo')).toBeTruthy();
    });

    it('llama a onSubmit al enviar el formulario', () => {
        const { container } = render(<DynamicForm inputs={inputs} onSubmit={mockSubmit} />);
        const form = container.querySelector('form');
        fireEvent.submit(form);
        expect(mockSubmit).toHaveBeenCalled();
    });
});