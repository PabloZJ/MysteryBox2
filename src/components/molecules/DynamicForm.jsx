import React from 'react';
import { Input } from "../atoms/Input";
import { Form } from "react-bootstrap";
import '../../styles/molecules/DynamicForm.css';

function DynamicForm({ inputs = [], onSubmit }) {
    return (
        <Form
            className="custom-form"
            onSubmit={(e) => { e.preventDefault(); onSubmit && onSubmit(); }}
        >
            {inputs.map((input, index) => (
                <Form.Group
                    key={input.id || index}
                    className="custom-form-group"
                >
                    {input.label && (
                        <Form.Label 
                            className="custom-form-label"
                            htmlFor={input.id}
                        >
                            {input.label}
                        </Form.Label>
                    )}
                    <Input
                        {...input}
                        id={input.id}
                        className={`custom-input ${input.className || ""}`}
                    />
                    {input.error && (
                        <Form.Text className="error-message">
                            {input.error}
                        </Form.Text>
                    )}
                </Form.Group>
            ))}
        </Form>
    );
}

export default DynamicForm;