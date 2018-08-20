// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FIELDS from './form_fields.data';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const renderFields = () => {
        return FIELDS.map(({ name, label }) => {
            return (
                <div key={name}>
                    <label>{label}</label>
                    <div>{formValues[name]}</div>
                </div>
            );
        });
    };

    return (
        <div>
            <h5>Please confirm your enties</h5>
            <div>
                {renderFields()}
            </div>
            <button type="button" className="yellow btn-flat white-text darken-2"
                onClick={onCancel}>
                Back
            </button>
            <button type="submit" className="green white-text btn-flat right"
                onClick={() => submitSurvey(formValues, history)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStatetoProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStatetoProps, actions)(withRouter(SurveyFormReview));