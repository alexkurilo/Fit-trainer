import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    // opacity: 0.1,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'meters',
    label: 'm',
  },
  {
    value: 'minutes',
    label: 'min',
  },
  {
    value: 'kilogramms',
    label: 'kg',
  }
];

class TextFieldsSelectExercisesNative extends React.Component {
  state = {
      name: 'Cat in the Hat',
      age: '',
      multiline: 'Controlled',
      currency: 'EUR',
  };

  handleChange = name => event => {
      this.setState({
          [name]: event.target.value,
      });
  };

  ReadField = (event) => {
    this.props.onReadField(event.target.value);
  };

  ReadIndex = (index) => {
      this.props.readIndex(index);
  }

  render() {
    const { classes } = this.props;
    //console.log(this.props.data);
    this.ReadIndex(this.props.value);
    return (
        <TextField
            id="filled-select-currency-native"
            select
            label={this.props.placeholder}
            className={classes.textField}
            defaultValue={this.props.value}
            value={this.props.value}
            onChange={(event)=>this.ReadField(event)}
            SelectProps={{
                native: true,
                MenuProps: {
                    className: classes.menu,
                },
            }}
            margin="normal"
            variant="filled"
        >
            {this.props.data.map((item, index) => (
              <option key={index} value={item.exercisesName}>
                  { item.exercisesName }
                  {}
              </option>
            ))}
        </TextField>
    );
  }
}

TextFieldsSelectExercisesNative.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFieldsSelectExercisesNative);