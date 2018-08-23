import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/survey_list.component'

const Dashboard = () => {
    return (
        <div>
            <h3>Dashboard</h3>
            <SurveyList />
            <div className="fixed-action-btn">
                <Link className="btn-floating btn-large red" to="/surveys/new">
                    <i className="large material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;