import React from 'react'
import {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {evaluate} from 'mathjs'

import Display from './Display'
import ButtonList from './ButtonList'

function Calculator() {
  const [expression, setExpression] = useState("");

  const specialSymbols = "+-x/.";

  const addToInput = type => {if (!(specialSymbols.includes(type) && specialSymbols.includes(expression.slice(-1)))){ setExpression(expression+type) }}
  const undo = () => {setExpression(expression.slice(0,-1))}
  const clear = () => {setExpression("")}
  const compute =  () => {setExpression(evaluate(expression.replace("x","*")).toString())}

  const handleClick = (type) => {
    if (type === "C"){
      clear();
    }else if (type === "DEL"){
      undo();
    }else if (type === "="){
      compute();
    }else{
      addToInput(type);
    }
  }

  return (
    <Card>
        <CardContent>
            <Display expression={expression}/><br/>
            <ButtonList handleClick={handleClick}/>
        </CardContent>
    </Card>
  )
}

export default Calculator;