// SurveyNew is a container shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './survey_form.component';
import SurveyFormReview from './survey_form_review.component';

class SurveyNew extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { showFormReview: false }
    // }

    state = { showFormReview: false } // shortcut for constructor

    renderContent() {
        return (this.state.showFormReview) ?
            <SurveyFormReview onCancel={() => {
                return this.setState({ showFormReview: false })
            }} /> :
            <SurveyForm onSurveySubmit={() => {
                return this.setState({ showFormReview: true })
            }} />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm',
    destroyOnUnmount: true // default value
})(SurveyNew);