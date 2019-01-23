import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
}));

function SimpleSelect() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
    labelWidth: 0,
  });
  const inputLabelRef = React.useRef(null);

  React.useEffect(() => {
    setState({
      ...state,
      labelWidth: ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth,
    });
  }, []);

  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form className={classes.root} autoComplete="off">
      
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-label-placeholder">
          Age
        </InputLabel>
        <Select
          value={state.age}
          onChange={(event)=>this.ReadField(event)}
            
          input={<Input name="age" id="age-label-placeholder" />}
          displayEmpty
          name="age"
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {this.props.data.map((item, index) => (
              <MenuItem  key={index} value={item.exercisesName}>{ item.exercisesName }</MenuItem>
            ))}
        </Select>
        <FormHelperText>Label + placeholder</FormHelperText>
      </FormControl>
      
    </form>
  );
}

export default SimpleSelect;