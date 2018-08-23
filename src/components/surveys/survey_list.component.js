import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, removeSurvey } from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    removeSurvey(id) {
        this.props.removeSurvey(id);
    }

    renderSurveys() {

        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card blue-grey darken-1" key={survey._id}>
                    <span className="right white-text">
                        <span className="btn-floating btn-small red" onClick={() => { this.removeSurvey(survey._id) }}>
                            <i className="large material-icons">close</i>
                        </span>
                    </span>
                    <div className="card-content white-text">
                        <span className="card-title">{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className="right">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys, removeSurvey })(SurveyList);