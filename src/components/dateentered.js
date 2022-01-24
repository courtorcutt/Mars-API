import React from "react";

// the user will be able to choose a date to see the resulting 
// photo + explaination from handleChange in App.js
import DatePicker from "react-datepicker";

// the randomized date will be chosen using a button
// when the button is clicked to display a surprise date, the handleClick
// funciton is called
import { Button } from "semantic-ui-react";
    
const DateInput = props => (
  <React.Fragment>
    {/*<p id="date-header">ENTER A DATE TO LOOK THROUGH TELESCOPE:</p>*/}
    {/*<DatePicker id="date-picker" selected={props.date} onChange={props.handleChange} />*/}
    <Button id="date-button" floated="right" onClick={props.handleClick}> Look Through Telescope Into Past! </Button>
  </React.Fragment>
);

export default DateInput;
