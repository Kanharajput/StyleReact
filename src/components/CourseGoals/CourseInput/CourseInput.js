import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styled from 'styled-components';

const FormHandler = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invalid ? 'red' : 'black')};
  }
  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red': '#ccc')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid label{
    color: red;
  }
  `;



const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setIsValid(true);        
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // not let the user add empty string
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);    
  };

  return (
    <form onSubmit={formSubmitHandler}> 
    {/* invalid true if isValid false */}
      <FormHandler invalid = {!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormHandler>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
