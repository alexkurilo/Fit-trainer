import React from 'react';
import {connect} from 'react-redux';

const InComponent = ({}) => {

    return(
        <div className={'inComponent'}>
            <div className={'firstLine'}>
                <div>
                    Sign in
                </div>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"/>
            </div>
        </div>
    );
};


export default connect(
    (state) => ({

    }),

    dispatch => ({

    })
)(InComponent);