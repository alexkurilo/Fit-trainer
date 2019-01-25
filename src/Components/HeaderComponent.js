import React from 'react';
import {connect} from 'react-redux';

import SimpleMenu from "./DropdownComponent";

const HeaderComponent = ({namePage}) => {
    const HandleClick = () => {
        console.log("click in header component")
    }
    return(
        <div className={'firstLine'}>
            <div>
                {namePage}
            </div>
            <img    onClick = {(event) => HandleClick(event)}
                    src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"/>
            <SimpleMenu  src = {"https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"}/>
        </div>
    );
};


export default connect(
    (state) => ({

    }),

    dispatch => ({

    })
)(HeaderComponent);