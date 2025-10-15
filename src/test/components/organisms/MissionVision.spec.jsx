import React from 'react';
import { render } from '@testing-library/react';
import MissionVision from '../../../components/organisms/MissionVision';

describe('MissionVision Component', () => {

    it('debería renderizar el componente sin errores', () => {
    const { container } = render(<MissionVision />);
    expect(container).toBeDefined();
    });

    it('debería mostrar los títulos de los InfoCard', () => {
    const { getByText } = render(<MissionVision />);
    
    expect(getByText('Nuestra Historia')).toBeTruthy();
    expect(getByText('Misión')).toBeTruthy();
    expect(getByText('Visión')).toBeTruthy();
    });

});