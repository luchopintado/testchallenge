import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';

import Table from '../shared/Table';
import Panel from '../shared/Panel';
import { connect } from 'react-redux';
import { fetchRequests } from '../../actions/requests'
import Tab from '../shared/Tab';

const headers = ['DATE', 'REASON', 'STATUS'];
const fields = ['date', 'reason', 'status'];
const tabHeaders = [
    { id: 0, text: 'All' },
    { id: 1, text: 'Pending' },
    { id: 2, text: 'Approved' },
    { id: 3, text: 'Denied' },
];
const filterData = (data, status) => {
    return data.filter(item => {
        if (status > 0) {
            return item.status === status;
        }
        return true;
    });
};

const RequestList = (props) => {
    const [tabHeader, setTabHeader] = useState(tabHeaders[0]);

    useEffect(() => {
        props.fetchRequests();
    }, []);

    const filteredData = filterData(props.data, tabHeader.id);

    return (
        <div className="main">
            <h2 className="section-title section-margin">Requests</h2>

            <div className="section">
                <div className="requests-container">
                    <Tab headers={tabHeaders} onChangeTab={tabHeader => setTabHeader(tabHeader)}>
                        <Panel title={`${tabHeader.text} requests`}>
                            <Table
                                headers={headers}
                                fields={fields}
                                items={filteredData}
                            />
                        </Panel>
                    </Tab>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ requests }) => ({
    ...requests
});
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchRequests,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RequestList);
