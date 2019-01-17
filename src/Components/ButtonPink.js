import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// We can inject some CSS into the DOM.
const styles = {
    root: {
        background: '#CD00CD',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 30px',
        margin: '30px 0'
    },
};

function ButtonPink(props) {
    const { classes, children, className, ...other } = props;

    return (
        <Button className={classNames(classes.root, className)} {...other}>
            {'SIGN IN'}
        </Button>
    );
}

ButtonPink.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(ButtonPink);
