import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Text from '../components/atoms/Text.jsx';
import DynamicForm from '../components/molecules/DynamicForm.jsx';
import Button from '../components/atoms/Button.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import "../styles/pages/Login.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Login() {
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = "El email es obligatorio";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido";
        if (!formData.password) newErrors.password = "La contraseña es obligatoria";
        else if (formData.password.length < 6) newErrors.password = "La contraseña debe tener al menos 6 caracteres";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validate()) return;
        const result = login(formData.email, formData.password);
        if (result.success) {
            setMessage("Has iniciado sesión correctamente!");
            setFormData({ email: '', password: '' });
        } else {
            setMessage(result.message);
        }
    };

    const formInputs = [
        {
            id: 'email',
            type: 'email',
            label: 'Correo',
            placeholder: 'Ingresa tu correo',
            value: formData.email,
            onChange: (e) => setFormData({ ...formData, email: e.target.value }),
            error: errors.email,
        },
        {
            id: 'password',
            type: 'password',
            label: 'Contraseña',
            placeholder: 'Ingresa tu contraseña',
            value: formData.password,
            onChange: (e) => setFormData({ ...formData, password: e.target.value }),
            error: errors.password,
        }
    ];

    return (
        <Container className="login-form text-center">
            <div className="user-icon-container">
                <i className="bi bi-person-circle user-icon"></i>
            </div>
            <Text variant="h1" className="login-title">Iniciar Sesión</Text>
            {message && <Text className="message">{message}</Text>}
            <DynamicForm inputs={formInputs} />
            <div className="mt-3 d-flex justify-content-center">
                <Button variant="primary" onClick={handleSubmit}>Aceptar</Button>
            </div>
        </Container>
    );
}

export default Login;