// Survey field contains logic to render a single
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    // console.log({...input})
    const renderError = () => {
        return (
            (touched && error) ? <div className="red-text" style={{ marginBottom: '20px' }}>{error}</div> : ''
        );
    }

    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} type="text" /> {/* binding event handlers from redux form */}
            {renderError()}
        </div>
    );
};