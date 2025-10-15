import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Text from '../components/atoms/Text.jsx';
import DynamicForm from '../components/molecules/DynamicForm.jsx';
import Button from '../components/atoms/Button.jsx';
import "../styles/pages/Contacto.css";

function Contacto() {
    const initialFormData = { name: '', email: '', mensaje: '' };
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
        if (!formData.email.trim()) {
            newErrors.email = "El correo es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Correo no válido";
        }
        if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje es obligatorio";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validate()) {
            alert("Se ha enviado el formulario con éxito");
            setFormData(initialFormData);
            setErrors({});
        }
    };

    const handleClear = () => {
        setFormData(initialFormData);
        setErrors({});
    };

    const formInputs = [
        {
            id: 'name',
            type: 'text',
            label: 'Nombre',
            placeholder: 'Ingresa tu nombre',
            value: formData.name,
            onChange: (e) => setFormData({ ...formData, name: e.target.value }),
            error: errors.name
        },
        {
            id: 'email',
            type: 'email',
            label: 'Correo',
            placeholder: 'Ingresa tu correo',
            value: formData.email,
            onChange: (e) => setFormData({ ...formData, email: e.target.value }),
            error: errors.email
        },
        {
            id: 'mensaje',
            type: 'textarea',
            label: 'Mensaje',
            placeholder: 'Ingrese el mensaje',
            rows: 3,
            value: formData.mensaje,
            onChange: (e) => setFormData({ ...formData, mensaje: e.target.value }),
            error: errors.mensaje
        },
    ];

    return (
        <Container className="my-5 contact-form">
            <Text variant="h1" className="mb-3 text-center">Contacto</Text>
            <Text variant="p" className="mb-4 text-center">
                Llena el formulario para poder contactarte
            </Text>
            <DynamicForm inputs={formInputs} />
            <div className="mt-3 d-flex justify-content-center">
                <Button variant="primary" onClick={handleSubmit} className="me-2">
                    Enviar
                </Button>
                <Button variant="secondary" onClick={handleClear}>
                    Limpiar
                </Button>
            </div>
        </Container>
    );
}

export default Contacto;