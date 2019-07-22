import React from 'react';

const Panel = ({ title, children }) => (
    <div className="panel">
        <div className="panel-title">
            <h5>{title}</h5>
        </div>
        <div className="panel-body">
            {children}
        </div>
    </div>
);

export default Panel;