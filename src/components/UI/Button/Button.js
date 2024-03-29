import React from 'react';
import style from './Button.module.css';
import styled from 'styled-components';

// style component code
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
  

//   &:focus 
//     outline: none;

//   &:hover,
//   &:active 
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);

//   @media screen and (min-width: 768px){
//     width: 35%;
//   }

// `;


const Button = props => {
  return (
    <button type={props.type} className={style.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
