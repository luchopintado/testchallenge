import React, { useState } from 'react';

const Tabs = ({ headers, onChangeTab, children }) => {
    const [current, setCurrent] = useState(0);
    const handleChange = (evt, header) => {
        evt.preventDefault();
        setCurrent(header.id);
        onChangeTab(header);
    }

    return (
        <div className="tab">
            <div className="tab-header">
                {
                    headers.map((header, index) => {
                        return (
                            <a
                                href="/"
                                role="button"
                                key={`tab-${index}`}
                                onClick={evt => handleChange(evt, header)}
                                className={current === index ? 'active' : ''}
                            >
                                {header.text}
                            </a>
                        );
                    })
                }
            </div>
            <div className="tab-content">
                {children}
            </div>
        </div>
    );
};

export default Tabs;
