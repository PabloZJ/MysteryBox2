import React from 'react';
function Text({ children, variant = 'p', className = "" }) {
    const Tag = variant; 
    return <Tag className={`custom-text ${className}`}>{children}</Tag>;
}

export default Text;