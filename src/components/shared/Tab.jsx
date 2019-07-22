import React from 'react';

const Tabs = () => {
    return (
        <div className="tab">
            <div className="tab-header">
                <a href="#" className="active">All</a>
                <a href="#">Pending</a>
                <a href="#">Approved</a>
                <a href="#">Denied</a>
            </div>
            <div className="tab-content">
                contenido
            </div>
        </div>
    );
};

export default Tabs;
