import React from 'react';
import {connect} from 'react-redux';

const DashboardComponent = () => {
    
    return(
        <div className={'myPage'}>
            Dashboard Component
        </div>
    );
};


export default connect(
    (state) => ({

    }),

    dispatch => ({

    })
)(DashboardComponent);