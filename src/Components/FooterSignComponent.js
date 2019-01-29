import React from 'react';
import {connect} from 'react-redux';

const FooterSignComponent = ({}) => {
    return(
        <div className={"footerIn"}>
            <div className={"footerInlinks"}>
                <div>
                    SIGN IN
                </div>
                <div>
                    SIGN UP
                </div>
                
            </div>
            <div>
                &#169; 2019 Alex Kurilo, made with love for a better web
            </div>
        </div>
    );
};


export default connect(
    (state) => ({
        props: state.props
    })
)(FooterSignComponent);