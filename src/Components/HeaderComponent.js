import React from 'react';
import {connect} from 'react-redux';

import SimpleMenu from "./DropdownComponent";

const HeaderComponent = ({namePage}) => {
    return(
        <div className={'firstLine'}>
            <div>
                {namePage}
            </div>
            <SimpleMenu  src = {"https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"}/>
        </div>
    );
};


export default HeaderComponent;