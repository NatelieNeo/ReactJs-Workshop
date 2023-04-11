import React from 'react'
import Button from '@mui/material/Button';

function ButtonList({ handleClick }) {
  const buttonLayout = [
    ["C","(",")","/"],
    ["7","8","9","x"],
    ["4","5","6","-"],
    ["1","2","3","+"],
    ["0",".","DEL","="]
  ];

  const buttons = buttonLayout.map(buttonRow => {
    return <div key={buttonRow.join("")}>
      {
        buttonRow.map(type => {
          return <Button onClick={() => {handleClick(type)}} key={type} color={"/x-+=".includes(type) ? "secondary":"primary"} variant="contained" sx={{ m: .5 }}>{type}</Button>
        })
      }
    </div>
  })

  return (
    <>
      {buttons}
    </>
  )
}

export default ButtonList