import React from 'react'
import TextField from '@mui/material/TextField';

function Display({ expression }) {
  return (
    <TextField fullWidth hiddenLabel id="filled-basic" variant="filled" sx={{ my: 2 }} value={expression === "" ? 0:expression }/>
  )
}

export default Display