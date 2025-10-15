import React from 'react';
import '../../styles/atoms/Title.css';

function Title({ text, className = "" }) {
    return <h1 className={`custom-title ${className}`}>{text}</h1>;
}

export default Title;