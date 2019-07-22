import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Sidebar from '../shared/Sidebar';

import { fetchFields, updateField } from '../../actions/fields'
import FieldContainer from './FieldContainer';
import FormContainer from './FormContainer';

const VIEW_SHOW = 'VIEW_SHOW';
const VIEW_EDIT = 'VIEW_EDIT';

const createLinks = (fields, currentField) => {
    return fields.map((field, index) => ({
        id: field.id,
        text: field.name,
        active: currentField ? field.id === currentField.id : false,
    }));
};

const searchField = (data, fieldId) => {
    return data.find(d => d.id === fieldId);
}

const DataShow = (props) => {
    const [currentView, setCurrentView] = useState(VIEW_SHOW);
    const [currentField, setCurrentField] = useState(props.data.length ? props.data[0] : null);

    useEffect(() => {
        props.fetchFields();
    }, []);

    const handleSidebarItemClick = (field) => {
        setCurrentField(searchField(props.data, field.id));
        setCurrentView(VIEW_SHOW);
    };

    const editField = () => {
        setCurrentView(VIEW_EDIT);
    };

    const saveField = (field) => {
        console.log('save field');
        console.log(field);
        props.updateField(field.id, field);
        setCurrentView(VIEW_SHOW);
    };

    return (
        <div className="main">
            <h2 className="section-title">Manage Data</h2>

            <div className="sections">
                <div className="sidebar-container">
                    <Sidebar
                        links={createLinks(props.data, currentField)}
                        onClickLink={handleSidebarItemClick}
                    />

                    <div className="margin">
                        <button type="button" className="btn btn-outline"><span className="icon-add"></span> Add key</button>
                    </div>
                </div>
                <div className="main-container">
                    <div className="margin-large">
                        {currentView === VIEW_SHOW && <FieldContainer field={currentField} onEditField={editField} />}
                        {currentView === VIEW_EDIT && <FormContainer field={currentField} saveField={saveField} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ fields }) => ({
    ...fields,
});
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchFields,
    updateField,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DataShow);
