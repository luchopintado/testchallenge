import React from 'react';

const Sidebar = ({ links }) => {
    return (
        <div className="sidebar">
            <ul>
                {
                    links.map((link, index) => (
                        <a
                            href="/#"
                            key={`a-${index}`}
                            role="button"
                            className={link.active ? 'active' : ''}
                        >
                            {link.text} <span className="icon-chevron-right"></span>
                        </a>
                    ))
                }
            </ul>
        </div>
    );
};

export default Sidebar;
