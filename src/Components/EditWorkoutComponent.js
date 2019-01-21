import React from 'react';
import {connect} from 'react-redux';

const EditWorkautComponent = () => {
    
    return(
        <div className={'myPage'}>
            Edit Workout Component
        </div>
    );
};


export default connect(
    (state) => ({

    }),

    dispatch => ({

    })
)(EditWorkautComponent);