import React from 'react';
import Table from '../shared/Table';
import Panel from '../shared/Panel';

const headers = ['DATE', 'REASON', 'STATUS'];
const fields = ['date', 'reason', 'status'];
const items = [
    {
        id: 1,
        date: 'Valor 1',
        reason: 'Data Science algorithms',
        status: 1
    },
    {
        id: 2,
        date: 'Valor 2',
        reason: 'Data Science algorithms',
        status: 2
    },
    {
        id: 3,
        date: 'Valor 3',
        reason: 'Data Science algorithms',
        status: 3
    },
    {
        id: 4,
        date: 'Valor 4',
        reason: 'Data Science algorithms',
        status: 1
    },
    {
        id: 5,
        date: 'Valor 5',
        reason: 'Data Science algorithms',
        status: 2
    }
];

const RequestList = () => {
    return (
        <div className="main">
            <h2 className="section-title section-margin">Requests</h2>

            <div className="section">
                <div className="requests-container">
                    <div className="tab">
                        <div className="tab-header">
                            <a href="#" className="active">All</a>
                            <a href="#">Pending</a>
                            <a href="#">Approved</a>
                            <a href="#">Denied</a>
                        </div>
                        <div className="tab-content">
                            <Panel title="All requests">
                                <Table
                                    headers={headers}
                                    fields={fields}
                                    items={items}
                                />
                            </Panel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestList;
