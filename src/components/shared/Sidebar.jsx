import React from 'react';

const Sidebar = ({ links, onClickLink }) => {
    const handleClick = (evt, link) => {
        evt.preventDefault();
        onClickLink(link)
    };

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
                            onClick={evt => { handleClick(evt, link) }}
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
