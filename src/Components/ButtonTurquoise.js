import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        background: '#00C5CD',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 30px',
        margin: '30px 5px'
    },
};

function ButtonTurquoise(props) {
    const { classes, children, className, ...other } = props;

    const HandleClick = () => {
        console.log(props);
        if (props.index !== undefined)props.onHandleClick(props.index);
    };
   
    return (
        <Button className={classNames(classes.root, className)} {...other}
                onClick = {()=>HandleClick()}>
            <img src={props.imgSrc}/>
            {props.label}
        </Button>
    );
}

ButtonTurquoise.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(ButtonTurquoise);

