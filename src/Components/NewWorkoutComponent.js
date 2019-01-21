import React from 'react';
import {connect} from 'react-redux';

const NewWorkoutComponent = () => {
    
    return(
        <div className={'myPage'}>
            New Workout Component
        </div>
    );
};


export default connect(
    (state) => ({

    }),

    dispatch => ({

    })
)(NewWorkoutComponent);