import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const routes = [
    {
        text: 'Review',
        url: '/data/show',
    },
    {
        text: 'Request',
        url: '/request',
    },
    {
        text: 'Manage',
        url: '/data/edit',
    },
];

const Header = ({ location }) => {
    return (
        <header>
            <div className="brand"><span>Data Gate</span></div>
            <nav>
                <ul>
                    {
                        routes.map((route, index) => {
                            const activeClass = location.pathname === route.url ? 'active' : '';

                            return (
                                <li key={`nav-li-${index}`}>
                                    <Link className={activeClass} to={route.url}>{route.text}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </header>
    );
};

export default withRouter(Header);
