import React from 'react';
import './Field.scss';
import {useState} from 'react';
import { MdClose } from "react-icons/md";
import { AiFillBug } from "react-icons/ai";

function Field(props) {
  return (
    <div className="Field-component">
      <div className={`Field ${props.win && 'wygrana'}`} >
        {props.value == 1 ? <MdClose color='white' size='30'/> : props.value == null ? ' ' : <AiFillBug color='red' size='30'/> }
    
      </div>
    </div>
  );
}

export default Field;