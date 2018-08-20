// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // justlike redux 'connect' function
import { Link } from 'react-router-dom';

import SurveyField from './survey_field.component';
import validateEmails from '../../utlils/validate_emails.utils';
import FIELDS from './form_fields.data';

class SurveyForm extends Component {
    renderFields(fields) {
        return (
            <div>
                {fields.map(({ name, label }) => {
                    return (
                        <Field
                            key={name}
                            type="text"
                            name={name}
                            label={label}
                            component={SurveyField}
                        />);
                })}
            </div>
        );
    }

    render() {
        return (
            <div>
                <p>SurveyForm</p>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields(FIELDS)}
                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div >
        );
    }
}

function validate(values) {
    const errors = {};
    // if (!values.title) {
    //     errors.title = 'You must provide a title';
    // }

    // if (!values.subject) {
    //     errors.title = 'You must provide a subject';
    // }

    // if (!values.body) {
    //     errors.title = 'You must provide a body';
    // }
    errors.recipients = validateEmails(values.recipients || '');

    FIELDS.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);