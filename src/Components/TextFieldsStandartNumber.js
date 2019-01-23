import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: "column",
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 120,
    },
    dense: {
        marginTop: 19,
    }
});

class TextFieldsStandartNumber extends React.Component {
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    ReadField = (event) => {
        this.props.onReadField(event.target.value);
    };

    render() {
        const { classes } = this.props;

        return (
            <TextField
                id="standard-name"
                type="number"
                label={this.props.placeholder}
                className={classNames(classes.textField)}
                margin="dense"
                onChange={(event)=>this.ReadField(event)}
                value = {this.props.value <= 0 ? "0" : this.props.value}
                defaultValue={"0"}
            />
        );
    }
}

TextFieldsStandartNumber.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFieldsStandartNumber);