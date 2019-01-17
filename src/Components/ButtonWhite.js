import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// We can inject some CSS into the DOM.
const styles = {
    root: {
        background: '#00C5CD',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 30px',
        margin: '30px 0'
    },
};

function ButtonWhite(props) {
    const { classes, children, className, ...other } = props;

    return (
        <Button className={classNames(classes.root, className)} {...other}>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"/>
            {"Sign in"}
        </Button>
    );
}

ButtonWhite.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(ButtonWhite);

