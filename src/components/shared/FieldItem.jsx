import React from 'react';

const FieldItem = ({ title, content }) => (
    <div className="item">
        <h5>{title}</h5>
        <p>{content}</p>
    </div>
);

export default FieldItem;
