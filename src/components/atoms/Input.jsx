import React from 'react';
import { Form } from "react-bootstrap";
import '../../styles/atoms/Input.css';

function Input({ className = "", type = "text", ...props }) {
    const componentProps = {
        className: `custom-input ${className}`,
        ...(type === "textarea" ? { as: "textarea" } : { type }),
        ...props,
    };
    return <Form.Control {...componentProps} />;
}

export { Input };